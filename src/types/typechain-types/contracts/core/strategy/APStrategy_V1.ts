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

export declare namespace IStrategy {
  export type StrategyConfigStruct = {
    strategyId: BytesLike;
    baseToken: string;
    yieldToken: string;
    admin: string;
  };

  export type StrategyConfigStructOutput = [string, string, string, string] & {
    strategyId: string;
    baseToken: string;
    yieldToken: string;
    admin: string;
  };
}

export interface APStrategy_V1Interface extends utils.Interface {
  functions: {
    "config()": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "getStrategyConfig()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "previewDeposit(uint256)": FunctionFragment;
    "previewWithdraw(uint256)": FunctionFragment;
    "setStrategyConfig((bytes4,address,address,address))": FunctionFragment;
    "unpause()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "config"
      | "deposit"
      | "getStrategyConfig"
      | "pause"
      | "paused"
      | "previewDeposit"
      | "previewWithdraw"
      | "setStrategyConfig"
      | "unpause"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "config", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStrategyConfig",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "previewDeposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "previewWithdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setStrategyConfig",
    values: [IStrategy.StrategyConfigStruct]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "config", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getStrategyConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "previewDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStrategyConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "ConfigChanged((bytes4,address,address,address))": EventFragment;
    "EnteredPosition(uint256,uint256)": EventFragment;
    "LogError(string)": EventFragment;
    "LogErrorBytes(bytes)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "WithdrewPosition(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ConfigChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EnteredPosition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogError"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogErrorBytes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrewPosition"): EventFragment;
}

export interface ConfigChangedEventObject {
  stratConfig: IStrategy.StrategyConfigStructOutput;
}
export type ConfigChangedEvent = TypedEvent<
  [IStrategy.StrategyConfigStructOutput],
  ConfigChangedEventObject
>;

export type ConfigChangedEventFilter = TypedEventFilter<ConfigChangedEvent>;

export interface EnteredPositionEventObject {
  baseTokenAmt: BigNumber;
  yieldTokenAmt: BigNumber;
}
export type EnteredPositionEvent = TypedEvent<
  [BigNumber, BigNumber],
  EnteredPositionEventObject
>;

export type EnteredPositionEventFilter = TypedEventFilter<EnteredPositionEvent>;

export interface LogErrorEventObject {
  message: string;
}
export type LogErrorEvent = TypedEvent<[string], LogErrorEventObject>;

export type LogErrorEventFilter = TypedEventFilter<LogErrorEvent>;

export interface LogErrorBytesEventObject {
  data: string;
}
export type LogErrorBytesEvent = TypedEvent<[string], LogErrorBytesEventObject>;

export type LogErrorBytesEventFilter = TypedEventFilter<LogErrorBytesEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface WithdrewPositionEventObject {
  yieldTokenAmt: BigNumber;
  baseTokenAmt: BigNumber;
}
export type WithdrewPositionEvent = TypedEvent<
  [BigNumber, BigNumber],
  WithdrewPositionEventObject
>;

export type WithdrewPositionEventFilter =
  TypedEventFilter<WithdrewPositionEvent>;

export interface APStrategy_V1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: APStrategy_V1Interface;

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
    config(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        strategyId: string;
        baseToken: string;
        yieldToken: string;
        admin: string;
      }
    >;

    deposit(
      amt: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    getStrategyConfig(
      overrides?: CallOverrides
    ): Promise<[IStrategy.StrategyConfigStructOutput]>;

    pause(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    previewDeposit(
      amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    previewWithdraw(
      amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setStrategyConfig(
      _config: IStrategy.StrategyConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdraw(
      amt: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  config(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string] & {
      strategyId: string;
      baseToken: string;
      yieldToken: string;
      admin: string;
    }
  >;

  deposit(
    amt: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  getStrategyConfig(
    overrides?: CallOverrides
  ): Promise<IStrategy.StrategyConfigStructOutput>;

  pause(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  previewDeposit(
    amt: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  previewWithdraw(
    amt: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setStrategyConfig(
    _config: IStrategy.StrategyConfigStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdraw(
    amt: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    config(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        strategyId: string;
        baseToken: string;
        yieldToken: string;
        admin: string;
      }
    >;

    deposit(amt: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getStrategyConfig(
      overrides?: CallOverrides
    ): Promise<IStrategy.StrategyConfigStructOutput>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    previewDeposit(
      amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    previewWithdraw(
      amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setStrategyConfig(
      _config: IStrategy.StrategyConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    withdraw(amt: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "ConfigChanged((bytes4,address,address,address))"(
      stratConfig?: null
    ): ConfigChangedEventFilter;
    ConfigChanged(stratConfig?: null): ConfigChangedEventFilter;

    "EnteredPosition(uint256,uint256)"(
      baseTokenAmt?: null,
      yieldTokenAmt?: null
    ): EnteredPositionEventFilter;
    EnteredPosition(
      baseTokenAmt?: null,
      yieldTokenAmt?: null
    ): EnteredPositionEventFilter;

    "LogError(string)"(message?: null): LogErrorEventFilter;
    LogError(message?: null): LogErrorEventFilter;

    "LogErrorBytes(bytes)"(data?: null): LogErrorBytesEventFilter;
    LogErrorBytes(data?: null): LogErrorBytesEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "WithdrewPosition(uint256,uint256)"(
      yieldTokenAmt?: null,
      baseTokenAmt?: null
    ): WithdrewPositionEventFilter;
    WithdrewPosition(
      yieldTokenAmt?: null,
      baseTokenAmt?: null
    ): WithdrewPositionEventFilter;
  };

  estimateGas: {
    config(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amt: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    getStrategyConfig(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    previewDeposit(
      amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    previewWithdraw(
      amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setStrategyConfig(
      _config: IStrategy.StrategyConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    unpause(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    withdraw(
      amt: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    config(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      amt: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getStrategyConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    previewDeposit(
      amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    previewWithdraw(
      amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setStrategyConfig(
      _config: IStrategy.StrategyConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdraw(
      amt: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
