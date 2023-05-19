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
  PromiseOrValue,
} from "../../../../common";

export declare namespace AngelCoreStruct {
  export type CategoriesStruct = {
    sdgs: PromiseOrValue<BigNumberish>[];
    general: PromiseOrValue<BigNumberish>[];
  };

  export type CategoriesStructOutput = [BigNumber[], BigNumber[]] & {
    sdgs: BigNumber[];
    general: BigNumber[];
  };

  export type DurationDataStruct = {
    height: PromiseOrValue<BigNumberish>;
    time: PromiseOrValue<BigNumberish>;
  };

  export type DurationDataStructOutput = [BigNumber, BigNumber] & {
    height: BigNumber;
    time: BigNumber;
  };

  export type DurationStruct = {
    enumData: PromiseOrValue<BigNumberish>;
    data: AngelCoreStruct.DurationDataStruct;
  };

  export type DurationStructOutput = [
    number,
    AngelCoreStruct.DurationDataStructOutput
  ] & { enumData: number; data: AngelCoreStruct.DurationDataStructOutput };

  export type EndowmentFeeStruct = {
    payoutAddress: PromiseOrValue<string>;
    feePercentage: PromiseOrValue<BigNumberish>;
    active: PromiseOrValue<boolean>;
  };

  export type EndowmentFeeStructOutput = [string, BigNumber, boolean] & {
    payoutAddress: string;
    feePercentage: BigNumber;
    active: boolean;
  };

  export type VeTypeDataStruct = {
    value: PromiseOrValue<BigNumberish>;
    scale: PromiseOrValue<BigNumberish>;
    slope: PromiseOrValue<BigNumberish>;
    power: PromiseOrValue<BigNumberish>;
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
    ve_type: PromiseOrValue<BigNumberish>;
    data: AngelCoreStruct.VeTypeDataStruct;
  };

  export type VeTypeStructOutput = [
    number,
    AngelCoreStruct.VeTypeDataStructOutput
  ] & { ve_type: number; data: AngelCoreStruct.VeTypeDataStructOutput };

  export type DaoTokenDataStruct = {
    existingCw20Data: PromiseOrValue<string>;
    newCw20InitialSupply: PromiseOrValue<BigNumberish>;
    newCw20Name: PromiseOrValue<string>;
    newCw20Symbol: PromiseOrValue<string>;
    bondingveveType: AngelCoreStruct.VeTypeStruct;
    bondingveName: PromiseOrValue<string>;
    bondingveSymbol: PromiseOrValue<string>;
    bondingveDecimals: PromiseOrValue<BigNumberish>;
    bondingveReserveDenom: PromiseOrValue<string>;
    bondingveReserveDecimals: PromiseOrValue<BigNumberish>;
    bondingveUnbondingPeriod: PromiseOrValue<BigNumberish>;
  };

  export type DaoTokenDataStructOutput = [
    string,
    BigNumber,
    string,
    string,
    AngelCoreStruct.VeTypeStructOutput,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber
  ] & {
    existingCw20Data: string;
    newCw20InitialSupply: BigNumber;
    newCw20Name: string;
    newCw20Symbol: string;
    bondingveveType: AngelCoreStruct.VeTypeStructOutput;
    bondingveName: string;
    bondingveSymbol: string;
    bondingveDecimals: BigNumber;
    bondingveReserveDenom: string;
    bondingveReserveDecimals: BigNumber;
    bondingveUnbondingPeriod: BigNumber;
  };

  export type DaoTokenStruct = {
    token: PromiseOrValue<BigNumberish>;
    data: AngelCoreStruct.DaoTokenDataStruct;
  };

  export type DaoTokenStructOutput = [
    number,
    AngelCoreStruct.DaoTokenDataStructOutput
  ] & { token: number; data: AngelCoreStruct.DaoTokenDataStructOutput };

