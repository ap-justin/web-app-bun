import type { BigNumber } from "@ethersproject/bignumber";
import {
  DecodedEndowment,
  DecodedEndowmentState,
  DecodedFund,
  DecodedGiftCardBalance,
  toEndowStatusText,
  toEndowType,
  toSettingsPermission,
} from "./decoded-types";
import { ContractQueries as Q, ContractQueryTypes as QT } from "./types";
// import { RegistrarConfig } from "types/contracts";
import { UNSDG_NUMS } from "types/lists";
import { accounts } from "contracts/evm/Account";
import { erc20 } from "contracts/evm/ERC20";
import { giftCard } from "contracts/evm/gift-card";
import { indexFund } from "contracts/evm/index-fund";
import { multisig } from "contracts/evm/multisig";
import { registrar } from "contracts/evm/registrar";
import { toTuple } from "helpers";
import { placeholders as p } from "./placeholders";

type MigrationState =
  | "migrated"
  | "semi-migrated" /** working but with incomplete data */
  | "placeholder"; /** encoder and decoders are wired but not yet complete */

export const queryObjects: {
  [K in QT]: Q[K]["args"] extends null
    ? [string, Q[K]["transform"], MigrationState]
    : [(args: Q[K]["args"]) => string, Q[K]["transform"], MigrationState];
} = {
  /** registrar */
  "registrar.config": [
    registrar.encodeFunctionData("queryConfig", []),
    () => {
      return p["registrar.config"];
      // const decoded: RegistrarConfig = registrar.decodeFunctionResult(
      //   "queryConfig",
      //   result
      // )[0];
      //select fields only
      // return { owner: decoded.owner, acceptedTokens: decoded.acceptedTokens };
    },
    "placeholder",
  ],
  "registrar.config-extension": [
    "",
    () => p["registrar.config-extension"],
    "placeholder",
  ],

  /** index fund */
  "index-fund.funds": [
    (args) => indexFund.encodeFunctionData("queryFundsList", toTuple(args)),
    (result) => {
      const decoded: DecodedFund[] = indexFund.decodeFunctionResult(
        "queryFundsList",
        result
      )[0];
      return decoded.map((f) => ({
        id: f.id.toNumber(),
        name: f.name,
        description: f.description,
        members: f.members.map((m) => m.toNumber()),
        rotatingFund: f.rotatingFund,
        splitToLiquid: f.splitToLiquid.toNumber(),
        expiryTime: f.expiryTime.toNumber(),
        expiryHeight: f.expiryHeight.toNumber(),
      }));
    },
    "migrated",
  ],
  "index-fund.alliance-members": [
    (args) =>
      indexFund.encodeFunctionData("queryAllianceMembers", toTuple(args)),
    (result) => {
      const decoded: string[] = indexFund.decodeFunctionResult(
        "queryAllianceMembers",
        result
      )[0];
      return decoded.map((a) => ({
        wallet: a,
        name: "Alliance member",
      }));
    },
    "semi-migrated",
  ],
  "index-fund.config": ["", () => p["index-fund.config"], "placeholder"],

  /** erc20 */
  "erc20.balance": [
    ({ addr }) => erc20.encodeFunctionData("balanceOf", [addr]),
    (result) => {
      const decoded: BigNumber = erc20.decodeFunctionResult(
        "balanceOf",
        result
      )[0];
      return decoded.toString();
    },
    "migrated",
  ],

  /** giftcard */
  "gift-card.balance": [
    ({ addr }) => giftCard.encodeFunctionData("queryBalance", [addr]),
    (result) => {
      const decoded: DecodedGiftCardBalance = giftCard.decodeFunctionResult(
        "queryBalance",
        result
      )[0];
      const {
        coinNativeAmount,
        /** amounts and addresses corresponds to one another */
        Cw20CoinVerified_addr: addresses,
        Cw20CoinVerified_amount: amounts,
      } = decoded;

      return {
        cw20: addresses.map((addr, i) => ({
          address: addr,
          amount: amounts[i].toString(),
        })),
        native: [{ denom: "", amount: coinNativeAmount.toString() }],
      };
    },
    "placeholder",
  ],

  /** multisig */
  "multisig.members": [
    multisig.encodeFunctionData("getOwners", []),
    (result) => {
      const owners: string[] = multisig.decodeFunctionResult(
        "getOwners",
        result
      )[0];
      return owners.map((addr) => ({ addr, weight: 1 }));
    },
    "migrated",
  ],
  "multisig.config": ["", () => p["multisig.config"], "placeholder"],
  //TO CONFIRM: no query for Proposal[] just proposal_id[]
  "multisig.proposals": [
    (options) => {
      const from = options.start_before || 0;
      const to = from + (options.limit || 0);
      return multisig.encodeFunctionData(
        "getTransactionIds",
        toTuple({
          from,
          to,
          pending: true,
          executed: true,
        })
      );
    },
    (result) => {
      const ids: BigNumber[] = multisig.decodeFunctionResult(
        "getTransactionIds",
        result
      )[0];
      return ids.map((id) => ({
        ...p["multisig.proposal"],
        id: id.toNumber(),
      }));
    },

    "semi-migrated",
  ],
  "multisig.proposal": [() => "", () => p["multisig.proposal"], "placeholder"],

  "multisig.votes": [
    ({ proposal_id }) =>
      multisig.encodeFunctionData("getConfirmations", [proposal_id]),
    (result) => {
      const confirmations: string[] = multisig.decodeFunctionResult(
        "getConfirmations",
        result
      )[0];
      return confirmations.map((addr) => ({
        voter: addr,
        vote: "yes",
        weight: 1,
      }));
    },

    "migrated",
  ],

  /** account */
  "accounts.endowment": [
    ({ id }) => accounts.encodeFunctionData("queryEndowmentDetails", [id]),
    (result) => {
      const d: DecodedEndowment = accounts.decodeFunctionResult(
        "queryEndowmentDetails",
        result
      )[0];
      const controller = d.settingsController;
      return {
        owner: d.owner,
        categories: {
          sdgs: d.categories.sdgs.map((s) => s.toNumber()) as UNSDG_NUMS[],
          general: d.categories.general.map((s) =>
            s.toNumber()
          ) as UNSDG_NUMS[],
        },
        endow_type: toEndowType(d.endow_type),
        status: toEndowStatusText(d.status),
        kyc_donors_only: d.kycDonorsOnly,
        settingsController: {
          endowmentController: toSettingsPermission(
            controller.endowmentController
          ),
          strategies: toSettingsPermission(controller.endowmentController),
          whitelistedBeneficiaries: toSettingsPermission(
            controller.whitelistedBeneficiaries
          ),
          whitelistedContributors: toSettingsPermission(
            controller.whitelistedContributors
          ),
          maturityWhitelist: toSettingsPermission(controller.maturityWhitelist),
          maturityTime: toSettingsPermission(controller.maturityTime),
          profile: toSettingsPermission(controller.profile),
          earningsFee: toSettingsPermission(controller.earningsFee),
          withdrawFee: toSettingsPermission(controller.withdrawFee),
          depositFee: toSettingsPermission(controller.depositFee),
          aumFee: toSettingsPermission(controller.aumFee),
          kycDonorsOnly: toSettingsPermission(controller.kycDonorsOnly),
          name: toSettingsPermission(controller.name),
          image: toSettingsPermission(controller.image),
          logo: toSettingsPermission(controller.logo),
          categories: toSettingsPermission(controller.categories),
          splitToLiquid: toSettingsPermission(controller.splitToLiquid),
          ignoreUserSplits: toSettingsPermission(controller.ignoreUserSplits),
        },
      };
    },
    "migrated",
  ],
  "accounts.state": [
    ({ id }) => accounts.encodeFunctionData("queryState", [id]),
    (result) => {
      const d: DecodedEndowmentState = accounts.decodeFunctionResult(
        "queryState",
        result
      )[0];

      return {
        //TODO: populate once needed
        tokens_on_hand: {
          locked: {
            native: [],
            cw20: [],
          },
          liquid: {
            native: [],
            cw20: [],
          },
        },
        donations_received: {
          locked: d.donationsReceived.locked.toNumber(),
          liquid: d.donationsReceived.liquid.toNumber(),
        },
        closing_endowment: d.closingEndowment,
        //FUTURE: index-fund can also be beneficiary
        closing_beneficiary: d.closingBeneficiary.data.addr,
      };
    },
    "migrated",
  ],
};
