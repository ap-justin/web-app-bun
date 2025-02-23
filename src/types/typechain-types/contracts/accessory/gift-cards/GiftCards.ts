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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export declare namespace GiftCardsMessage {
  export type InstantiateMsgStruct = {
    keeper: string;
    registrarContract: string;
  };

  export type InstantiateMsgStructOutput = [string, string] & {
    keeper: string;
    registrarContract: string;
  };
}

export declare namespace GiftCardsStorage {
  export type ConfigStruct = {
    owner: string;
    registrarContract: string;
    keeper: string;
    nextDeposit: BigNumberish;
  };

  export type ConfigStructOutput = [string, string, string, BigNumber] & {
    owner: string;
    registrarContract: string;
    keeper: string;
    nextDeposit: BigNumber;
  };

  export type DepositStruct = {
    sender: string;
    tokenAddress: string;
    amount: BigNumberish;
    claimed: boolean;
  };

  export type DepositStructOutput = [string, string, BigNumber, boolean] & {
    sender: string;
    tokenAddress: string;
    amount: BigNumber;
    claimed: boolean;
  };
}

export interface GiftCardsInterface extends utils.Interface {
  functions: {
    "executeClaim(uint256,address)": FunctionFragment;
    "executeDepositERC20(address,address,uint256)": FunctionFragment;
    "executeSpend(uint32,address,uint256,uint256,uint256)": FunctionFragment;
    "initialize((address,address))": FunctionFragment;
    "owner()": FunctionFragment;
    "queryBalance(address,address)": FunctionFragment;
    "queryConfig()": FunctionFragment;
    "queryDeposit(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateConfig(address,address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "executeClaim"
      | "executeDepositERC20"
      | "executeSpend"
      | "initialize"
      | "owner"
      | "queryBalance"
      | "queryConfig"
      | "queryDeposit"
      | "renounceOwnership"
      | "transferOwnership"
      | "updateConfig"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "executeClaim",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "executeDepositERC20",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeSpend",
    values: [BigNumberish, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [GiftCardsMessage.InstantiateMsgStruct]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "queryBalance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "queryConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "queryDeposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateConfig",
    values: [string, string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "executeClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeDepositERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeSpend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queryBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queryConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queryDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateConfig",
    data: BytesLike
  ): Result;

  events: {
    "ConfigUpdated()": EventFragment;
    "GiftCardBalanceSpent(address,address,uint256)": EventFragment;
    "GiftCardClaimed(address,address,uint256)": EventFragment;
    "GiftCardDeposited(address,address,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ConfigUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GiftCardBalanceSpent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GiftCardClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GiftCardDeposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface ConfigUpdatedEventObject {}
export type ConfigUpdatedEvent = TypedEvent<[], ConfigUpdatedEventObject>;

export type ConfigUpdatedEventFilter = TypedEventFilter<ConfigUpdatedEvent>;

export interface GiftCardBalanceSpentEventObject {
  addr: string;
  token: string;
  amt: BigNumber;
}
export type GiftCardBalanceSpentEvent = TypedEvent<
  [string, string, BigNumber],
  GiftCardBalanceSpentEventObject
>;

export type GiftCardBalanceSpentEventFilter =
  TypedEventFilter<GiftCardBalanceSpentEvent>;

export interface GiftCardClaimedEventObject {
  addr: string;
  token: string;
  amt: BigNumber;
}
export type GiftCardClaimedEvent = TypedEvent<
  [string, string, BigNumber],
  GiftCardClaimedEventObject
>;

export type GiftCardClaimedEventFilter = TypedEventFilter<GiftCardClaimedEvent>;

export interface GiftCardDepositedEventObject {
  addr: string;
  token: string;
  amt: BigNumber;
}
export type GiftCardDepositedEvent = TypedEvent<
  [string, string, BigNumber],
  GiftCardDepositedEventObject
>;

export type GiftCardDepositedEventFilter =
  TypedEventFilter<GiftCardDepositedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface GiftCards extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GiftCardsInterface;

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
    executeClaim(
      depositId: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    executeDepositERC20(
      toAddress: string,
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    executeSpend(
      endowmentId: BigNumberish,
      tokenAddress: string,
      amount: BigNumberish,
      lockedPercentage: BigNumberish,
      liquidPercentage: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    initialize(
      details: GiftCardsMessage.InstantiateMsgStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    queryBalance(
      userAddr: string,
      tokenAddr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    queryConfig(
      overrides?: CallOverrides
    ): Promise<[GiftCardsStorage.ConfigStructOutput]>;

    queryDeposit(
      depositId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[GiftCardsStorage.DepositStructOutput]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateConfig(
      owner: string,
      keeper: string,
      registrarContract: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  executeClaim(
    depositId: BigNumberish,
    recipient: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  executeDepositERC20(
    toAddress: string,
    tokenAddress: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  executeSpend(
    endowmentId: BigNumberish,
    tokenAddress: string,
    amount: BigNumberish,
    lockedPercentage: BigNumberish,
    liquidPercentage: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  initialize(
    details: GiftCardsMessage.InstantiateMsgStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  queryBalance(
    userAddr: string,
    tokenAddr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  queryConfig(
    overrides?: CallOverrides
  ): Promise<GiftCardsStorage.ConfigStructOutput>;

  queryDeposit(
    depositId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<GiftCardsStorage.DepositStructOutput>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateConfig(
    owner: string,
    keeper: string,
    registrarContract: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    executeClaim(
      depositId: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    executeDepositERC20(
      toAddress: string,
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    executeSpend(
      endowmentId: BigNumberish,
      tokenAddress: string,
      amount: BigNumberish,
      lockedPercentage: BigNumberish,
      liquidPercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      details: GiftCardsMessage.InstantiateMsgStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    queryBalance(
      userAddr: string,
      tokenAddr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queryConfig(
      overrides?: CallOverrides
    ): Promise<GiftCardsStorage.ConfigStructOutput>;

    queryDeposit(
      depositId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<GiftCardsStorage.DepositStructOutput>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateConfig(
      owner: string,
      keeper: string,
      registrarContract: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ConfigUpdated()"(): ConfigUpdatedEventFilter;
    ConfigUpdated(): ConfigUpdatedEventFilter;

    "GiftCardBalanceSpent(address,address,uint256)"(
      addr?: null,
      token?: null,
      amt?: null
    ): GiftCardBalanceSpentEventFilter;
    GiftCardBalanceSpent(
      addr?: null,
      token?: null,
      amt?: null
    ): GiftCardBalanceSpentEventFilter;

    "GiftCardClaimed(address,address,uint256)"(
      addr?: null,
      token?: null,
      amt?: null
    ): GiftCardClaimedEventFilter;
    GiftCardClaimed(
      addr?: null,
      token?: null,
      amt?: null
    ): GiftCardClaimedEventFilter;

    "GiftCardDeposited(address,address,uint256)"(
      addr?: null,
      token?: null,
      amt?: null
    ): GiftCardDepositedEventFilter;
    GiftCardDeposited(
      addr?: null,
      token?: null,
      amt?: null
    ): GiftCardDepositedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    executeClaim(
      depositId: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    executeDepositERC20(
      toAddress: string,
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    executeSpend(
      endowmentId: BigNumberish,
      tokenAddress: string,
      amount: BigNumberish,
      lockedPercentage: BigNumberish,
      liquidPercentage: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    initialize(
      details: GiftCardsMessage.InstantiateMsgStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    queryBalance(
      userAddr: string,
      tokenAddr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queryConfig(overrides?: CallOverrides): Promise<BigNumber>;

    queryDeposit(
      depositId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateConfig(
      owner: string,
      keeper: string,
      registrarContract: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    executeClaim(
      depositId: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    executeDepositERC20(
      toAddress: string,
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    executeSpend(
      endowmentId: BigNumberish,
      tokenAddress: string,
      amount: BigNumberish,
      lockedPercentage: BigNumberish,
      liquidPercentage: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    initialize(
      details: GiftCardsMessage.InstantiateMsgStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queryBalance(
      userAddr: string,
      tokenAddr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queryConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queryDeposit(
      depositId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateConfig(
      owner: string,
      keeper: string,
      registrarContract: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
