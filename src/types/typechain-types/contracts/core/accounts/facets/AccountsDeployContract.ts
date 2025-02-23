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
} from "../../../../common";

export declare namespace IVault {
  export type VaultActionDataStruct = {
    destinationChain: string;
    strategyId: BytesLike;
    selector: BytesLike;
    accountIds: BigNumberish[];
    token: string;
    lockAmt: BigNumberish;
    liqAmt: BigNumberish;
    status: BigNumberish;
  };

  export type VaultActionDataStructOutput = [
    string,
    string,
    string,
    number[],
    string,
    BigNumber,
    BigNumber,
    number
  ] & {
    destinationChain: string;
    strategyId: string;
    selector: string;
    accountIds: number[];
    token: string;
    lockAmt: BigNumber;
    liqAmt: BigNumber;
    status: number;
  };
}

export declare namespace SubDaoLib {
  export type VeTypeDataStruct = {
    value: BigNumberish;
    scale: BigNumberish;
    slope: BigNumberish;
    power: BigNumberish;
  };

  export type VeTypeDataStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    value: BigNumber;
    scale: BigNumber;
    slope: BigNumber;
    power: BigNumber;
  };

  export type VeTypeStruct = {
    ve_type: BigNumberish;
    data: SubDaoLib.VeTypeDataStruct;
  };

  export type VeTypeStructOutput = [
    number,
    SubDaoLib.VeTypeDataStructOutput
  ] & { ve_type: number; data: SubDaoLib.VeTypeDataStructOutput };

  export type DaoTokenDataStruct = {
    existingData: string;
    newInitialSupply: BigNumberish;
    newName: string;
    newSymbol: string;
    veBondingType: SubDaoLib.VeTypeStruct;
    veBondingName: string;
    veBondingSymbol: string;
    veBondingDecimals: BigNumberish;
    veBondingReserveDenom: string;
    veBondingReserveDecimals: BigNumberish;
    veBondingPeriod: BigNumberish;
  };

  export type DaoTokenDataStructOutput = [
    string,
    BigNumber,
    string,
    string,
    SubDaoLib.VeTypeStructOutput,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber
  ] & {
    existingData: string;
    newInitialSupply: BigNumber;
    newName: string;
    newSymbol: string;
    veBondingType: SubDaoLib.VeTypeStructOutput;
    veBondingName: string;
    veBondingSymbol: string;
    veBondingDecimals: BigNumber;
    veBondingReserveDenom: string;
    veBondingReserveDecimals: BigNumber;
    veBondingPeriod: BigNumber;
  };

  export type DaoTokenStruct = {
    token: BigNumberish;
    data: SubDaoLib.DaoTokenDataStruct;
  };

  export type DaoTokenStructOutput = [
    number,
    SubDaoLib.DaoTokenDataStructOutput
  ] & { token: number; data: SubDaoLib.DaoTokenDataStructOutput };
}

export declare namespace SubDaoMessages {
  export type InstantiateMsgStruct = {
    id: BigNumberish;
    owner: string;
    quorum: BigNumberish;
    threshold: BigNumberish;
    votingPeriod: BigNumberish;
    timelockPeriod: BigNumberish;
    expirationPeriod: BigNumberish;
    proposalDeposit: BigNumberish;
    snapshotPeriod: BigNumberish;
    token: SubDaoLib.DaoTokenStruct;
    endowType: BigNumberish;
    endowOwner: string;
    registrarContract: string;
  };

  export type InstantiateMsgStructOutput = [
    number,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    SubDaoLib.DaoTokenStructOutput,
    number,
    string,
    string
  ] & {
    id: number;
    owner: string;
    quorum: BigNumber;
    threshold: BigNumber;
    votingPeriod: BigNumber;
    timelockPeriod: BigNumber;
    expirationPeriod: BigNumber;
    proposalDeposit: BigNumber;
    snapshotPeriod: BigNumber;
    token: SubDaoLib.DaoTokenStructOutput;
    endowType: number;
    endowOwner: string;
    registrarContract: string;
  };
}

