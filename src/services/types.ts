import { ASTProfile, EndowmentProfile } from "types/aws";
import { AxelarBridgeFees } from "types/aws";
import { EndowmentDetails } from "types/contracts";
import { AccountType, ProviderId } from "types/lists";
import { Transaction } from "types/tx";

export type MultisigConfig = {
  threshold: number;
  requireExecution: boolean;
  duration: number;
};

type Base = {
  multisig: string;
  members: string[];
  id: number;
  config: MultisigConfig;
};

type APResources = Base & {
  type: "ap";
};
type ReviewResources = Base & {
  type: "review";
};
type CharityResources = Base & {
  type: "charity";
} & EndowmentDetails;

export type AdminResources = APResources | ReviewResources | CharityResources;

export type ProposalDetails = Transaction & {
  signers: string[];
  signed: string[];
};

export type ChainQueryArgs = {
  address: string;
  chainId: string;
  providerId: ProviderId;
};

export interface IERC20 {
  amount: string;
  address: string;
}

export type EndowBalance = { [key in AccountType]: IERC20[] };

export type WithdrawFees = AxelarBridgeFees["withdraw"];

export type WithdrawInfo = {
  balances: EndowBalance;
  fees: WithdrawFees;
};

export type Profile =
  | ({
      type: "endowment";
    } & EndowmentProfile)
  | ({ type: "ast" } & ASTProfile);

//type guard
export function endow(
  profile: Profile
): profile is EndowmentProfile & { type: "endowment" } {
  return profile.type === "endowment";
}
