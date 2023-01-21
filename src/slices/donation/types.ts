import { TransactionRequest } from "@ethersproject/providers";
import type { CreateTxOptions } from "@terra-money/terra.js";
import { CountryOption } from "services/types";
import { SignDoc } from "types/cosmos";
import { TokenWithAmount } from "types/slices";
import {
  CosmosWallet,
  EVMWCWallet,
  EVMWallet,
  TerraWallet,
} from "contexts/WalletContext";
import { OptionType } from "components/Selector";
import { Chain } from "constants/chains";

export type DonationRecipient = {
  id: number;
  name: string;
  isKYCRequired: boolean;
};

export type DonationDetails = {
  token: TokenWithAmount;
  pctLiquidSplit: string;

  //meta
  chain: Chain;
  tokens: TokenWithAmount[];
};

export type KYC = {
  name: { first: string; last: string };
  address: { street: string; complement: string };
  city: string;
  postalCode: string;
  country: CountryOption;
  state: string;
  usState: OptionType<string>;
  email: string;
  hasAgreedToTerms: boolean;
  agreedToGetUpdates: boolean;
};

export type SkippableKYC = KYC | "skipped";

type InitStep = {
  step: 0;
  recipient?: DonationRecipient;
};

export type FormStep = {
  step: 1;
  details?: DonationDetails;
} & Omit<Required<InitStep>, "step">;

export type KYCStep = {
  step: 2;
  kyc?: SkippableKYC;
} & Omit<Required<FormStep>, "step">;

export type SubmitStep = {
  step: 3;
} & Omit<Required<KYCStep>, "step">;

export type DonationState = InitStep | FormStep | KYCStep | SubmitStep | TxStep;

export type TxStatus = { loadingMsg: string } | "error" | { hash: string };
export type TxStep = {
  step: 4;
  status: TxStatus;
} & Omit<SubmitStep, "step">;

export type Fee = { amount: number; symbol: string };

export type Estimate =
  | {
      type: CosmosWallet["type"];
      fee: Fee;
      doc: SignDoc;
      wallet: CosmosWallet;
    }
  | {
      type: TerraWallet["type"];
      fee: Fee;
      tx: CreateTxOptions;
      wallet: TerraWallet;
    }
  | {
      type: EVMWallet["type"] | EVMWCWallet["type"];
      fee: Fee;
      tx: TransactionRequest;
      wallet: EVMWallet | EVMWCWallet;
    };

export type DonateArgs = {
  estimate: Estimate;
  donation: SubmitStep;
};