export interface AccountsDeployContractInterface extends utils.Interface {
  functions: {
    "createDaoContract((uint32,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,(uint8,(address,uint256,string,string,(uint8,(uint128,uint256,uint128,uint128)),string,string,uint256,address,uint256,uint256)),uint8,address,address))": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "createDaoContract"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createDaoContract",
    values: [SubDaoMessages.InstantiateMsgStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "createDaoContract",
    data: BytesLike
  ): Result;

  events: {
    "AllowanceSpent(uint256,address,address,uint256)": EventFragment;
    "AllowanceUpdated(uint256,address,address,uint256,uint256,uint256)": EventFragment;
    "ConfigUpdated()": EventFragment;
    "DaoContractCreated(uint32,address)": EventFragment;
    "DonationDeposited(uint256,address,uint256)": EventFragment;
    "DonationMatchCreated(uint256,address)": EventFragment;
    "DonationWithdrawn(uint256,address,address,uint256)": EventFragment;
    "EndowmentClosed(uint256)": EventFragment;
    "EndowmentCreated(uint256,uint8)": EventFragment;
    "EndowmentDeposit(uint256,address,uint256,uint256)": EventFragment;
    "EndowmentInvested(uint8)": EventFragment;
    "EndowmentRedeemed(uint8)": EventFragment;
    "EndowmentSettingUpdated(uint256,string)": EventFragment;
    "EndowmentUpdated(uint256)": EventFragment;
    "EndowmentWithdraw(uint256,address,uint256,uint8,address,uint32)": EventFragment;
    "OwnerUpdated(address)": EventFragment;
    "RefundNeeded((string,bytes4,bytes4,uint32[],address,uint256,uint256,uint8))": EventFragment;
    "TokenSwapped(uint256,uint8,address,uint256,address,uint256)": EventFragment;
    "UnexpectedTokens((string,bytes4,bytes4,uint32[],address,uint256,uint256,uint8))": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AllowanceSpent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AllowanceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ConfigUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DaoContractCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DonationDeposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DonationMatchCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DonationWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EndowmentClosed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EndowmentCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EndowmentDeposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EndowmentInvested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EndowmentRedeemed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EndowmentSettingUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EndowmentUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EndowmentWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RefundNeeded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenSwapped"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnexpectedTokens"): EventFragment;
}

export interface AllowanceSpentEventObject {
  endowId: BigNumber;
  spender: string;
  tokenAddress: string;
  amount: BigNumber;
}
export type AllowanceSpentEvent = TypedEvent<
  [BigNumber, string, string, BigNumber],
  AllowanceSpentEventObject
>;

export type AllowanceSpentEventFilter = TypedEventFilter<AllowanceSpentEvent>;

export interface AllowanceUpdatedEventObject {
  endowId: BigNumber;
  spender: string;
  tokenAddress: string;
  newBalance: BigNumber;
  added: BigNumber;
  deducted: BigNumber;
}
export type AllowanceUpdatedEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, BigNumber, BigNumber],
  AllowanceUpdatedEventObject
>;

export type AllowanceUpdatedEventFilter =
  TypedEventFilter<AllowanceUpdatedEvent>;

export interface ConfigUpdatedEventObject {}
export type ConfigUpdatedEvent = TypedEvent<[], ConfigUpdatedEventObject>;

export type ConfigUpdatedEventFilter = TypedEventFilter<ConfigUpdatedEvent>;

export interface DaoContractCreatedEventObject {
  endowId: number;
  daoAddress: string;
}
export type DaoContractCreatedEvent = TypedEvent<
  [number, string],
  DaoContractCreatedEventObject
>;

export type DaoContractCreatedEventFilter =
  TypedEventFilter<DaoContractCreatedEvent>;

export interface DonationDepositedEventObject {
  endowId: BigNumber;
  tokenAddress: string;
  amount: BigNumber;
}
export type DonationDepositedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  DonationDepositedEventObject
>;

export type DonationDepositedEventFilter =
  TypedEventFilter<DonationDepositedEvent>;

export interface DonationMatchCreatedEventObject {
  endowId: BigNumber;
  donationMatchContract: string;
}
export type DonationMatchCreatedEvent = TypedEvent<
  [BigNumber, string],
  DonationMatchCreatedEventObject
>;

export type DonationMatchCreatedEventFilter =
  TypedEventFilter<DonationMatchCreatedEvent>;

export interface DonationWithdrawnEventObject {
  endowId: BigNumber;
  recipient: string;
  tokenAddress: string;
  amount: BigNumber;
}
export type DonationWithdrawnEvent = TypedEvent<
  [BigNumber, string, string, BigNumber],
  DonationWithdrawnEventObject
>;

export type DonationWithdrawnEventFilter =
  TypedEventFilter<DonationWithdrawnEvent>;

export interface EndowmentClosedEventObject {
  endowId: BigNumber;
}
export type EndowmentClosedEvent = TypedEvent<
  [BigNumber],
  EndowmentClosedEventObject
>;

export type EndowmentClosedEventFilter = TypedEventFilter<EndowmentClosedEvent>;

export interface EndowmentCreatedEventObject {
  endowId: BigNumber;
  endowType: number;
}
export type EndowmentCreatedEvent = TypedEvent<
  [BigNumber, number],
  EndowmentCreatedEventObject
>;

export type EndowmentCreatedEventFilter =
  TypedEventFilter<EndowmentCreatedEvent>;

export interface EndowmentDepositEventObject {
  endowId: BigNumber;
  tokenAddress: string;
  amountLocked: BigNumber;
  amountLiquid: BigNumber;
}
export type EndowmentDepositEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber],
  EndowmentDepositEventObject
