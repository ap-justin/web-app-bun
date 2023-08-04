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

export declare namespace SubDaoTokenMessage {
  export type InstantiateMsgStruct = {
    name: string;
    symbol: string;
    reserveDenom: string;
    ve_type: BigNumberish;
    unbondingPeriod: BigNumberish;
  };

  export type InstantiateMsgStructOutput = [
    string,
    string,
    string,
    number,
    BigNumber
  ] & {
    name: string;
    symbol: string;
    reserveDenom: string;
    ve_type: number;
    unbondingPeriod: BigNumber;
  };
}

export interface SubDaoTokenInterface extends utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "MINTER_ROLE()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "calculateContinuousBurnReturn(uint256)": FunctionFragment;
    "calculateContinuousMintReturn(uint256)": FunctionFragment;
    "calculatePurchaseReturn(uint256,uint256,uint32,uint256)": FunctionFragment;
    "calculateSaleReturn(uint256,uint256,uint32,uint256)": FunctionFragment;
    "checkClaimableTokens()": FunctionFragment;
    "claimTokens()": FunctionFragment;
    "continuosToken((string,string,address,uint8,uint256),address)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "denomTokenAddress()": FunctionFragment;
    "executeBuyCw20(uint256)": FunctionFragment;
    "executeDonorMatch(uint256,address,uint32,address)": FunctionFragment;
    "executeSell(address,uint256)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "initveToken(string,string,uint256,address)": FunctionFragment;
    "name()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "reserveBalance()": FunctionFragment;
    "reserveRatio()": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "scale()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DEFAULT_ADMIN_ROLE"
      | "MINTER_ROLE"
      | "allowance"
      | "approve"
      | "balanceOf"
      | "calculateContinuousBurnReturn"
      | "calculateContinuousMintReturn"
      | "calculatePurchaseReturn"
      | "calculateSaleReturn"
      | "checkClaimableTokens"
      | "claimTokens"
      | "continuosToken"
      | "decimals"
      | "decreaseAllowance"
      | "denomTokenAddress"
      | "executeBuyCw20"
      | "executeDonorMatch"
      | "executeSell"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "increaseAllowance"
      | "initveToken"
      | "name"
      | "renounceRole"
      | "reserveBalance"
      | "reserveRatio"
      | "revokeRole"
      | "scale"
      | "supportsInterface"
      | "symbol"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINTER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "calculateContinuousBurnReturn",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateContinuousMintReturn",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculatePurchaseReturn",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateSaleReturn",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkClaimableTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "continuosToken",
    values: [SubDaoTokenMessage.InstantiateMsgStruct, string]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "denomTokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeBuyCw20",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeDonorMatch",
    values: [BigNumberish, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "executeSell",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initveToken",
    values: [string, string, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "reserveBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reserveRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "scale", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINTER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateContinuousBurnReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateContinuousMintReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculatePurchaseReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateSaleReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkClaimableTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "continuosToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "denomTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeBuyCw20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeDonorMatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeSell",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initveToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "scale", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface SubDaoToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SubDaoTokenInterface;

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
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    calculateContinuousBurnReturn(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { burnAmount: BigNumber }>;

    calculateContinuousMintReturn(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { mintAmount: BigNumber }>;

    calculatePurchaseReturn(
      supply: BigNumberish,
      reservebalance: BigNumberish,
      reserveratio: BigNumberish,
      depositamount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateSaleReturn(
      supply: BigNumberish,
      reservebalance: BigNumberish,
      reserveratio: BigNumberish,
      sellamount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    checkClaimableTokens(overrides?: CallOverrides): Promise<[BigNumber]>;

    claimTokens(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    continuosToken(
      message: SubDaoTokenMessage.InstantiateMsgStruct,
      emitteraddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    denomTokenAddress(overrides?: CallOverrides): Promise<[string]>;

    executeBuyCw20(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    executeDonorMatch(
      amount: BigNumberish,
      accountscontract: string,
      endowmentId: BigNumberish,
      donor: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    executeSell(
      reciver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    initveToken(
      name: string,
      symbol: string,
      reserveratio: BigNumberish,
      denomtokenaddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    reserveBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    reserveRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    scale(overrides?: CallOverrides): Promise<[BigNumber]>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[string]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  calculateContinuousBurnReturn(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateContinuousMintReturn(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculatePurchaseReturn(
    supply: BigNumberish,
    reservebalance: BigNumberish,
    reserveratio: BigNumberish,
    depositamount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateSaleReturn(
    supply: BigNumberish,
    reservebalance: BigNumberish,
    reserveratio: BigNumberish,
    sellamount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  checkClaimableTokens(overrides?: CallOverrides): Promise<BigNumber>;

  claimTokens(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  continuosToken(
    message: SubDaoTokenMessage.InstantiateMsgStruct,
    emitteraddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  denomTokenAddress(overrides?: CallOverrides): Promise<string>;

  executeBuyCw20(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  executeDonorMatch(
    amount: BigNumberish,
    accountscontract: string,
    endowmentId: BigNumberish,
    donor: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  executeSell(
    reciver: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  initveToken(
    name: string,
    symbol: string,
    reserveratio: BigNumberish,
    denomtokenaddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  reserveBalance(overrides?: CallOverrides): Promise<BigNumber>;

  reserveRatio(overrides?: CallOverrides): Promise<BigNumber>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  scale(overrides?: CallOverrides): Promise<BigNumber>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    calculateContinuousBurnReturn(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateContinuousMintReturn(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculatePurchaseReturn(
      supply: BigNumberish,
      reservebalance: BigNumberish,
      reserveratio: BigNumberish,
      depositamount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSaleReturn(
      supply: BigNumberish,
      reservebalance: BigNumberish,
      reserveratio: BigNumberish,
      sellamount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkClaimableTokens(overrides?: CallOverrides): Promise<BigNumber>;

    claimTokens(overrides?: CallOverrides): Promise<void>;

    continuosToken(
      message: SubDaoTokenMessage.InstantiateMsgStruct,
      emitteraddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    denomTokenAddress(overrides?: CallOverrides): Promise<string>;

    executeBuyCw20(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    executeDonorMatch(
      amount: BigNumberish,
      accountscontract: string,
      endowmentId: BigNumberish,
      donor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    executeSell(
      reciver: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initveToken(
      name: string,
      symbol: string,
      reserveratio: BigNumberish,
      denomtokenaddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    reserveBalance(overrides?: CallOverrides): Promise<BigNumber>;

    reserveRatio(overrides?: CallOverrides): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    scale(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    version(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    calculateContinuousBurnReturn(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateContinuousMintReturn(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculatePurchaseReturn(
      supply: BigNumberish,
      reservebalance: BigNumberish,
      reserveratio: BigNumberish,
      depositamount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSaleReturn(
      supply: BigNumberish,
      reservebalance: BigNumberish,
      reserveratio: BigNumberish,
      sellamount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkClaimableTokens(overrides?: CallOverrides): Promise<BigNumber>;

    claimTokens(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    continuosToken(
      message: SubDaoTokenMessage.InstantiateMsgStruct,
      emitteraddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    denomTokenAddress(overrides?: CallOverrides): Promise<BigNumber>;

    executeBuyCw20(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    executeDonorMatch(
      amount: BigNumberish,
      accountscontract: string,
      endowmentId: BigNumberish,
      donor: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    executeSell(
      reciver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    initveToken(
      name: string,
      symbol: string,
      reserveratio: BigNumberish,
      denomtokenaddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    reserveBalance(overrides?: CallOverrides): Promise<BigNumber>;

    reserveRatio(overrides?: CallOverrides): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    scale(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateContinuousBurnReturn(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateContinuousMintReturn(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculatePurchaseReturn(
      supply: BigNumberish,
      reservebalance: BigNumberish,
      reserveratio: BigNumberish,
      depositamount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateSaleReturn(
      supply: BigNumberish,
      reservebalance: BigNumberish,
      reserveratio: BigNumberish,
      sellamount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkClaimableTokens(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimTokens(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    continuosToken(
      message: SubDaoTokenMessage.InstantiateMsgStruct,
      emitteraddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    denomTokenAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeBuyCw20(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    executeDonorMatch(
      amount: BigNumberish,
      accountscontract: string,
      endowmentId: BigNumberish,
      donor: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    executeSell(
      reciver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    initveToken(
      name: string,
      symbol: string,
      reserveratio: BigNumberish,
      denomtokenaddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    reserveBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reserveRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    scale(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
