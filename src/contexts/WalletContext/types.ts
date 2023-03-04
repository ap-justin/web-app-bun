import type { ConnectedWallet as TerraConnectedWallet } from "@terra-money/wallet-provider";
import type { Keplr } from "@keplr-wallet/types";
import { InjectedProvider } from "types/evm";

export type ProviderId =
  | "binance-wallet"
  | "metamask"
  | "evm-wc"
  | "xdefi-wallet" //xdefi terra provider
  | "xdefi-evm" //xdefi evm provider
  | "leap-wallet"
  | "station"
  | "walletconnect"
  | "keplr-wc"
  | "keplr";

export type Connected = {
  status: "connected";
  address: string;
  chainId: string;
  disconnect(): void;
};

type Terra = { type: "terra"; post: TerraConnectedWallet["post"] };

export type KeplrWC = Pick<Keplr, "signAmino" | "signDirect">;
export type Cosmos = {
  type: "cosmos";
  client: Keplr | KeplrWC;
};

type EVM = {
  type: "evm";
  switchChain(chainId: string): Promise<void>;
  isSwitching: boolean;
  provider: InjectedProvider;
};

type EVMWC = {
  type: "evm-wc";
  switchChain?: never;
  isSwitching?: never;
  provider: Pick<InjectedProvider, "request">;
};

export type ConnectedToChainType = Connected & (Terra | EVM | EVMWC | Cosmos);

type Disconnected = { status: "disconnected"; connect(args?: any): void };
type Loading = { status: "loading" };

export type WalletState = ConnectedToChainType | Disconnected | Loading;
export type WalletMeta = {
  logo: string;
  id: ProviderId;
  name: string;
};

export type InstallLink = Pick<WalletMeta, "name" | "logo"> & {
  url: string;
};

export type Wallet = WalletMeta & WalletState;

export type ConnectedWallet = WalletMeta & ConnectedToChainType;
export type DisconnectedWallet = WalletMeta & Disconnected;

type BaseWallet = Connected & WalletMeta;
export type EVMWallet = BaseWallet & EVM;
export type EVMWCWallet = BaseWallet & EVMWC;
export type CosmosWallet = BaseWallet & Cosmos;
export type TerraWallet = BaseWallet & Terra;

export type ContextState =
  | "loading" /** consolidate all LoadingWallet*/
  | ConnectedWallet
  | DisconnectedWallet[];

export type WithWallet<T> = T & { wallet: ConnectedWallet };
export type WithCosmosWallet<T> = T & { wallet: CosmosWallet };
