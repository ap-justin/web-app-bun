import Long from "long";
import { PubKey } from "@keplr-wallet/proto-types/cosmos/crypto/secp256k1/keys";
import { SignMode } from "@keplr-wallet/proto-types/cosmos/tx/signing/v1beta1/signing";
import type { SignerInfo } from "@keplr-wallet/proto-types/cosmos/tx/v1beta1/tx";
import {
  AuthInfo,
  TxBody,
  TxRaw,
} from "@keplr-wallet/proto-types/cosmos/tx/v1beta1/tx";
import type { Any } from "@keplr-wallet/proto-types/google/protobuf/any";
import { JSONAccount, SimulateRes } from "types/cosmos";
import { Estimate } from "types/tx";
import { WalletState } from "contexts/WalletContext";
import { condenseToNum } from "helpers/decimal";
import { base64FromU8a } from "helpers/encoding";

const GAS_PRICE = "0.075";

// This is the multiplier used when auto-calculating the fees
// https://github.com/cosmos/cosmjs/blob/5bd6c3922633070dbb0d68dd653dc037efdf3280/packages/stargate/src/signingstargateclient.ts#L290
const GAS_ADJUSTMENT = 1.5;

export async function estimateCosmosFee(
  wallet: WalletState,
  msgs: Any[],
  attribute?: string
): Promise<Estimate> {
  const { chain_id, lcd_url, native_currency } = wallet.chain;
  const { account } = await fetch(
    lcd_url + `/cosmos/auth/v1beta1/accounts/${wallet.address}`
  ).then<{ account: JSONAccount }>((res) => res.json());

  const pub = PubKey.fromJSON({ key: account.pub_key.key });
  const signer: SignerInfo = {
    publicKey: {
      typeUrl: account.pub_key["@type"],
      value: PubKey.encode(pub).finish(),
    },
    modeInfo: {
      single: { mode: SignMode.SIGN_MODE_DIRECT },
      multi: undefined,
    },
    sequence: account.sequence,
  };

  const authInfo: AuthInfo = {
    signerInfos: [signer],
    fee: {
      amount: [],
      gasLimit: "0",
      granter: "",
      payer: wallet.address,
    },
  };

  const txBody: TxBody = {
    messages: msgs,
    memo: "",
    extensionOptions: [],
    nonCriticalExtensionOptions: [],
    timeoutHeight: "0",
  };

  const bodyBytes = TxBody.encode(txBody).finish();
  const simTx: TxRaw = {
    bodyBytes,
    authInfoBytes: AuthInfo.encode(authInfo).finish(),
    //num of signature must match num of signers
    signatures: [new Uint8Array(0)],
  };

  const res = await fetch(lcd_url + "/cosmos/tx/v1beta1/simulate", {
    method: "POST",
    body: JSON.stringify({
      tx_bytes: base64FromU8a(TxRaw.encode(simTx).finish()),
    }),
  }).then<SimulateRes>((res) => {
    //TODO: create fetch wrapper than handle response error by default
    if (!res.ok) throw new Error();
    return res.json();
  });

  const gas = res.gas_info.gas_used;
  const adjustedGas = Math.ceil(+gas * GAS_ADJUSTMENT);
  const atomicFeeAmount = Math.ceil(adjustedGas * +GAS_PRICE); //e.g 4253ujuno
  const condensedFeeAmount = condenseToNum(atomicFeeAmount); //e.g 0.004253juno

  const authInfoWithFee: AuthInfo = {
    ...authInfo,
    fee: {
      amount: [
        { amount: `${atomicFeeAmount}`, denom: native_currency.token_id },
      ],
      gasLimit: `${adjustedGas}`,
      granter: "",
      payer: wallet.address,
    },
  };

  //add fee to estimated Tx
  return {
    fee: {
      amount: condensedFeeAmount,
      symbol: native_currency.symbol,
      coinGeckoId: native_currency.coingecko_denom,
    },
    tx: {
      type: "cosmos",
      val: {
        authInfoBytes: AuthInfo.encode(authInfoWithFee).finish(),
        bodyBytes,
        accountNumber: Long.fromString(account.account_number),
        chainId: chain_id,
      },
      attribute,
    },
  };
}
