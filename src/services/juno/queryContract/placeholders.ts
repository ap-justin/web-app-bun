import { ContractQueries } from "./types";

export const placeholders: {
  [K in Exclude<
    keyof ContractQueries,
    | "multisig.members"
    | "erc20.balance"
    | "multisig.votes"
    | "index-fund.funds"
    | "index-fund.alliance-members"
  >]: ReturnType<ContractQueries[K]["transform"]>;
} = {
  "registrar.config": {
    owner: "terra1...",
    acceptedTokens: { cw20: [] },
  },
  "registrar.config-extension": {
    accounts_contract: "terra1...",
    accounts_settings_controller: "terra1...",
    applications_review: "terra1...",
    charity_shares_contract: "terra1...",
    collector_addr: "terra1...",
    cw3_code: 1,
    cw4_code: 1,
    donation_match_charites_contract: "terra1...",
    donation_match_code: 1,
    gov_contract: "terra1...",
    halo_token_lp_contract: "terra1...",
    halo_token: "terra1...",
    index_fund: "terra1...",
    subdao_bonding_token_code: 1,
    subdao_cw20_token_code: 1,
    subdao_cw900_code: 1,
    subdao_distributor_code: 1,
    subdao_gov_code: 1,
    swap_factory: "terra1...",
    swaps_router: "terra1...",
  },
  "gift-card.balance": {
    cw20: [],
    native: [],
  },
  "index-fund.config": {
    owner: "juno123abc..",
    registrarContract: "juno123abc..",
    fundRotation: 10,
    fundMemberLimit: 10,
    fundingGoal: 50000,
    alliance_members: [],
  },

  "multisig.config": {
    group_addr: "juno123abc..",
    threshold: {
      absolute_percentage: {
        percentage: "0.5",
      },
    },
    max_voting_period: { time: 1000 },
    require_execution: true,
  },
  /**
   * not implemented in solidity multisig.
   * can only get array of ids
   */
  "multisig.proposals": [],
  /**
   * not implemented in solidity multisig.
   */
  "multisig.proposal": {
    id: 1,
    title: "this prpposal rocks",
    description: "this is a description",
    msgs: [],
    status: "pending",
    expires: { at_time: 123 },
    threshold: { absolute_percentage: { percentage: "0.5", total_weight: 2 } },
    proposal_type: "normal",
  },
};
