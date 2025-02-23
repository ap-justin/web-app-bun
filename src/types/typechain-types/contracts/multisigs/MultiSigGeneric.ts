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
} from "../../common";

export interface MultiSigGenericInterface extends utils.Interface {
  functions: {
    "activeOwnersCount()": FunctionFragment;
    "addOwners(address[])": FunctionFragment;
    "approvalsRequired()": FunctionFragment;
    "changeApprovalsRequirement(uint256)": FunctionFragment;
    "changeRequireExecution(bool)": FunctionFragment;
    "changeTransactionExpiry(uint256)": FunctionFragment;
    "confirmTransaction(uint256)": FunctionFragment;
    "confirmations(uint256)": FunctionFragment;
    "executeTransaction(uint256)": FunctionFragment;
    "getConfirmationCount(uint256)": FunctionFragment;
    "getConfirmationStatus(uint256,address)": FunctionFragment;
    "getOwnerStatus(address)": FunctionFragment;
    "isConfirmed(uint256)": FunctionFragment;
    "isOwner(address)": FunctionFragment;
    "removeOwners(address[])": FunctionFragment;
    "replaceOwner(address,address)": FunctionFragment;
    "requireExecution()": FunctionFragment;
    "revokeConfirmation(uint256)": FunctionFragment;
    "revokeConfirmationOfFormerOwner(uint256,address)": FunctionFragment;
    "submitTransaction(address,uint256,bytes,bytes)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transactionCount()": FunctionFragment;
    "transactionExpiry()": FunctionFragment;
    "transactions(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "activeOwnersCount"
      | "addOwners"
      | "approvalsRequired"
      | "changeApprovalsRequirement"
      | "changeRequireExecution"
      | "changeTransactionExpiry"
      | "confirmTransaction"
      | "confirmations"
      | "executeTransaction"
      | "getConfirmationCount"
      | "getConfirmationStatus"
      | "getOwnerStatus"
      | "isConfirmed"
      | "isOwner"
      | "removeOwners"
      | "replaceOwner"
      | "requireExecution"
      | "revokeConfirmation"
      | "revokeConfirmationOfFormerOwner"
      | "submitTransaction"
      | "supportsInterface"
      | "transactionCount"
      | "transactionExpiry"
      | "transactions"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "activeOwnersCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "addOwners", values: [string[]]): string;
  encodeFunctionData(
    functionFragment: "approvalsRequired",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeApprovalsRequirement",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeRequireExecution",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "changeTransactionExpiry",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmTransaction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmations",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTransaction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getConfirmationCount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getConfirmationStatus",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnerStatus",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isConfirmed",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "isOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeOwners",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "replaceOwner",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "requireExecution",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revokeConfirmation",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeConfirmationOfFormerOwner",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "submitTransaction",
    values: [string, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transactionCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transactionExpiry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transactions",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "activeOwnersCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addOwners", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approvalsRequired",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeApprovalsRequirement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeRequireExecution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeTransactionExpiry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getConfirmationCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getConfirmationStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOwnerStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isConfirmed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeOwners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "replaceOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireExecution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeConfirmation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeConfirmationOfFormerOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transactionCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transactionExpiry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transactions",
    data: BytesLike
  ): Result;

  events: {
    "ApprovalsRequiredChanged(address,uint256)": EventFragment;
    "ExpiryChanged(address,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "InitializedMultiSig(address,address[],uint256,bool,uint256)": EventFragment;
    "OwnerReplaced(address,address,address)": EventFragment;
    "OwnersAdded(address,address[])": EventFragment;
    "OwnersRemoved(address,address[])": EventFragment;
    "RequireExecutionChanged(address,bool)": EventFragment;
    "TransactionConfirmationRevoked(address,address,uint256)": EventFragment;
    "TransactionConfirmed(address,address,uint256)": EventFragment;
    "TransactionExecuted(address,uint256)": EventFragment;
    "TransactionSubmitted(address,address,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApprovalsRequiredChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExpiryChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InitializedMultiSig"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerReplaced"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnersAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnersRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequireExecutionChanged"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "TransactionConfirmationRevoked"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionConfirmed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionSubmitted"): EventFragment;
}

export interface ApprovalsRequiredChangedEventObject {
  msAddress: string;
  approvalsRequired: BigNumber;
}
export type ApprovalsRequiredChangedEvent = TypedEvent<
  [string, BigNumber],
  ApprovalsRequiredChangedEventObject
>;

export type ApprovalsRequiredChangedEventFilter =
  TypedEventFilter<ApprovalsRequiredChangedEvent>;

export interface ExpiryChangedEventObject {
  msAddress: string;
  transactionExpiry: BigNumber;
}
export type ExpiryChangedEvent = TypedEvent<
  [string, BigNumber],
  ExpiryChangedEventObject
>;

export type ExpiryChangedEventFilter = TypedEventFilter<ExpiryChangedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface InitializedMultiSigEventObject {
  msAddress: string;
  owners: string[];
  approvalsRequired: BigNumber;
  requireExecution: boolean;
  transactionExpiry: BigNumber;
}
export type InitializedMultiSigEvent = TypedEvent<
  [string, string[], BigNumber, boolean, BigNumber],
  InitializedMultiSigEventObject
>;

export type InitializedMultiSigEventFilter =
  TypedEventFilter<InitializedMultiSigEvent>;

export interface OwnerReplacedEventObject {
  msAddress: string;
  currOwner: string;
  newOwner: string;
}
export type OwnerReplacedEvent = TypedEvent<
  [string, string, string],
  OwnerReplacedEventObject
>;

export type OwnerReplacedEventFilter = TypedEventFilter<OwnerReplacedEvent>;

export interface OwnersAddedEventObject {
  msAddress: string;
  owners: string[];
}
export type OwnersAddedEvent = TypedEvent<
  [string, string[]],
  OwnersAddedEventObject
>;

export type OwnersAddedEventFilter = TypedEventFilter<OwnersAddedEvent>;

export interface OwnersRemovedEventObject {
  msAddress: string;
  owners: string[];
}
export type OwnersRemovedEvent = TypedEvent<
  [string, string[]],
  OwnersRemovedEventObject
>;

export type OwnersRemovedEventFilter = TypedEventFilter<OwnersRemovedEvent>;

export interface RequireExecutionChangedEventObject {
  msAddress: string;
  requireExecution: boolean;
}
export type RequireExecutionChangedEvent = TypedEvent<
  [string, boolean],
  RequireExecutionChangedEventObject
>;

export type RequireExecutionChangedEventFilter =
  TypedEventFilter<RequireExecutionChangedEvent>;

export interface TransactionConfirmationRevokedEventObject {
  msAddress: string;
  sender: string;
  transactionId: BigNumber;
}
export type TransactionConfirmationRevokedEvent = TypedEvent<
  [string, string, BigNumber],
  TransactionConfirmationRevokedEventObject
>;

export type TransactionConfirmationRevokedEventFilter =
  TypedEventFilter<TransactionConfirmationRevokedEvent>;

export interface TransactionConfirmedEventObject {
  msAddress: string;
  sender: string;
  transactionId: BigNumber;
}
export type TransactionConfirmedEvent = TypedEvent<
  [string, string, BigNumber],
  TransactionConfirmedEventObject
>;

export type TransactionConfirmedEventFilter =
  TypedEventFilter<TransactionConfirmedEvent>;

export interface TransactionExecutedEventObject {
  msAddress: string;
  transactionId: BigNumber;
}
export type TransactionExecutedEvent = TypedEvent<
  [string, BigNumber],
  TransactionExecutedEventObject
>;

export type TransactionExecutedEventFilter =
  TypedEventFilter<TransactionExecutedEvent>;

export interface TransactionSubmittedEventObject {
  msAddress: string;
  sender: string;
  transactionId: BigNumber;
  metadata: string;
}
export type TransactionSubmittedEvent = TypedEvent<
  [string, string, BigNumber, string],
  TransactionSubmittedEventObject
>;

export type TransactionSubmittedEventFilter =
  TypedEventFilter<TransactionSubmittedEvent>;

export interface MultiSigGeneric extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MultiSigGenericInterface;

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
    activeOwnersCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    addOwners(
      owners: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    approvalsRequired(overrides?: CallOverrides): Promise<[BigNumber]>;

    changeApprovalsRequirement(
      _approvalsRequired: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    changeRequireExecution(
      _requireExecution: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    changeTransactionExpiry(
      _transactionExpiry: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    confirmTransaction(
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    confirmations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;

    executeTransaction(
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getConfirmationCount(
      transactionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getConfirmationStatus(
      transactionId: BigNumberish,
      ownerAddr: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getOwnerStatus(
      ownerAddr: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isConfirmed(
      transactionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isOwner(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    removeOwners(
      owners: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    replaceOwner(
      currOwner: string,
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    requireExecution(overrides?: CallOverrides): Promise<[boolean]>;

    revokeConfirmation(
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    revokeConfirmationOfFormerOwner(
      transactionId: BigNumberish,
      formerOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    submitTransaction(
      destination: string,
      value: BigNumberish,
      data: BytesLike,
      metadata: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transactionCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    transactionExpiry(overrides?: CallOverrides): Promise<[BigNumber]>;

    transactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber, string] & {
        destination: string;
        value: BigNumber;
        data: string;
        executed: boolean;
        expiry: BigNumber;
        metadata: string;
      }
    >;
  };

  activeOwnersCount(overrides?: CallOverrides): Promise<BigNumber>;

  addOwners(
    owners: string[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  approvalsRequired(overrides?: CallOverrides): Promise<BigNumber>;

  changeApprovalsRequirement(
    _approvalsRequired: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  changeRequireExecution(
    _requireExecution: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  changeTransactionExpiry(
    _transactionExpiry: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  confirmTransaction(
    transactionId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  confirmations(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  executeTransaction(
    transactionId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getConfirmationCount(
    transactionId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getConfirmationStatus(
    transactionId: BigNumberish,
    ownerAddr: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getOwnerStatus(
    ownerAddr: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isConfirmed(
    transactionId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isOwner(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  removeOwners(
    owners: string[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  replaceOwner(
    currOwner: string,
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  requireExecution(overrides?: CallOverrides): Promise<boolean>;

  revokeConfirmation(
    transactionId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  revokeConfirmationOfFormerOwner(
    transactionId: BigNumberish,
    formerOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  submitTransaction(
    destination: string,
    value: BigNumberish,
    data: BytesLike,
    metadata: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transactionCount(overrides?: CallOverrides): Promise<BigNumber>;

  transactionExpiry(overrides?: CallOverrides): Promise<BigNumber>;

  transactions(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, boolean, BigNumber, string] & {
      destination: string;
      value: BigNumber;
      data: string;
      executed: boolean;
      expiry: BigNumber;
      metadata: string;
    }
  >;

  callStatic: {
    activeOwnersCount(overrides?: CallOverrides): Promise<BigNumber>;

    addOwners(owners: string[], overrides?: CallOverrides): Promise<void>;

    approvalsRequired(overrides?: CallOverrides): Promise<BigNumber>;

    changeApprovalsRequirement(
      _approvalsRequired: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    changeRequireExecution(
      _requireExecution: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    changeTransactionExpiry(
      _transactionExpiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    confirmTransaction(
      transactionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    confirmations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeTransaction(
      transactionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getConfirmationCount(
      transactionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getConfirmationStatus(
      transactionId: BigNumberish,
      ownerAddr: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getOwnerStatus(
      ownerAddr: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isConfirmed(
      transactionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOwner(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    removeOwners(owners: string[], overrides?: CallOverrides): Promise<void>;

    replaceOwner(
      currOwner: string,
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    requireExecution(overrides?: CallOverrides): Promise<boolean>;

    revokeConfirmation(
      transactionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeConfirmationOfFormerOwner(
      transactionId: BigNumberish,
      formerOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    submitTransaction(
      destination: string,
      value: BigNumberish,
      data: BytesLike,
      metadata: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transactionCount(overrides?: CallOverrides): Promise<BigNumber>;

    transactionExpiry(overrides?: CallOverrides): Promise<BigNumber>;

    transactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber, string] & {
        destination: string;
        value: BigNumber;
        data: string;
        executed: boolean;
        expiry: BigNumber;
        metadata: string;
      }
    >;
  };

  filters: {
    "ApprovalsRequiredChanged(address,uint256)"(
      msAddress?: null,
      approvalsRequired?: null
    ): ApprovalsRequiredChangedEventFilter;
    ApprovalsRequiredChanged(
      msAddress?: null,
      approvalsRequired?: null
    ): ApprovalsRequiredChangedEventFilter;

    "ExpiryChanged(address,uint256)"(
      msAddress?: null,
      transactionExpiry?: null
    ): ExpiryChangedEventFilter;
    ExpiryChanged(
      msAddress?: null,
      transactionExpiry?: null
    ): ExpiryChangedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "InitializedMultiSig(address,address[],uint256,bool,uint256)"(
      msAddress?: null,
      owners?: null,
      approvalsRequired?: null,
      requireExecution?: null,
      transactionExpiry?: null
    ): InitializedMultiSigEventFilter;
    InitializedMultiSig(
      msAddress?: null,
      owners?: null,
      approvalsRequired?: null,
      requireExecution?: null,
      transactionExpiry?: null
    ): InitializedMultiSigEventFilter;

    "OwnerReplaced(address,address,address)"(
      msAddress?: null,
      currOwner?: null,
      newOwner?: null
    ): OwnerReplacedEventFilter;
    OwnerReplaced(
      msAddress?: null,
      currOwner?: null,
      newOwner?: null
    ): OwnerReplacedEventFilter;

    "OwnersAdded(address,address[])"(
      msAddress?: null,
      owners?: null
    ): OwnersAddedEventFilter;
    OwnersAdded(msAddress?: null, owners?: null): OwnersAddedEventFilter;

    "OwnersRemoved(address,address[])"(
      msAddress?: null,
      owners?: null
    ): OwnersRemovedEventFilter;
    OwnersRemoved(msAddress?: null, owners?: null): OwnersRemovedEventFilter;

    "RequireExecutionChanged(address,bool)"(
      msAddress?: null,
      requireExecution?: null
    ): RequireExecutionChangedEventFilter;
    RequireExecutionChanged(
      msAddress?: null,
      requireExecution?: null
    ): RequireExecutionChangedEventFilter;

    "TransactionConfirmationRevoked(address,address,uint256)"(
      msAddress?: null,
      sender?: null,
      transactionId?: null
    ): TransactionConfirmationRevokedEventFilter;
    TransactionConfirmationRevoked(
      msAddress?: null,
      sender?: null,
      transactionId?: null
    ): TransactionConfirmationRevokedEventFilter;

    "TransactionConfirmed(address,address,uint256)"(
      msAddress?: null,
      sender?: null,
      transactionId?: null
    ): TransactionConfirmedEventFilter;
    TransactionConfirmed(
      msAddress?: null,
      sender?: null,
      transactionId?: null
    ): TransactionConfirmedEventFilter;

    "TransactionExecuted(address,uint256)"(
      msAddress?: null,
      transactionId?: null
    ): TransactionExecutedEventFilter;
    TransactionExecuted(
      msAddress?: null,
      transactionId?: null
    ): TransactionExecutedEventFilter;

    "TransactionSubmitted(address,address,uint256,bytes)"(
      msAddress?: null,
      sender?: null,
      transactionId?: null,
      metadata?: null
    ): TransactionSubmittedEventFilter;
    TransactionSubmitted(
      msAddress?: null,
      sender?: null,
      transactionId?: null,
      metadata?: null
    ): TransactionSubmittedEventFilter;
  };

  estimateGas: {
    activeOwnersCount(overrides?: CallOverrides): Promise<BigNumber>;

    addOwners(
      owners: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    approvalsRequired(overrides?: CallOverrides): Promise<BigNumber>;

    changeApprovalsRequirement(
      _approvalsRequired: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    changeRequireExecution(
      _requireExecution: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    changeTransactionExpiry(
      _transactionExpiry: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    confirmTransaction(
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    confirmations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeTransaction(
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getConfirmationCount(
      transactionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getConfirmationStatus(
      transactionId: BigNumberish,
      ownerAddr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOwnerStatus(
      ownerAddr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isConfirmed(
      transactionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOwner(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeOwners(
      owners: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    replaceOwner(
      currOwner: string,
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    requireExecution(overrides?: CallOverrides): Promise<BigNumber>;

    revokeConfirmation(
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    revokeConfirmationOfFormerOwner(
      transactionId: BigNumberish,
      formerOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    submitTransaction(
      destination: string,
      value: BigNumberish,
      data: BytesLike,
      metadata: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transactionCount(overrides?: CallOverrides): Promise<BigNumber>;

    transactionExpiry(overrides?: CallOverrides): Promise<BigNumber>;

    transactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activeOwnersCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addOwners(
      owners: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    approvalsRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeApprovalsRequirement(
      _approvalsRequired: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    changeRequireExecution(
      _requireExecution: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    changeTransactionExpiry(
      _transactionExpiry: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    confirmTransaction(
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    confirmations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeTransaction(
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getConfirmationCount(
      transactionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getConfirmationStatus(
      transactionId: BigNumberish,
      ownerAddr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOwnerStatus(
      ownerAddr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isConfirmed(
      transactionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOwner(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeOwners(
      owners: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    replaceOwner(
      currOwner: string,
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    requireExecution(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    revokeConfirmation(
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    revokeConfirmationOfFormerOwner(
      transactionId: BigNumberish,
      formerOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    submitTransaction(
      destination: string,
      value: BigNumberish,
      data: BytesLike,
      metadata: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transactionCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transactionExpiry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
