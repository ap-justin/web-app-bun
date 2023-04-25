import { Completed, TFee } from "slices/launchpad/types";
import { SettingsPermission } from "types/contracts";
import { Fee, NewAST } from "types/contracts/evm";
import angelProtocolRoundedLogo from "assets/images/angelprotocol-rounded-logo.png";
import { roundDownToNum } from "helpers";
import { blockTime } from "helpers/admin";
import { ADDRESS_ZERO } from "constants/evm";

export default function toEVMAST(
  {
    1: about,
    2: management,
    3: whitelists,
    4: maturity,
    5: splits,
    6: fees,
  }: Completed,
  creator: string
): NewAST {
  return {
    owner: creator,
    withdrawBeforeMaturity: true, //not specified in launchpad design
    maturityTime: maturity.date ? blockTime(maturity.date) : 0,
    // maturityHeight: 0; //not specified in launchpad design
    maturityHeight: 0,
    name: about.name,
    categories: { sdgs: [], general: [] }, //not specified in launchpad design
    tier: 0, //not specified in launchpad design
    endow_type: 1,
    logo: angelProtocolRoundedLogo,
    image: "",
    cw4_members: [creator], //in launchpad design, weight is specified for each member
    kycDonorsOnly: false, //not specified in launchpad design
    cw3Threshold: {
      enumData: 1,
      data: {
        weight: 0,
        percentage: +management.proposal.threshold,
        threshold: 0,
        quorum: 0,
      },
    },
    cw3MaxVotingPeriod: {
      enumData: 1,
      data: {
        height: 0,
        time: roundDownToNum(+management.proposal.duration * 60 * 60, 0),
      },
    },
    whitelistedBeneficiaries: whitelists.beneficiaries,
    whitelistedContributors: whitelists.contributors,

    splitMax: +splits.max,
    splitMin: +splits.min,
    splitDefault: +splits.default,

    // //fees
    earningsFee: toEndowFee(fees.earnings),
    withdrawFee: toEndowFee(fees.withdrawal),
    depositFee: toEndowFee(fees.deposit),
    aumFee: toEndowFee({ isActive: false, receiver: "", rate: "0" }), //not included in launchpad, for edit later

    //dao (overriden by bool createDao ):not included in launchpad, for edit later
    dao: {
      quorum: 0,
      threshold: 0,
      votingPeriod: 0,
      timelockPeriod: 0,
      expirationPeriod: 0,
      proposalDeposit: 0,
      snapshotPeriod: 0,
      token: {
        token: 0,
        data: {
          existingCw20Data: ADDRESS_ZERO,
          newCw20InitialSupply: 0,
          newCw20Name: "",
          newCw20Symbol: "",
          bondingCurveCurveType: {
            curve_type: 0,
            data: {
              value: 0,
              scale: 0,
              slope: 0,
              power: 0,
            },
          },
          bondingCurveName: "",
          bondingCurveSymbol: "",
          bondingCurveDecimals: 0,
          bondingCurveReserveDenom: ADDRESS_ZERO,
          bondingCurveReserveDecimals: 0,
          bondingCurveUnbondingPeriod: 0,
        },
      },
    },
    createDao: false,

    proposalLink: 0, //not specified in launchpad design

    settingsController: {
      endowmentController: defaultPermission,
      strategies: defaultPermission,
      whitelistedBeneficiaries: defaultPermission,
      whitelistedContributors: defaultPermission,
      maturityWhitelist: defaultPermission,
      maturityTime: defaultPermission,
      profile: defaultPermission,
      earningsFee: defaultPermission,
      withdrawFee: defaultPermission,
      depositFee: defaultPermission,
      aumFee: defaultPermission,
      kycDonorsOnly: defaultPermission,
      name: defaultPermission,
      image: defaultPermission,
      logo: defaultPermission,
      categories: defaultPermission,
      splitToLiquid: defaultPermission,
      ignoreUserSplits: defaultPermission,
    },
    // settingsController: SettingsController; //not included in launchpad, for edit later
    parent: 0,
    maturityWhitelist: maturity.beneficiaries.map((b) => b.addr),
    ignoreUserSplits: false,
    splitToLiquid: {
      min: 0,
      max: 100,
      defaultSplit: 50,
    },
  };
}

function toEndowFee(fee: TFee): Fee {
  const addr = fee.isActive ? fee.receiver : ADDRESS_ZERO;
  return {
    payoutAddress: addr,
    feePercentage: +fee.rate,
    active: fee.isActive,
  };
}

const defaultPermission: SettingsPermission = {
  ownerControlled: true,
  govControlled: true,
  modifiableAfterInit: true,
  delegate: {
    Addr: ADDRESS_ZERO,
    expires: 0,
  },
};
