import type { BigNumber } from "@ethersproject/bignumber";
import { OverrideProperties } from "type-fest";
import {
  Beneficiary,
  Delegate,
  EndowmentStatus,
  EndowmentStatusText,
  FundDetails,
  GenericBalMap,
  SplitDetails,
} from "types/contracts";
import { EndowmentType } from "types/lists";
import { AngelCoreStruct } from "types/typechain-types/contracts/core/struct.sol/AngelCoreStruct";

enum EndowmentTypeEnum {
  Charity,
  Normal,
  None,
}

type DDelegate = OverrideProperties<Delegate, { expires: BigNumber }>;

export type DGenericBalance = {
  coinNativeAmount: BigNumber;
  Cw20CoinVerified_amount: BigNumber[];
  Cw20CoinVerified_addr: string[];
};

type DBeneficiaryData = OverrideProperties<
  Beneficiary["data"],
  { id: BigNumber }
>;
type DBeneficiary = OverrideProperties<
  Beneficiary,
  {
    data: DBeneficiaryData;
    enumData: BigNumber;
  }
>;
export interface DEndowmentState {
  donationsReceived: {
    liquid: BigNumber;
    locked: BigNumber;
  };
  balances: {
    locked: DGenericBalance;
    liquid: DGenericBalance;
  };
  closingEndowment: boolean;
  closingBeneficiary: DBeneficiary;
}

export type DFund = OverrideProperties<
  FundDetails,
  {
    id: BigNumber;
    members: BigNumber[];
    splitToLiquid: BigNumber;
    expiryTime: BigNumber;
    expiryHeight: BigNumber;
  }
>;

export type DTransaction = {
  title: string;
  description: string;
  destination: string;
  value: BigNumber;
  data: string;
  executed: false;
};
// ////////// CONVERTERS ///////////////

export function toDelegate(d: DDelegate): Delegate {
  return { addr: d.addr.toLowerCase(), expires: d.expires.toNumber() };
}

export function toEndowType(type: EndowmentTypeEnum): EndowmentType {
  switch (type) {
    case EndowmentTypeEnum.Charity:
      return "charity";
    case EndowmentTypeEnum.Normal:
      return "normal";
    default:
      return "normal";
  }
}

export function toEndowStatusText(
  status: EndowmentStatus
): EndowmentStatusText {
  switch (status) {
    case EndowmentStatus.Inactive:
      return "inactive";
    case EndowmentStatus.Approved:
      return "approved";
    case EndowmentStatus.Frozen:
      return "frozen";
    case EndowmentStatus.Closed:
      return "closed";
    default:
      return "inactive";
  }
}

export function toBalMap(d: DGenericBalance): GenericBalMap {
  const erc20s = d.Cw20CoinVerified_addr.reduce((prev, curr, i) => {
    return {
      ...prev,
      [curr.toLowerCase()]: d.Cw20CoinVerified_amount[i].toString(),
    };
  }, {});

  return { ...erc20s, native: d.coinNativeAmount.toString() };
}

export function toSplit(
  d: AngelCoreStruct.SplitDetailsStructOutput
): SplitDetails {
  return {
    min: d.min.toNumber(),
    max: d.max.toNumber(),
    defaultSplit: d.defaultSplit.toNumber(),
  };
}
