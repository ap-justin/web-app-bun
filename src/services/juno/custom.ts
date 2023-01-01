import ERC20Abi from "abi/ERC20.json";
import {
  AdminResources,
  AdminRoles,
  EndowmentInfo,
  ProposalDetails,
} from "services/types";
import { Chain, FetchedChain, TToken } from "types/aws";
import { CW3Config, EndowmentDetails } from "types/contracts";
import { BigNumber, EVMContract, JsonRpcProvider } from "types/evm";
import { Coin } from "types/terra";
import { ConnectedWallet } from "contexts/Wallet";
import { condenseToNum, idParamToNum } from "helpers";
import { formatUnits } from "helpers/evm";
import { chains } from "constants/chainsV2";
import { contracts } from "constants/contracts";
import { adminRoutes, appRoutes } from "constants/routes";
import { APIs } from "constants/urls";
import { junoApi } from ".";
import { queryContract } from "./queryContract";
import { customTags, defaultProposalTags, junoTags } from "./tags";

export const AP_ID = 0;
export const REVIEWER_ID = 0.5;

function getCWs(id: number) {
  //TODO: atm, only two admin types, refactor this once > 2
  //charities doesn't have hardcoded cws, so only test for AP_ID && REVIEWER_ID
  const cw3Addr = id === AP_ID ? contracts.cw3ApTeam : contracts.cw3ReviewTeam;
  const cw4Addr =
    id === REVIEWER_ID ? contracts.cw4GrpApTeam : contracts.cw4GrpReviewTeam;
  const role: AdminRoles = id === AP_ID ? "ap" : "reviewer";
  return { cw3Addr, cw4Addr, role };
}

function isAp(id: number) {
  return id === AP_ID || id === REVIEWER_ID;
}

async function getPropMeta(
  endowId: number,
  cw3: string,
  config: CW3Config
): Promise<AdminResources["propMeta"]> {
  const votersRes = await queryContract("cw3ListVoters", cw3, null);
  const numVoters = votersRes.voters.length;

  const willExecute =
    /** single member */
    numVoters === 1 ||
    /** multiple members but threshold is lte 1/members given that execution is not required */
    (!config.require_execution &&
      Number(config.threshold.absolute_percentage.percentage) <= 1 / numVoters);

  const tagPayloads = [customApi.util.invalidateTags(defaultProposalTags)];

  return willExecute
    ? {
        willExecute,
        successMeta: {
          message: "Successful transaction",
          link: {
            url: `${appRoutes.admin}/${endowId}`,
            description: "Go to admin home",
          },
        },
        tagPayloads,
      }
    : {
        willExecute: undefined,
        successMeta: {
          message: "Proposal successfully created",
          link: {
            url: `${appRoutes.admin}/${endowId}/${adminRoutes.proposals}`,
            description: "Go to proposals",
          },
        },
        tagPayloads,
      };
}

