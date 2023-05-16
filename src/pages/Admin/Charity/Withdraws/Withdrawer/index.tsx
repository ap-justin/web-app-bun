import { useEndowBalanceQuery } from "services/juno/custom";
import QueryLoader from "components/QueryLoader";
import { hasElapsed } from "helpers/admin";
import { useAdminResources } from "../../../Guard";
import Tabs from "./Tabs";
import WithdrawForm from "./WithdrawForm";

const container = "dark:bg-blue-d6 border border-prim rounded max-w-lg  p-8";

const _charityEndowmentTabs = { liquid: "endowment", locked: "current" };
const _normalEndowmentTabs = { liquid: "liquid", locked: "locked" };

export default function Withdrawer() {
  const { id, endow_type, maturityTime } = useAdminResources<"charity">();
  const queryState = useEndowBalanceQuery({ id });

  // disable isLockAvailable feature
  // not removing conditions for reference purpose
  const isLockAvailable =
    true ||
    endow_type === "charity" ||
    (endow_type === "normal" && hasElapsed(maturityTime));

  return (
    <QueryLoader
      queryState={queryState}
      messages={{
        loading: "Loading withdraw form...",
        error: "Failed to load withdraw form",
      }}
    >
      {(balances) =>
        isLockAvailable ? (
          <Tabs
            balances={balances}
            classes={container}
            tabLabels={
              endow_type === "charity"
                ? _charityEndowmentTabs
                : _normalEndowmentTabs
            }
          />
        ) : (
          <WithdrawForm
            type="liquid"
            balances={balances["liquid"]}
            classes={container}
          />
        )
      }
    </QueryLoader>
  );
}
