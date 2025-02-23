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

export interface GasFwdInterface extends utils.Interface {
  functions: {
    "initialize(address)": FunctionFragment;
    "payForGas(address,uint256)": FunctionFragment;
    "sweep(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "initialize" | "payForGas" | "sweep"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "payForGas",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "sweep", values: [string]): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payForGas", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sweep", data: BytesLike): Result;

  events: {
    "GasPay(address,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "Sweep(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GasPay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sweep"): EventFragment;
}

export interface GasPayEventObject {
  token: string;
  amount: BigNumber;
}
export type GasPayEvent = TypedEvent<[string, BigNumber], GasPayEventObject>;

export type GasPayEventFilter = TypedEventFilter<GasPayEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface SweepEventObject {
  token: string;
  amount: BigNumber;
}
export type SweepEvent = TypedEvent<[string, BigNumber], SweepEventObject>;

export type SweepEventFilter = TypedEventFilter<SweepEvent>;

export interface GasFwd extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GasFwdInterface;

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
    initialize(
      _accounts: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    payForGas(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    sweep(
      token: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  initialize(
    _accounts: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  payForGas(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  sweep(
    token: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    initialize(_accounts: string, overrides?: CallOverrides): Promise<void>;

    payForGas(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sweep(token: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "GasPay(address,uint256)"(token?: null, amount?: null): GasPayEventFilter;
    GasPay(token?: null, amount?: null): GasPayEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "Sweep(address,uint256)"(token?: null, amount?: null): SweepEventFilter;
    Sweep(token?: null, amount?: null): SweepEventFilter;
  };

  estimateGas: {
    initialize(
      _accounts: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    payForGas(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    sweep(
      token: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      _accounts: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    payForGas(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    sweep(
      token: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