  export type DaoSetupStruct = {
    quorum: PromiseOrValue<BigNumberish>;
    threshold: PromiseOrValue<BigNumberish>;
    votingPeriod: PromiseOrValue<BigNumberish>;
    timelockPeriod: PromiseOrValue<BigNumberish>;
    expirationPeriod: PromiseOrValue<BigNumberish>;
    proposalDeposit: PromiseOrValue<BigNumberish>;
    snapshotPeriod: PromiseOrValue<BigNumberish>;
    token: AngelCoreStruct.DaoTokenStruct;
  };

  export type DaoSetupStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    AngelCoreStruct.DaoTokenStructOutput
  ] & {
    quorum: BigNumber;
    threshold: BigNumber;
    votingPeriod: BigNumber;
    timelockPeriod: BigNumber;
    expirationPeriod: BigNumber;
    proposalDeposit: BigNumber;
    snapshotPeriod: BigNumber;
    token: AngelCoreStruct.DaoTokenStructOutput;
  };

  export type DelegateStruct = {
    addr: PromiseOrValue<string>;
    expires: PromiseOrValue<BigNumberish>;
  };

  export type DelegateStructOutput = [string, BigNumber] & {
    addr: string;
    expires: BigNumber;
  };

  export type SettingsControllerStruct = {
    strategies: AngelCoreStruct.DelegateStruct;
    allowlistedBeneficiaries: AngelCoreStruct.DelegateStruct;
    allowlistedContributors: AngelCoreStruct.DelegateStruct;
    maturityAllowlist: AngelCoreStruct.DelegateStruct;
    maturityTime: AngelCoreStruct.DelegateStruct;
    withdrawFee: AngelCoreStruct.DelegateStruct;
    depositFee: AngelCoreStruct.DelegateStruct;
    balanceFee: AngelCoreStruct.DelegateStruct;
    name: AngelCoreStruct.DelegateStruct;
    image: AngelCoreStruct.DelegateStruct;
    logo: AngelCoreStruct.DelegateStruct;
    categories: AngelCoreStruct.DelegateStruct;
    splitToLiquid: AngelCoreStruct.DelegateStruct;
    ignoreUserSplits: AngelCoreStruct.DelegateStruct;
  };

  export type SettingsControllerStructOutput = [
    AngelCoreStruct.DelegateStructOutput,
    AngelCoreStruct.DelegateStructOutput,
    AngelCoreStruct.DelegateStructOutput,
    AngelCoreStruct.DelegateStructOutput,
    AngelCoreStruct.DelegateStructOutput,
    AngelCoreStruct.DelegateStructOutput,
    AngelCoreStruct.DelegateStructOutput,
    AngelCoreStruct.DelegateStructOutput,
    AngelCoreStruct.DelegateStructOutput,
    AngelCoreStruct.DelegateStructOutput,
    AngelCoreStruct.DelegateStructOutput,
    AngelCoreStruct.DelegateStructOutput,
    AngelCoreStruct.DelegateStructOutput,
    AngelCoreStruct.DelegateStructOutput
  ] & {
    strategies: AngelCoreStruct.DelegateStructOutput;
    allowlistedBeneficiaries: AngelCoreStruct.DelegateStructOutput;
    allowlistedContributors: AngelCoreStruct.DelegateStructOutput;
    maturityAllowlist: AngelCoreStruct.DelegateStructOutput;
    maturityTime: AngelCoreStruct.DelegateStructOutput;
    withdrawFee: AngelCoreStruct.DelegateStructOutput;
    depositFee: AngelCoreStruct.DelegateStructOutput;
    balanceFee: AngelCoreStruct.DelegateStructOutput;
    name: AngelCoreStruct.DelegateStructOutput;
    image: AngelCoreStruct.DelegateStructOutput;
    logo: AngelCoreStruct.DelegateStructOutput;
    categories: AngelCoreStruct.DelegateStructOutput;
    splitToLiquid: AngelCoreStruct.DelegateStructOutput;
    ignoreUserSplits: AngelCoreStruct.DelegateStructOutput;
  };

  export type SplitDetailsStruct = {
    max: PromiseOrValue<BigNumberish>;
    min: PromiseOrValue<BigNumberish>;
    defaultSplit: PromiseOrValue<BigNumberish>;
  };

  export type SplitDetailsStructOutput = [BigNumber, BigNumber, BigNumber] & {
    max: BigNumber;
    min: BigNumber;
    defaultSplit: BigNumber;
  };
}

