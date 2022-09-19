import { Coin } from "@cosmjs/proto-signing";
import { UNSDG_NUMS } from "../lists";

export interface ERC20Token {
  contractAddress: string;
  decimals: number;
  symbol: string;
  name: string;
  balance: string;
}

export interface QueryRes<T> {
  data: T;
}

export type EmbeddedWasmMsg = {
  wasm: {
    execute: {
      contract_addr: string;
      funds: Coin[];
      msg: string; //base64 endocoded msg object
    };
  };
};

export type EmbeddedBankMsg = {
  bank: {
    send: {
      amount: Coin[];
      to_address: string;
    };
  };
};

export type Vote = "yes" | "no";

export type CW4Member = {
  addr: string;
  weight: number;
};

type AbsolutePercentage = { absolute_percentage: { percentage: string } };
export type Threshold = AbsolutePercentage; // | AbsoluteCount | Quorum;

export type EndowmentStatus = {
  Inactive: 0;
  Approved: 1;
  Frozen: 2;
  Closed: 3;
};
export type EndowmentType = "charity" | "normal";
export type EndowmentStatusText = keyof EndowmentStatus;
export type EndowmentStatusNum = EndowmentStatus[EndowmentStatusText];
export type EndowmentStatusStrNum = `${EndowmentStatusNum}`;
export type EndowmentTier = "Level1" | "Level2" | "Level3";
export type EndowmentTierNum = 1 | 2 | 3;

export type Categories = {
  sdgs: UNSDG_NUMS[]; // u8 maps one of the 17 UN SDG
  general: number[]; //??
};

export interface Profile {
  name: string; // name of the Charity Endowment
  overview: string;
  categories: Categories;
  tier: number; // SHOULD NOT be editable for now (only the Config.owner, ie via the Gov contract or AP CW3 Multisig can set/update)
  logo: string;
  image: string;
  url?: string;
  registration_number?: string;
  country_of_origin?: string;
  street_address?: string;
  contact_email?: string;
  social_media_urls: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
  };
  number_of_employees?: number;
  average_annual_budget?: string;
  annual_revenue?: string;
  charity_navigator_rating?: string;
  endow_type: Capitalize<EndowmentType>;
}
export type CreateEndowmentPayload = {
  owner: string;
  beneficiary: string;
  withdraw_before_maturity: false;
  maturity_time: undefined; //don't set maturity for charities
  maturity_height: undefined; ///don't set maturity for charities
  profile: Profile;
  cw4_members: CW4Member[];
  kyc_donors_only: boolean;
  cw3_threshold: Threshold;
  cw3_max_voting_period: 86400; //seconds - 24H
};

export type Asset = {
  info: { native: string } | { cw20: string };
  amount: string;
};
