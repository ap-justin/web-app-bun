import { AccAddress } from "@terra-money/terra.js";

export enum chains {
  testnet = "bombay-12",
  mainnet = "columbus-5",
  localterra = "localterra",
  eth_kovan = "42",
  eth_ropsten = "3",
  eth_main = "1",
  btc_test = "1",
  sol_dev = "devnet",
  sol_main = "mainnet-beta",
  sol_test = "testnet",
  cosmos_3 = "cosmoshub-3",
  cosmos_4 = "cosmoshub-4",
}

export enum sc {
  index_fund = "index_fund",
  registrar = "registrar",
  anchor = "anchor",
}

export type URLs = {
  [index: string]: string;
};

//Contract types
export type ContractAddrs = {
  [index: string]: AccAddress;
};

//Index Fund types
export interface TCAList {
  tca_members: string[];
}
export type Donation = { address: string; total_ust: string };
export interface Donors {
  donors: Donation[];
}

//Registrar types
export type SplitConfig = { max: string; min: string; default: string };
export interface SplitRes {
  split_to_liquid: SplitConfig;
}

export type Endowment = { address: string; status: string };
export type Endowments = { endowments: Endowment[] };

//Accounts

export interface AccountDetails {
  name: string;
  description: string;
  owner: string;
  others: any;
}

export type Holding = { address: string; amount: string };
export type Balance = {
  total_locked: number;
  total_liq: number;
  overall: number;
};

export interface OwnedBalance extends Balance {
  address: AccAddress;
}

export interface Holdings {
  locked_native: Holding[];
  locked_cw20: Holding[];
  liquid_native: Holding[];
  liquid_cw20: Holding[];
}

//Vaults
export type Swap = { exchange_rate: string; yield_token_supply: string };