export declare namespace AccountMessages {
  export type CreateEndowmentRequestStruct = {
    owner: PromiseOrValue<string>;
    withdrawBeforeMaturity: PromiseOrValue<boolean>;
    maturityTime: PromiseOrValue<BigNumberish>;
    maturityHeight: PromiseOrValue<BigNumberish>;
    name: PromiseOrValue<string>;
    categories: AngelCoreStruct.CategoriesStruct;
    tier: PromiseOrValue<BigNumberish>;
    endow_type: PromiseOrValue<BigNumberish>;
    logo: PromiseOrValue<string>;
    image: PromiseOrValue<string>;
    cw4_members: PromiseOrValue<string>[];
    kycDonorsOnly: PromiseOrValue<boolean>;
    threshold: PromiseOrValue<BigNumberish>;
    cw3MaxVotingPeriod: AngelCoreStruct.DurationStruct;
    allowlistedBeneficiaries: PromiseOrValue<string>[];
    allowlistedContributors: PromiseOrValue<string>[];
    splitMax: PromiseOrValue<BigNumberish>;
    splitMin: PromiseOrValue<BigNumberish>;
    splitDefault: PromiseOrValue<BigNumberish>;
    earningsFee: AngelCoreStruct.EndowmentFeeStruct;
    withdrawFee: AngelCoreStruct.EndowmentFeeStruct;
    depositFee: AngelCoreStruct.EndowmentFeeStruct;
    balanceFee: AngelCoreStruct.EndowmentFeeStruct;
    dao: AngelCoreStruct.DaoSetupStruct;
    createDao: PromiseOrValue<boolean>;
    proposalLink: PromiseOrValue<BigNumberish>;
    settingsController: AngelCoreStruct.SettingsControllerStruct;
    parent: PromiseOrValue<BigNumberish>;
    maturityAllowlist: PromiseOrValue<string>[];
    ignoreUserSplits: PromiseOrValue<boolean>;
    splitToLiquid: AngelCoreStruct.SplitDetailsStruct;
    referralId: PromiseOrValue<BigNumberish>;
  };

  export type CreateEndowmentRequestStructOutput = [
    string,
    boolean,
    BigNumber,
    BigNumber,
    string,
    AngelCoreStruct.CategoriesStructOutput,
    BigNumber,
    number,
    string,
    string,
    string[],
    boolean,
    BigNumber,
    AngelCoreStruct.DurationStructOutput,
    string[],
    string[],
    BigNumber,
    BigNumber,
    BigNumber,
    AngelCoreStruct.EndowmentFeeStructOutput,
    AngelCoreStruct.EndowmentFeeStructOutput,
    AngelCoreStruct.EndowmentFeeStructOutput,
    AngelCoreStruct.EndowmentFeeStructOutput,
    AngelCoreStruct.DaoSetupStructOutput,
    boolean,
    BigNumber,
    AngelCoreStruct.SettingsControllerStructOutput,
    number,
    string[],
    boolean,
    AngelCoreStruct.SplitDetailsStructOutput,
    BigNumber
  ] & {
    owner: string;
    withdrawBeforeMaturity: boolean;
    maturityTime: BigNumber;
    maturityHeight: BigNumber;
    name: string;
    categories: AngelCoreStruct.CategoriesStructOutput;
    tier: BigNumber;
    endow_type: number;
    logo: string;
    image: string;
    cw4_members: string[];
    kycDonorsOnly: boolean;
    threshold: BigNumber;
    cw3MaxVotingPeriod: AngelCoreStruct.DurationStructOutput;
    allowlistedBeneficiaries: string[];
    allowlistedContributors: string[];
    splitMax: BigNumber;
    splitMin: BigNumber;
    splitDefault: BigNumber;
    earningsFee: AngelCoreStruct.EndowmentFeeStructOutput;
    withdrawFee: AngelCoreStruct.EndowmentFeeStructOutput;
    depositFee: AngelCoreStruct.EndowmentFeeStructOutput;
    balanceFee: AngelCoreStruct.EndowmentFeeStructOutput;
    dao: AngelCoreStruct.DaoSetupStructOutput;
    createDao: boolean;
    proposalLink: BigNumber;
    settingsController: AngelCoreStruct.SettingsControllerStructOutput;
    parent: number;
    maturityAllowlist: string[];
    ignoreUserSplits: boolean;
    splitToLiquid: AngelCoreStruct.SplitDetailsStructOutput;
    referralId: BigNumber;
  };
}

