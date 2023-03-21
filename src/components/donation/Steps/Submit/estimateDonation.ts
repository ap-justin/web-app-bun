import { Coin, MsgExecuteContract, MsgSend } from "@terra-money/terra.js";
import { SimulContractTx, SimulSendNativeTx } from "types/evm";
import { WithWallet } from "contexts/WalletContext";
import { Estimate, SubmitStep } from "slices/donation";
import Account from "contracts/Account";
import CW20 from "contracts/CW20";
import { transfer } from "contracts/ERC20";
import GiftCard from "contracts/GiftCard";
import { condense, logger, scale, scaleToStr } from "helpers";
import { estimateGas } from "helpers/cosmos/estimateGas";
import { ap_wallets } from "constants/ap_wallets";
import { EIPMethods } from "constants/evm";
import { estimateTerraGas } from "./estimateTerraGas";
import getBreakdown from "./getBreakdown";

export async function estimateDonation({
  recipient,
  details: { token, tokens, pctLiquidSplit },
  wallet,
}: WithWallet<SubmitStep>): Promise<Estimate | null> {
  const native = tokens[0];

  try {
    if (wallet.type === "cosmos") {
      const { fromBal, fromGift } = getBreakdown(token);
      const contract = new Account(wallet);
      const msgs = [];
      if (fromBal) {
        const scaledAmount = scaleToStr(fromBal, token.decimals);
        msgs.push(
          token.type === "juno-native" || token.type === "ibc"
            ? contract.createTransferNativeMsg(
                scaledAmount,
                ap_wallets.juno_deposit,
                token.token_id
              )
            : new CW20(wallet, token.token_id).createTransferMsg(
                scaledAmount,
                ap_wallets.juno_deposit
              )
        );
      }
      if (fromGift) {
        msgs.push(
          new GiftCard(wallet).createSpendMsg(
            recipient.id,
            fromGift,
            token,
            pctLiquidSplit
          )
        );
      }

      const { feeAmount, doc } = await estimateGas(msgs, wallet);

      return {
        type: wallet.type,
        wallet,
        fee: { amount: feeAmount, symbol: native.symbol },
        doc,
      };
    }
    // terra native transaction, send or contract interaction
    else if (wallet.type === "terra") {
      const scaledAmount = scaleToStr(token.amount, token.decimals);

      const msg =
        token.type === "terra-native" || token.type === "ibc"
          ? new MsgSend(wallet.address, ap_wallets.terra, [
              new Coin(token.token_id, scaledAmount),
            ])
          : new MsgExecuteContract(wallet.address, token.token_id, {
              transfer: {
                amount: scaledAmount,
                recipient: ap_wallets.terra,
              },
            });

      const { feeAmount, tx } = await estimateTerraGas([msg], wallet);
      return {
        type: wallet.type,
        wallet,
        fee: { amount: feeAmount, symbol: native.symbol },
        tx,
      };
    }
    // evm transactions
    else {
      const native = tokens[0];
      const scaledAmount = scale(token.amount, token.decimals).toHex();
      const tx: SimulSendNativeTx | SimulContractTx =
        token.type === "evm-native"
          ? { from: wallet.address, value: scaledAmount, to: ap_wallets.eth }
          : {
              from: wallet.address,
              to: token.token_id,
              data: transfer.encode(ap_wallets.eth, scaledAmount),
            };

      const { provider } = wallet;

      const [nonce, gas, gasPrice] = await Promise.all([
        provider.request<string>({
          method: EIPMethods.eth_getTransactionCount,
          params: [wallet.address, "latest"],
        }),

        //for display in summary only but not
        provider.request<string>({
          method: EIPMethods.eth_estimateGas,
          params: [tx],
        }),
        provider.request<string>({
          method: EIPMethods.eth_gasPrice,
        }),
      ]);
      const feeAmount = condense(gasPrice, native.decimals).mul(gas).toNumber();

      return {
        type: wallet.type,
        wallet,
        fee: { amount: feeAmount, symbol: native.symbol },
        tx: { ...tx, nonce },
      };
    }
  } catch (err) {
    logger.error(err);
    return null;
  }
}
