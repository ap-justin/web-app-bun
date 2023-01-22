import { Interface } from "@ethersproject/abi";
import type { BigNumberish } from "@ethersproject/bignumber";
import ERC20ABI from "abi/ERC20.json";

/** gas and gasPrice set by provider when presenting to user */

export type EVMTx = {
  //all prefixed-hex
  from: string;
  to: string;
  nonce: string;
};

export type SendNativeTx = EVMTx & {
  value: string; // funds
};
export type ContractTx = EVMTx & { data: string };

export type SimulSendNativeTx = Pick<SendNativeTx, "from" | "to" | "value">;
export type SimulContractTx = Pick<ContractTx, "from" | "to" | "data">;

const encoder = new Interface(ERC20ABI);
const balanceOfFn = encoder.getFunction("balanceOf");
const transferFn = encoder.getFunction("transfer");

export const balanceOf = {
  encode(address: string) {
    return encoder.encodeFunctionData(balanceOfFn, [address]);
  },
  parse(result: string) {
    const { balance } = encoder.decodeFunctionResult(balanceOfFn, result);

    //just convert to string, let consumer condense
    return (balance as BigNumberish).toString();
  },
};

export const transfer = {
  encode(to: string, amount: string) {
    return encoder.encodeFunctionData(transferFn, [to, amount]);
  },
};
