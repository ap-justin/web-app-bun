import { TxArgs, TxTypes } from "./types";
import { erc20 } from "contracts/evm/ERC20";
import { indexFund } from "contracts/evm/index-fund";
import { multisig } from "contracts/evm/multisig";
import { toTuple } from "helpers";

export const txs: { [T in TxTypes]: (args: TxArgs<T>) => string } = {
  // //// MULTISIG ////
  "multisig.submit-transaction": (tx) =>
    multisig.encodeFunctionData("submitTransaction", toTuple(tx)),
  "multisig.add-owner": ({ address }) =>
    multisig.encodeFunctionData("addOwner", [address]),
  "multisig.remove-owner": ({ address }) =>
    multisig.encodeFunctionData("removeOwner", [address]),
  "multisig.confirm-tx": ({ id }) =>
    multisig.encodeFunctionData("confirmTransaction", [id]),
  "multisig.execute-tx": ({ id }) =>
    multisig.encodeFunctionData("executeTransaction", [id]),

  // //// ERC20 ////
  "erc20.transfer": (transfer) =>
    erc20.encodeFunctionData("transfer", toTuple(transfer)),
  "erc20.approve": (allowance) =>
    erc20.encodeFunctionData("approve", toTuple(allowance)),

  // //// INDEX FUND ////
  "index-fund.config": (config) =>
    indexFund.encodeFunctionData("updateConfig", [toTuple(config)]),
  "index-fund.update-owner": ({ newOwner }) =>
    indexFund.encodeFunctionData("updateOwner", [newOwner]),
  "index-fund.create-fund": (fund) =>
    indexFund.encodeFunctionData("createIndexFund", toTuple(fund)),
  "index-fund.remove-fund": ({ id }) =>
    indexFund.encodeFunctionData("removeIndexFund", [id]),
  "index-fund.remove-member": ({ id }) =>
    indexFund.encodeFunctionData("removeMember", [id]),
  "index-fund.update-members": (update) =>
    indexFund.encodeFunctionData("updateFundMembers", toTuple(update)),
  "index-fund.update-alliance-list": (update) =>
    indexFund.encodeFunctionData("updateAllianceMemberList", toTuple(update)),
};