export const customApi = junoApi.injectEndpoints({
  endpoints: (builder) => ({
    balance: builder.query<
      number | { balance: number; giftcard: number },
      TToken & { chainId: string; address: string }
    >({
      providesTags(result, meta, args) {
        return result !== undefined
          ? [{ type: "balance", id: args.token_id }]
          : [];
      },
      async queryFn({ chainId, address, ...coin }) {
        const chain = chains[chainId];
        switch (coin.type) {
          case "juno-native":
          case "terra-native":
          case "ibc": {
            const { balance } = await fetch(
              `${chain.lcd}/cosmos/bank/v1beta1/balances/${address}/by_denom?denom=${coin.token_id}`
            ).then<{ balance: Coin.Data }>((res) => {
              if (!res.ok) {
                throw new Error(`failed to fetch balance ${coin.token_id}`);
              }
              return res.json();
            });

            return { data: condenseToNum(balance.amount, coin.decimals) };
          }
          case "cw20": {
            const { balance } = await queryContract(
              "cw20Balance",
              coin.token_id,
              { addr: address },
              chain.lcd
            );
            return { data: condenseToNum(balance, coin.decimals) };
          }
          case "erc20": {
            const provider = new JsonRpcProvider(chain.rpc);
            const contract = new EVMContract(coin.token_id, ERC20Abi, provider);
            const balance = contract.balanceOf(address) as Promise<BigNumber>;
            return { data: +formatUnits(await balance, coin.decimals) };
          }
          default: /** evm native */
            const provider = new JsonRpcProvider(chain.rpc);
            const balance = await provider.getBalance(address);
            return { data: +formatUnits(balance, coin.decimals) };
        }
      },
    }),
    isMember: builder.query<boolean, { user: string; endowmentId?: string }>({
      providesTags: [{ type: junoTags.custom, id: customTags.isMember }],
      async queryFn(args) {
        const numId = idParamToNum(args.endowmentId);
        /** special case for ap admin usage */
        if (isAp(numId)) {
          const { cw3Addr } = getCWs(numId);
          //skip endowment query, query hardcoded cw3 straight
          const voter = await queryContract("cw3Voter", cw3Addr, {
            addr: args.user,
          });
          return {
            data: !!voter.weight,
          };
        }

        const endowment = await queryContract(
          "accEndowment",
          contracts.accounts,
          { id: numId }
        );

        const voter = await queryContract("cw3Voter", endowment.owner, {
          addr: args.user,
        });

        return {
          data: !!voter.weight,
        };
      },
    }),
    adminResources: builder.query<
      AdminResources | undefined,
      { user: string; endowmentId?: string }
    >({
      providesTags: [{ type: junoTags.custom, id: customTags.adminResources }],
      async queryFn(args) {
        const numId = idParamToNum(args.endowmentId);

        if (isAp(numId)) {
          const { cw3Addr, cw4Addr, role } = getCWs(numId);
          //skip endowment query, query hardcoded cw3 straight
          const voter = await queryContract("cw3Voter", cw3Addr, {
            addr: args.user,
          });

          if (!!voter.weight) {
            const cw3config = await queryContract("cw3Config", cw3Addr, null);

            return {
              data: {
                cw3: cw3Addr,
                cw4: cw4Addr,
                endowmentId: numId,
                endowment: {} as EndowmentDetails, //admin templates shoudn't access this
                cw3config,
                role,
                propMeta: await getPropMeta(numId, cw3Addr, cw3config),
              },
            };
          } else {
            return { data: undefined };
          }
        }

        //get endowment details
        const endowment = await queryContract(
          "accEndowment",
          contracts.accounts,
          { id: numId }
        );

        const voter = await queryContract("cw3Voter", endowment.owner, {
          addr: args.user,
        });

        if (!!voter.weight) {
          const cw3config = await queryContract(
            "cw3Config",
            endowment.owner,
            null
          );
          return {
            data: {
              cw3: endowment.owner,
              cw4: cw3config.group_addr,
              endowmentId: numId,
              endowment,
              cw3config,
              role: "charity",
              propMeta: await getPropMeta(numId, endowment.owner, cw3config),
            },
          };
        }
        //if wallet is now owner, don't return anything
        return { data: undefined };

        //query is member
      },
    }),
    proposalDetails: builder.query<
      ProposalDetails,
      { id?: string; cw3: string; voter: string }
    >({
      providesTags: [{ type: junoTags.custom, id: customTags.proposalDetails }],
      async queryFn(args) {
        const id = Number(args.id);

        if (isNaN(id)) {
          return { error: undefined };
        }

        const [proposal, votesRes] = await Promise.all([
          queryContract("cw3Proposal", args.cw3, { id }),
          queryContract("cw3Votes", args.cw3, {
            proposal_id: id,
          }),
        ]);

        return {
          data: {
            ...proposal,
            votes: votesRes.votes,
          },
        };
      },
    }),
    endowInfo: builder.query<EndowmentInfo, number>({
      providesTags: [{ type: junoTags.custom, id: customTags.proposalDetails }],
      async queryFn(id) {
        const [profile, details] = await Promise.all([
          queryContract("accProfile", contracts.accounts, { id }),
          queryContract("accEndowment", contracts.accounts, { id }),
        ]);
        return {
          data: {
            ...profile,
            ...details,
            id,
          },
        };
      },
    }),
  }),
});

export const {
  useIsMemberQuery,
  useAdminResourcesQuery,
  useProposalDetailsQuery,
  useEndowInfoQuery,
} = customApi;