>;

export type EndowmentDepositEventFilter =
  TypedEventFilter<EndowmentDepositEvent>;

export interface EndowmentInvestedEventObject {
  arg0: number;
}
export type EndowmentInvestedEvent = TypedEvent<
  [number],
  EndowmentInvestedEventObject
>;

export type EndowmentInvestedEventFilter =
  TypedEventFilter<EndowmentInvestedEvent>;

export interface EndowmentRedeemedEventObject {
  arg0: number;
}
export type EndowmentRedeemedEvent = TypedEvent<
  [number],
  EndowmentRedeemedEventObject
>;

export type EndowmentRedeemedEventFilter =
  TypedEventFilter<EndowmentRedeemedEvent>;

export interface EndowmentSettingUpdatedEventObject {
  endowId: BigNumber;
  setting: string;
}
export type EndowmentSettingUpdatedEvent = TypedEvent<
  [BigNumber, string],
  EndowmentSettingUpdatedEventObject
>;

export type EndowmentSettingUpdatedEventFilter =
  TypedEventFilter<EndowmentSettingUpdatedEvent>;

export interface EndowmentUpdatedEventObject {
  endowId: BigNumber;
}
export type EndowmentUpdatedEvent = TypedEvent<
  [BigNumber],
  EndowmentUpdatedEventObject
>;

export type EndowmentUpdatedEventFilter =
  TypedEventFilter<EndowmentUpdatedEvent>;

export interface EndowmentWithdrawEventObject {
  endowId: BigNumber;
  tokenAddress: string;
  amount: BigNumber;
  accountType: number;
  beneficiaryAddress: string;
  beneficiaryEndowId: number;
}
export type EndowmentWithdrawEvent = TypedEvent<
  [BigNumber, string, BigNumber, number, string, number],
  EndowmentWithdrawEventObject
>;

export type EndowmentWithdrawEventFilter =
  TypedEventFilter<EndowmentWithdrawEvent>;

export interface OwnerUpdatedEventObject {
  owner: string;
}
export type OwnerUpdatedEvent = TypedEvent<[string], OwnerUpdatedEventObject>;

export type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;

export interface RefundNeededEventObject {
  arg0: IVault.VaultActionDataStructOutput;
}
export type RefundNeededEvent = TypedEvent<
  [IVault.VaultActionDataStructOutput],
  RefundNeededEventObject
>;

export type RefundNeededEventFilter = TypedEventFilter<RefundNeededEvent>;

export interface TokenSwappedEventObject {
  endowId: BigNumber;
  accountType: number;
  tokenIn: string;
  amountIn: BigNumber;
  tokenOut: string;
  amountOut: BigNumber;
}
export type TokenSwappedEvent = TypedEvent<
  [BigNumber, number, string, BigNumber, string, BigNumber],
  TokenSwappedEventObject
>;

export type TokenSwappedEventFilter = TypedEventFilter<TokenSwappedEvent>;

export interface UnexpectedTokensEventObject {
  arg0: IVault.VaultActionDataStructOutput;
}
export type UnexpectedTokensEvent = TypedEvent<
  [IVault.VaultActionDataStructOutput],
  UnexpectedTokensEventObject
>;

export type UnexpectedTokensEventFilter =
  TypedEventFilter<UnexpectedTokensEvent>;

