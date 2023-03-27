import {
  AdminVoteInfo,
  AllianceMember,
  CW3Config,
  CW4Member,
  CW20Balance,
  CW20Info,
  EndowmentController,
  EndowmentDetails,
  EndowmentState,
  FundDetails,
  GenericBalance,
  GovConfig,
  GovStaker,
  GovState,
  IndexFundConfig,
  InquiredMember,
  PageOptions,
  Polls,
  Proposal,
  RegistrarConfig,
  RegistrarConfigExtension,
  VotesPageOptions,
} from "types/contracts";
import { Contract } from "types/lists";

type Addr = { addr: string };

type Query<Args, Result> = {
  args: Args;
  transform: (res: any) => Result;
};

export interface ContractQueries {
  "registrar.config": Query<null, RegistrarConfig>;
  "registrar.config-extension": Query<null, RegistrarConfigExtension>;

  "index-fund.funds": Query<null, FundDetails[]>;
  "index-fund.alliance-members": Query<null, AllianceMember[]>;
  "index-fund.config": Query<null, IndexFundConfig>;

  "gift-card.balance": Query<Addr, GenericBalance>;

  "gov.staker": Query<Addr, GovStaker>;
  "gov.state": Query<null, GovState>;
  "gov.config": Query<null, GovConfig>;
  "gov.polls": Query<null, Polls["polls"]>;

  "cw20.info": Query<null, CW20Info>;
  "cw20.balance": Query<Addr, CW20Balance>;

  "cw4.members": Query<null, CW4Member[]>;
  "cw4.member": Query<Addr, InquiredMember>;

  "cw3.voter": Query<Addr, InquiredMember>;
  "cw3.voters": Query<null, string[]>;
  "cw3.config": Query<null, CW3Config>;
  "cw3.proposals": Query<PageOptions, Proposal[]>;
  "cw3.proposal": Query<{ id: number }, Proposal>;
  "cw3.votes": Query<VotesPageOptions, AdminVoteInfo[]>;

  "accounts.endowment": Query<{ id: number }, EndowmentDetails>;
  "accounts.state": Query<{ id: number }, EndowmentState>;

  "accounts/settings.controller": Query<{ id: number }, EndowmentController>;
}

export type ContractQueryTypes = keyof ContractQueries;

type Empty = { [key: string]: never };
type QueryArgs = ContractQueries[ContractQueryTypes]["args"];

export type QueryOptions<T extends ContractQueryTypes> =
  (T extends `${infer C}.${string}`
    ? C extends Contract
      ? //if args is also null, options is empty
        QueryArgs extends null
        ? Empty
        : {}
      : //if contract address is not hardcoded, need to supply
        { [key in C]: string }
    : Empty) &
    //only require args if they're not null
    (QueryArgs extends null ? Empty : QueryArgs);
