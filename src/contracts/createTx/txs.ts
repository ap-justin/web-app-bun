import { TxArgs, TxType } from "types/tx";
import { toTuple } from "helpers";
import { accounts } from "../evm/Account";
import { erc20 } from "../evm/ERC20";
import { charityApplication } from "../evm/charity-application";
import { giftCard } from "../evm/gift-card";
import { indexFund } from "../evm/index-fund";
import { multisig } from "../evm/multisig";
import { registrar } from "../evm/registrar";

export const txs: { [T in TxType]: (args: TxArgs<T>) => string } = {
  // //// ACCOUNTS ////
  "accounts.create-endowment": (aif) =>
    accounts.encodeFunctionData("createEndowment", [toTuple(aif)]),
  "accounts.update-controller": (update) =>
    accounts.encodeFunctionData("updateEndowmentController", [toTuple(update)]),
  "accounts.update-settings": (update) =>
    accounts.encodeFunctionData("updateEndowmentSettings", [toTuple(update)]),
  "accounts.update-allowlist": (update) =>
    accounts.encodeFunctionData("updateEndowmentAllowlist", toTuple(update)),
  "accounts.update-fee-settings": (update) =>
    accounts.encodeFunctionData("updateFeeSettings", [toTuple(update)]),
  "accounts.deposit-erc20": (args) =>
    accounts.encodeFunctionData("depositERC20", toTuple(args)),
  "accounts.withdraw": (args) =>
    accounts.encodeFunctionData("withdraw", toTuple(args)),
  "accounts.close": (args) =>
    accounts.encodeFunctionData("closeEndowment", toTuple(args)),
  "accounts.invest": () => "", //future
  "accounts.redeem": () => "", //future

  // //// MULTISIG ////
  "multisig.submit-transaction": (tx) =>
    multisig.encodeFunctionData("submitTransaction", toTuple(tx)),
  "multisig.add-owners": ({ addresses }) =>
    multisig.encodeFunctionData("addOwners", [addresses]),
  "multisig.remove-owners": ({ addresses }) =>
    multisig.encodeFunctionData("removeOwners", [addresses]),
  "multisig.confirm-tx": ({ id }) =>
    multisig.encodeFunctionData("confirmTransaction", [id]),
  "multisig.revoke-tx": ({ id }) =>
    multisig.encodeFunctionData("revokeConfirmation", [id]),
  "multisig.execute-tx": ({ id }) =>
    multisig.encodeFunctionData("executeTransaction", [id]),
  "multisig.change-threshold": ({ threshold }) =>
    multisig.encodeFunctionData("changeApprovalsRequirement", [threshold]),
  "multisig.change-auto-execute": ({ autoExecute }) =>
    multisig.encodeFunctionData("changeRequireExecution", [!autoExecute]),
  "multisig.change-duration": ({ duration }) =>
    multisig.encodeFunctionData("changeTransactionExpiry", [duration]),

  "multisig/review.confirm-prop": ({ id }) =>
    multisig.encodeFunctionData("confirmProposal", [id]),
  "multisig/review.execute-prop": ({ id }) =>
    multisig.encodeFunctionData("executeProposal", [id]),

  // //// ERC20 ////
  "erc20.transfer": (transfer) =>
    erc20.encodeFunctionData("transfer", toTuple(transfer)),
  "erc20.approve": (allowance) =>
    erc20.encodeFunctionData("approve", toTuple(allowance)),

  // //// INDEX FUND ////
  "index-fund.config": (config) =>
    indexFund.encodeFunctionData("updateConfig", [toTuple(config)]),
  "index-fund.create-fund": (fund) =>
    indexFund.encodeFunctionData("createIndexFund", toTuple(fund)),
  "index-fund.remove-fund": ({ id }) =>
    indexFund.encodeFunctionData("removeIndexFund", [id]),
  "index-fund.remove-member": ({ id }) =>
    indexFund.encodeFunctionData("removeMember", [id]),
  "index-fund.update-members": (update) =>
    indexFund.encodeFunctionData("updateFundMembers", toTuple(update)),

  "charity-application.approve": ({ id }) =>
    charityApplication.encodeFunctionData("approveCharity", [id]),
  "charity-application.reject": ({ id }) =>
    charityApplication.encodeFunctionData("rejectCharity", [id]),

  "registrar.update-owner": ({ newOwner }) =>
    registrar.encodeFunctionData("updateOwner", [newOwner]),
  "registrar.update-config": (config) =>
    registrar.encodeFunctionData("updateConfig", [toTuple(config)]),
  "registrar.add-token": ({ token }) =>
    registrar.encodeFunctionData("setTokenAccepted", [token, true]),

  "gift-card.spend": (gift) =>
    giftCard.encodeFunctionData("executeSpend", toTuple(gift)),
  "gift-card.deposit-native": (flow) =>
    giftCard.encodeFunctionData("executeDeposit", toTuple(flow)),
  "gift-card.deposit-erc20": (flow) =>
    giftCard.encodeFunctionData("executeDepositERC20", toTuple(flow)),
};
