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
  export type VaultConfigStruct = {
    vaultType: BigNumberish;
    strategyId: BytesLike;
    strategy: string;
    registrar: string;
    baseToken: string;
    yieldToken: string;
    apTokenName: string;
    apTokenSymbol: string;
    admin: string;
  };

  export type VaultConfigStructOutput = [
    number,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ] & {
    vaultType: number;
    strategyId: string;
    strategy: string;
    registrar: string;
    baseToken: string;
    yieldToken: string;
    apTokenName: string;
    apTokenSymbol: string;
    admin: string;
  };
}

export interface IVaultEmitterInterface extends utils.Interface {
  functions: {
    "deposit(uint32,address,uint256,uint256)": FunctionFragment;
    "redeem(uint32,address,uint256,uint256)": FunctionFragment;
    "vaultConfigUpdated(address,(uint8,bytes4,address,address,address,address,string,string,address))": FunctionFragment;
    "vaultCreated(address,(uint8,bytes4,address,address,address,address,string,string,address))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deposit"
      | "redeem"
      | "vaultConfigUpdated"
      | "vaultCreated"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [BigNumberish, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultConfigUpdated",
    values: [string, IVault.VaultConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultCreated",
    values: [string, IVault.VaultConfigStruct]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vaultConfigUpdated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vaultCreated",
    data: BytesLike
  ): Result;

  events: {
    "Deposit(uint32,address,uint256,uint256)": EventFragment;
    "Redeem(uint32,address,uint256,uint256)": EventFragment;
    "VaultConfigUpdated(address,(uint8,bytes4,address,address,address,address,string,string,address))": EventFragment;
    "VaultCreated(address,(uint8,bytes4,address,address,address,address,string,string,address))": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Redeem"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultConfigUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultCreated"): EventFragment;
}

export interface DepositEventObject {
  endowId: number;
  vault: string;
  amount: BigNumber;
  sharesReceived: BigNumber;
}
export type DepositEvent = TypedEvent<
  [number, string, BigNumber, BigNumber],
  DepositEventObject
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface RedeemEventObject {
  endowId: number;
  vault: string;
  shares: BigNumber;
  amountRedeemed: BigNumber;
}
export type RedeemEvent = TypedEvent<
  [number, string, BigNumber, BigNumber],
  RedeemEventObject
>;

export type RedeemEventFilter = TypedEventFilter<RedeemEvent>;

export interface VaultConfigUpdatedEventObject {
  vault: string;
  config: IVault.VaultConfigStructOutput;
}
export type VaultConfigUpdatedEvent = TypedEvent<
  [string, IVault.VaultConfigStructOutput],
  VaultConfigUpdatedEventObject
>;

export type VaultConfigUpdatedEventFilter =
  TypedEventFilter<VaultConfigUpdatedEvent>;

export interface VaultCreatedEventObject {
  vault: string;
  config: IVault.VaultConfigStructOutput;
}
export type VaultCreatedEvent = TypedEvent<
  [string, IVault.VaultConfigStructOutput],
  VaultCreatedEventObject
>;

export type VaultCreatedEventFilter = TypedEventFilter<VaultCreatedEvent>;

export interface IVaultEmitter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IVaultEmitterInterface;

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
    deposit(
      endowId: BigNumberish,
      vault: string,
      amount: BigNumberish,
      sharesReceived: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    redeem(
      endowId: BigNumberish,
      vault: string,
      shares: BigNumberish,
      amountRedeemed: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    vaultConfigUpdated(
      vault: string,
      config: IVault.VaultConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    vaultCreated(
      vault: string,
      config: IVault.VaultConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  deposit(
    endowId: BigNumberish,
    vault: string,
    amount: BigNumberish,
    sharesReceived: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  redeem(
    endowId: BigNumberish,
    vault: string,
    shares: BigNumberish,
    amountRedeemed: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  vaultConfigUpdated(
    vault: string,
    config: IVault.VaultConfigStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  vaultCreated(
    vault: string,
    config: IVault.VaultConfigStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(
      endowId: BigNumberish,
      vault: string,
      amount: BigNumberish,
      sharesReceived: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    redeem(
      endowId: BigNumberish,
      vault: string,
      shares: BigNumberish,
      amountRedeemed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    vaultConfigUpdated(
      vault: string,
      config: IVault.VaultConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    vaultCreated(
      vault: string,
      config: IVault.VaultConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deposit(uint32,address,uint256,uint256)"(
      endowId?: null,
      vault?: null,
      amount?: null,
      sharesReceived?: null
    ): DepositEventFilter;
    Deposit(
      endowId?: null,
      vault?: null,
      amount?: null,
      sharesReceived?: null
    ): DepositEventFilter;

    "Redeem(uint32,address,uint256,uint256)"(
      endowId?: null,
      vault?: null,
      shares?: null,
      amountRedeemed?: null
    ): RedeemEventFilter;
    Redeem(
      endowId?: null,
      vault?: null,
      shares?: null,
      amountRedeemed?: null
    ): RedeemEventFilter;

    "VaultConfigUpdated(address,(uint8,bytes4,address,address,address,address,string,string,address))"(
      vault?: null,
      config?: null
    ): VaultConfigUpdatedEventFilter;
    VaultConfigUpdated(
      vault?: null,
      config?: null
    ): VaultConfigUpdatedEventFilter;

    "VaultCreated(address,(uint8,bytes4,address,address,address,address,string,string,address))"(
      vault?: null,
      config?: null
    ): VaultCreatedEventFilter;
    VaultCreated(vault?: null, config?: null): VaultCreatedEventFilter;
  };

  estimateGas: {
    deposit(
      endowId: BigNumberish,
      vault: string,
      amount: BigNumberish,
      sharesReceived: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    redeem(
      endowId: BigNumberish,
      vault: string,
      shares: BigNumberish,
      amountRedeemed: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    vaultConfigUpdated(
      vault: string,
      config: IVault.VaultConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    vaultCreated(
      vault: string,
      config: IVault.VaultConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      endowId: BigNumberish,
      vault: string,
      amount: BigNumberish,
      sharesReceived: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    redeem(
      endowId: BigNumberish,
      vault: string,
      shares: BigNumberish,
      amountRedeemed: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    vaultConfigUpdated(
      vault: string,
      config: IVault.VaultConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    vaultCreated(
      vault: string,
      config: IVault.VaultConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
