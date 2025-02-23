/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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
} from "../../../../../common";

export declare namespace IDiamondLoupe {
  export type FacetStruct = {
    facetAddress: string;
    functionSelectors: BytesLike[];
  };

  export type FacetStructOutput = [string, string[]] & {
    facetAddress: string;
    functionSelectors: string[];
  };
}

export interface IDiamondLoupeInterface extends utils.Interface {
  functions: {
    "facetAddress(bytes4)": FunctionFragment;
    "facetAddresses()": FunctionFragment;
    "facetFunctionSelectors(address)": FunctionFragment;
    "facets()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "facetAddress"
      | "facetAddresses"
      | "facetFunctionSelectors"
      | "facets"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "facetAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "facetAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "facetFunctionSelectors",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "facets", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "facetAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "facetAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "facetFunctionSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "facets", data: BytesLike): Result;

  events: {};
}

export interface IDiamondLoupe extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDiamondLoupeInterface;

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
    facetAddress(
      functionselector: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { facetaddress: string }>;

    facetAddresses(
      overrides?: CallOverrides
    ): Promise<[string[]] & { facetaddresses: string[] }>;

    facetFunctionSelectors(
      facet: string,
      overrides?: CallOverrides
    ): Promise<[string[]] & { facetfunctionselectors: string[] }>;

    facets(
      overrides?: CallOverrides
    ): Promise<
      [IDiamondLoupe.FacetStructOutput[]] & {
        facets: IDiamondLoupe.FacetStructOutput[];
      }
    >;
  };

  facetAddress(
    functionselector: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  facetAddresses(overrides?: CallOverrides): Promise<string[]>;

  facetFunctionSelectors(
    facet: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  facets(overrides?: CallOverrides): Promise<IDiamondLoupe.FacetStructOutput[]>;

  callStatic: {
    facetAddress(
      functionselector: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    facetAddresses(overrides?: CallOverrides): Promise<string[]>;

    facetFunctionSelectors(
      facet: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    facets(
      overrides?: CallOverrides
    ): Promise<IDiamondLoupe.FacetStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    facetAddress(
      functionselector: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    facetAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    facetFunctionSelectors(
      facet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    facets(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    facetAddress(
      functionselector: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    facetAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    facetFunctionSelectors(
      facet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    facets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