export interface AccountsDeployContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccountsDeployContractInterface;

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
    createDaoContract(
      createDaoMessage: SubDaoMessages.InstantiateMsgStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  createDaoContract(
    createDaoMessage: SubDaoMessages.InstantiateMsgStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    createDaoContract(
      createDaoMessage: SubDaoMessages.InstantiateMsgStruct,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "AllowanceSpent(uint256,address,address,uint256)"(
      endowId?: null,
      spender?: null,
      tokenAddress?: null,
      amount?: null
    ): AllowanceSpentEventFilter;
    AllowanceSpent(
      endowId?: null,
      spender?: null,
      tokenAddress?: null,
      amount?: null
    ): AllowanceSpentEventFilter;

    "AllowanceUpdated(uint256,address,address,uint256,uint256,uint256)"(
      endowId?: null,
      spender?: null,
      tokenAddress?: null,
      newBalance?: null,
      added?: null,
      deducted?: null
    ): AllowanceUpdatedEventFilter;
    AllowanceUpdated(
      endowId?: null,
      spender?: null,
      tokenAddress?: null,
      newBalance?: null,
      added?: null,
      deducted?: null
    ): AllowanceUpdatedEventFilter;

    "ConfigUpdated()"(): ConfigUpdatedEventFilter;
    ConfigUpdated(): ConfigUpdatedEventFilter;

    "DaoContractCreated(uint32,address)"(
      endowId?: null,
      daoAddress?: null
    ): DaoContractCreatedEventFilter;
    DaoContractCreated(
      endowId?: null,
      daoAddress?: null
    ): DaoContractCreatedEventFilter;

    "DonationDeposited(uint256,address,uint256)"(
      endowId?: null,
      tokenAddress?: null,
      amount?: null
    ): DonationDepositedEventFilter;
    DonationDeposited(
      endowId?: null,
      tokenAddress?: null,
      amount?: null
    ): DonationDepositedEventFilter;

    "DonationMatchCreated(uint256,address)"(
      endowId?: null,
      donationMatchContract?: null
    ): DonationMatchCreatedEventFilter;
    DonationMatchCreated(
      endowId?: null,
      donationMatchContract?: null
    ): DonationMatchCreatedEventFilter;

    "DonationWithdrawn(uint256,address,address,uint256)"(
      endowId?: null,
      recipient?: null,
      tokenAddress?: null,
      amount?: null
    ): DonationWithdrawnEventFilter;
    DonationWithdrawn(
      endowId?: null,
      recipient?: null,
      tokenAddress?: null,
      amount?: null
    ): DonationWithdrawnEventFilter;

    "EndowmentClosed(uint256)"(endowId?: null): EndowmentClosedEventFilter;
    EndowmentClosed(endowId?: null): EndowmentClosedEventFilter;

    "EndowmentCreated(uint256,uint8)"(
      endowId?: null,
      endowType?: null
    ): EndowmentCreatedEventFilter;
    EndowmentCreated(
      endowId?: null,
      endowType?: null
    ): EndowmentCreatedEventFilter;

    "EndowmentDeposit(uint256,address,uint256,uint256)"(
      endowId?: null,
      tokenAddress?: null,
      amountLocked?: null,
      amountLiquid?: null
    ): EndowmentDepositEventFilter;
    EndowmentDeposit(
      endowId?: null,
      tokenAddress?: null,
      amountLocked?: null,
      amountLiquid?: null
    ): EndowmentDepositEventFilter;

    "EndowmentInvested(uint8)"(arg0?: null): EndowmentInvestedEventFilter;
    EndowmentInvested(arg0?: null): EndowmentInvestedEventFilter;

    "EndowmentRedeemed(uint8)"(arg0?: null): EndowmentRedeemedEventFilter;
    EndowmentRedeemed(arg0?: null): EndowmentRedeemedEventFilter;

    "EndowmentSettingUpdated(uint256,string)"(
      endowId?: null,
      setting?: null
    ): EndowmentSettingUpdatedEventFilter;
    EndowmentSettingUpdated(
      endowId?: null,
      setting?: null
    ): EndowmentSettingUpdatedEventFilter;

    "EndowmentUpdated(uint256)"(endowId?: null): EndowmentUpdatedEventFilter;
    EndowmentUpdated(endowId?: null): EndowmentUpdatedEventFilter;

    "EndowmentWithdraw(uint256,address,uint256,uint8,address,uint32)"(
      endowId?: null,
      tokenAddress?: null,
      amount?: null,
      accountType?: null,
      beneficiaryAddress?: null,
      beneficiaryEndowId?: null
    ): EndowmentWithdrawEventFilter;
    EndowmentWithdraw(
      endowId?: null,
      tokenAddress?: null,
      amount?: null,
      accountType?: null,
      beneficiaryAddress?: null,
      beneficiaryEndowId?: null
    ): EndowmentWithdrawEventFilter;

    "OwnerUpdated(address)"(owner?: null): OwnerUpdatedEventFilter;
    OwnerUpdated(owner?: null): OwnerUpdatedEventFilter;

    "RefundNeeded((string,bytes4,bytes4,uint32[],address,uint256,uint256,uint8))"(
      arg0?: null
    ): RefundNeededEventFilter;
    RefundNeeded(arg0?: null): RefundNeededEventFilter;

    "TokenSwapped(uint256,uint8,address,uint256,address,uint256)"(
      endowId?: null,
      accountType?: null,
      tokenIn?: null,
      amountIn?: null,
      tokenOut?: null,
      amountOut?: null
    ): TokenSwappedEventFilter;
    TokenSwapped(
      endowId?: null,
      accountType?: null,
      tokenIn?: null,
      amountIn?: null,
      tokenOut?: null,
      amountOut?: null
    ): TokenSwappedEventFilter;

    "UnexpectedTokens((string,bytes4,bytes4,uint32[],address,uint256,uint256,uint8))"(
      arg0?: null
    ): UnexpectedTokensEventFilter;
    UnexpectedTokens(arg0?: null): UnexpectedTokensEventFilter;
  };

  estimateGas: {
    createDaoContract(
      createDaoMessage: SubDaoMessages.InstantiateMsgStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createDaoContract(
      createDaoMessage: SubDaoMessages.InstantiateMsgStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
