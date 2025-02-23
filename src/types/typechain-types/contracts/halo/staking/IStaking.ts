/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface IStakingInterface extends utils.Interface {
  functions: {
    "lastStakedFor(address)": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "stakeFor(address,uint256)": FunctionFragment;
    "supportsHistory()": FunctionFragment;
    "token()": FunctionFragment;
    "totalStaked()": FunctionFragment;
    "totalStakedAt(uint256)": FunctionFragment;
    "totalStakedFor(address)": FunctionFragment;
    "totalStakedForAt(address,uint256)": FunctionFragment;
    "unstake(uint256,uint256)": FunctionFragment;
    "updateConfig(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "lastStakedFor"
      | "stake"
      | "stakeFor"
      | "supportsHistory"
      | "token"
      | "totalStaked"
      | "totalStakedAt"
      | "totalStakedFor"
      | "totalStakedForAt"
      | "unstake"
      | "updateConfig"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "lastStakedFor",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "stakeFor",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsHistory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalStaked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalStakedAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalStakedFor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalStakedForAt",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateConfig",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "lastStakedFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsHistory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalStakedAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalStakedFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalStakedForAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateConfig",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IStaking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IStakingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    lastStakedFor(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    stakeFor(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    supportsHistory(overrides?: CallOverrides): Promise<[boolean]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    totalStaked(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalStakedAt(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalStakedFor(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalStakedForAt(
      addr: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    unstake(
      amount: BigNumberish,
      stakeId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateConfig(
      interestRate: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  lastStakedFor(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  stake(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  stakeFor(
    user: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  supportsHistory(overrides?: CallOverrides): Promise<boolean>;

  token(overrides?: CallOverrides): Promise<string>;

  totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

  totalStakedAt(
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalStakedFor(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  totalStakedForAt(
    addr: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  unstake(
    amount: BigNumberish,
    stakeId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateConfig(
    interestRate: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    lastStakedFor(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    stake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakeFor(
      user: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsHistory(overrides?: CallOverrides): Promise<boolean>;

    token(overrides?: CallOverrides): Promise<string>;

    totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

    totalStakedAt(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalStakedFor(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalStakedForAt(
      addr: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unstake(
      amount: BigNumberish,
      stakeId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateConfig(
      interestRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    lastStakedFor(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    stakeFor(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    supportsHistory(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

    totalStakedAt(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalStakedFor(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalStakedForAt(
      addr: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unstake(
      amount: BigNumberish,
      stakeId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateConfig(
      interestRate: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    lastStakedFor(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    stakeFor(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    supportsHistory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalStaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalStakedAt(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalStakedFor(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalStakedForAt(
      addr: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unstake(
      amount: BigNumberish,
      stakeId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateConfig(
      interestRate: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