export declare namespace CharityApplicationsStorage {
  export type ConfigStruct = {
    proposalExpiry: PromiseOrValue<BigNumberish>;
    applicationMultisig: PromiseOrValue<string>;
    accountsContract: PromiseOrValue<string>;
    seedSplitToLiquid: PromiseOrValue<BigNumberish>;
    newEndowGasMoney: PromiseOrValue<boolean>;
    gasAmount: PromiseOrValue<BigNumberish>;
    fundSeedAsset: PromiseOrValue<boolean>;
    seedAsset: PromiseOrValue<string>;
    seedAssetAmount: PromiseOrValue<BigNumberish>;
  };

  export type ConfigStructOutput = [
    BigNumber,
    string,
    string,
    BigNumber,
    boolean,
    BigNumber,
    boolean,
    string,
    BigNumber
  ] & {
    proposalExpiry: BigNumber;
    applicationMultisig: string;
    accountsContract: string;
    seedSplitToLiquid: BigNumber;
    newEndowGasMoney: boolean;
    gasAmount: BigNumber;
    fundSeedAsset: boolean;
    seedAsset: string;
    seedAssetAmount: BigNumber;
  };
}

export interface ICharityApplicationInterface extends utils.Interface {
  functions: {
    "approveCharity(uint256)": FunctionFragment;
    "proposeCharity((address,bool,uint256,uint256,string,(uint256[],uint256[]),uint256,uint8,string,string,address[],bool,uint256,(uint8,(uint256,uint256)),address[],address[],uint256,uint256,uint256,(address,uint256,bool),(address,uint256,bool),(address,uint256,bool),(address,uint256,bool),(uint256,uint256,uint256,uint256,uint256,uint128,uint256,(uint8,(address,uint256,string,string,(uint8,(uint128,uint256,uint128,uint128)),string,string,uint256,address,uint256,uint256))),bool,uint256,((address,uint256),(address,uint256),(address,uint256),(address,uint256),(address,uint256),(address,uint256),(address,uint256),(address,uint256),(address,uint256),(address,uint256),(address,uint256),(address,uint256),(address,uint256),(address,uint256)),uint32,address[],bool,(uint256,uint256,uint256),uint256),string)": FunctionFragment;
    "rejectCharity(uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "updateConfig(uint256,address,address,uint256,bool,uint256,bool,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approveCharity"
      | "proposeCharity"
      | "rejectCharity"
      | "supportsInterface"
      | "updateConfig"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approveCharity",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "proposeCharity",
    values: [
      AccountMessages.CreateEndowmentRequestStruct,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "rejectCharity",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateConfig",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "approveCharity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposeCharity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rejectCharity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateConfig",
    data: BytesLike
  ): Result;

  events: {
    "CharityApproved(uint256,uint256)": EventFragment;
    "CharityProposed(address,uint256,tuple,string)": EventFragment;
    "CharityRejected(uint256)": EventFragment;
    "Deposit(address,uint256)": EventFragment;
    "GasSent(uint256,address,uint256)": EventFragment;
    "InitilizedCharityApplication(tuple)": EventFragment;
    "SeedAssetSent(uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CharityApproved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CharityProposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CharityRejected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GasSent"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "InitilizedCharityApplication"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SeedAssetSent"): EventFragment;
}

export interface CharityApprovedEventObject {
  proposalId: BigNumber;
  endowmentId: BigNumber;
}
export type CharityApprovedEvent = TypedEvent<
  [BigNumber, BigNumber],
  CharityApprovedEventObject
>;

export type CharityApprovedEventFilter = TypedEventFilter<CharityApprovedEvent>;

export interface CharityProposedEventObject {
  proposer: string;
  proposalId: BigNumber;
  charityApplication: AccountMessages.CreateEndowmentRequestStructOutput;
  meta: string;
}
export type CharityProposedEvent = TypedEvent<
  [
    string,
    BigNumber,
    AccountMessages.CreateEndowmentRequestStructOutput,
    string
  ],
  CharityProposedEventObject
>;

export type CharityProposedEventFilter = TypedEventFilter<CharityProposedEvent>;

export interface CharityRejectedEventObject {
  proposalId: BigNumber;
}
export type CharityRejectedEvent = TypedEvent<
  [BigNumber],
  CharityRejectedEventObject
>;

export type CharityRejectedEventFilter = TypedEventFilter<CharityRejectedEvent>;

export interface DepositEventObject {
  sender: string;
  value: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface GasSentEventObject {
  endowmentId: BigNumber;
  member: string;
  amount: BigNumber;
}
export type GasSentEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  GasSentEventObject
>;

export type GasSentEventFilter = TypedEventFilter<GasSentEvent>;

export interface InitilizedCharityApplicationEventObject {
  updatedConfig: CharityApplicationsStorage.ConfigStructOutput;
}
export type InitilizedCharityApplicationEvent = TypedEvent<
  [CharityApplicationsStorage.ConfigStructOutput],
  InitilizedCharityApplicationEventObject
>;

export type InitilizedCharityApplicationEventFilter =
  TypedEventFilter<InitilizedCharityApplicationEvent>;

export interface SeedAssetSentEventObject {
  endowmentId: BigNumber;
  asset: string;
  amount: BigNumber;
}
export type SeedAssetSentEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  SeedAssetSentEventObject
>;

export type SeedAssetSentEventFilter = TypedEventFilter<SeedAssetSentEvent>;

export interface ICharityApplication extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICharityApplicationInterface;

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
    approveCharity(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposeCharity(
      charityApplication: AccountMessages.CreateEndowmentRequestStruct,
      meta: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rejectCharity(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    updateConfig(
      expiry: PromiseOrValue<BigNumberish>,
      apteammultisig: PromiseOrValue<string>,
      accountscontract: PromiseOrValue<string>,
      seedsplittoliquid: PromiseOrValue<BigNumberish>,
      newendowgasmoney: PromiseOrValue<boolean>,
      gasamount: PromiseOrValue<BigNumberish>,
      fundseedasset: PromiseOrValue<boolean>,
      seedasset: PromiseOrValue<string>,
      seedassetamount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  approveCharity(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposeCharity(
    charityApplication: AccountMessages.CreateEndowmentRequestStruct,
    meta: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rejectCharity(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  updateConfig(
    expiry: PromiseOrValue<BigNumberish>,
    apteammultisig: PromiseOrValue<string>,
    accountscontract: PromiseOrValue<string>,
    seedsplittoliquid: PromiseOrValue<BigNumberish>,
    newendowgasmoney: PromiseOrValue<boolean>,
    gasamount: PromiseOrValue<BigNumberish>,
    fundseedasset: PromiseOrValue<boolean>,
    seedasset: PromiseOrValue<string>,
    seedassetamount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approveCharity(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposeCharity(
      charityApplication: AccountMessages.CreateEndowmentRequestStruct,
      meta: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    rejectCharity(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateConfig(
      expiry: PromiseOrValue<BigNumberish>,
      apteammultisig: PromiseOrValue<string>,
      accountscontract: PromiseOrValue<string>,
      seedsplittoliquid: PromiseOrValue<BigNumberish>,
      newendowgasmoney: PromiseOrValue<boolean>,
      gasamount: PromiseOrValue<BigNumberish>,
      fundseedasset: PromiseOrValue<boolean>,
      seedasset: PromiseOrValue<string>,
      seedassetamount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CharityApproved(uint256,uint256)"(
      proposalId?: PromiseOrValue<BigNumberish> | null,
      endowmentId?: PromiseOrValue<BigNumberish> | null
    ): CharityApprovedEventFilter;
    CharityApproved(
      proposalId?: PromiseOrValue<BigNumberish> | null,
      endowmentId?: PromiseOrValue<BigNumberish> | null
    ): CharityApprovedEventFilter;

    "CharityProposed(address,uint256,tuple,string)"(
      proposer?: PromiseOrValue<string> | null,
      proposalId?: PromiseOrValue<BigNumberish> | null,
      charityApplication?: null,
      meta?: null
    ): CharityProposedEventFilter;
    CharityProposed(
      proposer?: PromiseOrValue<string> | null,
      proposalId?: PromiseOrValue<BigNumberish> | null,
      charityApplication?: null,
      meta?: null
    ): CharityProposedEventFilter;

    "CharityRejected(uint256)"(
      proposalId?: PromiseOrValue<BigNumberish> | null
    ): CharityRejectedEventFilter;
    CharityRejected(
      proposalId?: PromiseOrValue<BigNumberish> | null
    ): CharityRejectedEventFilter;

    "Deposit(address,uint256)"(
      sender?: PromiseOrValue<string> | null,
      value?: null
    ): DepositEventFilter;
    Deposit(
      sender?: PromiseOrValue<string> | null,
      value?: null
    ): DepositEventFilter;

    "GasSent(uint256,address,uint256)"(
      endowmentId?: PromiseOrValue<BigNumberish> | null,
      member?: PromiseOrValue<string> | null,
      amount?: null
    ): GasSentEventFilter;
    GasSent(
      endowmentId?: PromiseOrValue<BigNumberish> | null,
      member?: PromiseOrValue<string> | null,
      amount?: null
    ): GasSentEventFilter;

    "InitilizedCharityApplication(tuple)"(
      updatedConfig?: null
    ): InitilizedCharityApplicationEventFilter;
    InitilizedCharityApplication(
      updatedConfig?: null
    ): InitilizedCharityApplicationEventFilter;

    "SeedAssetSent(uint256,address,uint256)"(
      endowmentId?: PromiseOrValue<BigNumberish> | null,
      asset?: PromiseOrValue<string> | null,
      amount?: null
    ): SeedAssetSentEventFilter;
    SeedAssetSent(
      endowmentId?: PromiseOrValue<BigNumberish> | null,
      asset?: PromiseOrValue<string> | null,
      amount?: null
    ): SeedAssetSentEventFilter;
  };

  estimateGas: {
    approveCharity(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposeCharity(
      charityApplication: AccountMessages.CreateEndowmentRequestStruct,
      meta: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rejectCharity(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateConfig(
      expiry: PromiseOrValue<BigNumberish>,
      apteammultisig: PromiseOrValue<string>,
      accountscontract: PromiseOrValue<string>,
      seedsplittoliquid: PromiseOrValue<BigNumberish>,
      newendowgasmoney: PromiseOrValue<boolean>,
      gasamount: PromiseOrValue<BigNumberish>,
      fundseedasset: PromiseOrValue<boolean>,
      seedasset: PromiseOrValue<string>,
      seedassetamount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveCharity(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposeCharity(
      charityApplication: AccountMessages.CreateEndowmentRequestStruct,
      meta: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rejectCharity(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateConfig(
      expiry: PromiseOrValue<BigNumberish>,
      apteammultisig: PromiseOrValue<string>,
      accountscontract: PromiseOrValue<string>,
      seedsplittoliquid: PromiseOrValue<BigNumberish>,
      newendowgasmoney: PromiseOrValue<boolean>,
      gasamount: PromiseOrValue<BigNumberish>,
      fundseedasset: PromiseOrValue<boolean>,
      seedasset: PromiseOrValue<string>,
      seedassetamount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
