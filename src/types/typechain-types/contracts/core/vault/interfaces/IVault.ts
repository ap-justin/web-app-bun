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
  PayableOverrides,
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

  export type RedemptionResponseStruct = {
    token: string;
    amount: BigNumberish;
    status: BigNumberish;
  };

  export type RedemptionResponseStructOutput = [string, BigNumber, number] & {
    token: string;
    amount: BigNumber;
    status: number;
  };
}

export interface IVaultInterface extends utils.Interface {
  functions: {
    "deposit(uint32,address,uint256)": FunctionFragment;
    "getVaultConfig()": FunctionFragment;
    "harvest(uint32[])": FunctionFragment;
    "redeem(uint32,uint256)": FunctionFragment;
    "redeemAll(uint32)": FunctionFragment;
    "setVaultConfig((uint8,bytes4,address,address,address,address,string,string,address))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deposit"
      | "getVaultConfig"
      | "harvest"
      | "redeem"
      | "redeemAll"
      | "setVaultConfig"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "harvest",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemAll",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setVaultConfig",
    values: [IVault.VaultConfigStruct]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getVaultConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeemAll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setVaultConfig",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IVaultInterface;

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
      accountId: BigNumberish,
      token: string,
      amt: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    getVaultConfig(
      overrides?: CallOverrides
    ): Promise<[IVault.VaultConfigStructOutput]>;

    harvest(
      accountIds: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    redeem(
      accountId: BigNumberish,
      amt: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    redeemAll(
      accountId: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    setVaultConfig(
      _newConfig: IVault.VaultConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  deposit(
    accountId: BigNumberish,
    token: string,
    amt: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  getVaultConfig(
    overrides?: CallOverrides
  ): Promise<IVault.VaultConfigStructOutput>;

  harvest(
    accountIds: BigNumberish[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  redeem(
    accountId: BigNumberish,
    amt: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  redeemAll(
    accountId: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  setVaultConfig(
    _newConfig: IVault.VaultConfigStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(
      accountId: BigNumberish,
      token: string,
      amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getVaultConfig(
      overrides?: CallOverrides
    ): Promise<IVault.VaultConfigStructOutput>;

    harvest(
      accountIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    redeem(
      accountId: BigNumberish,
      amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IVault.RedemptionResponseStructOutput>;

    redeemAll(
      accountId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IVault.RedemptionResponseStructOutput>;

    setVaultConfig(
      _newConfig: IVault.VaultConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    deposit(
      accountId: BigNumberish,
      token: string,
      amt: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    getVaultConfig(overrides?: CallOverrides): Promise<BigNumber>;

    harvest(
      accountIds: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    redeem(
      accountId: BigNumberish,
      amt: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    redeemAll(
      accountId: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    setVaultConfig(
      _newConfig: IVault.VaultConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      accountId: BigNumberish,
      token: string,
      amt: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getVaultConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    harvest(
      accountIds: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    redeem(
      accountId: BigNumberish,
      amt: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    redeemAll(
      accountId: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setVaultConfig(
      _newConfig: IVault.VaultConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
