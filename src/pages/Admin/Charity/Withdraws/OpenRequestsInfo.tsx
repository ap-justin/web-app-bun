import { Link } from "react-router-dom";
import { TransactionStatus } from "types/lists";
import { useWithdrawLogsQuery } from "services/apes";
import Icon from "components/Icon";
import QueryLoader from "components/QueryLoader";
import { adminRoutes } from "constants/routes";
import { useAdminContext } from "../../Context";

const proposal_status: TransactionStatus = "open";

export default function OpenRequestsInfo() {
  const { multisig } = useAdminContext();
  const queryState = useWithdrawLogsQuery({
    cw3: multisig,
    sort: "default",
    proposal_status,
  });
  return (
    <QueryLoader
      queryState={{ ...queryState, data: queryState.data?.Items }}
      messages={{
        empty: <></>,
        error: <></>,
        loading: <></>,
      }}
    >
      {() => (
        <div className="flex justify-center items-center gap-3 py-2 px-4 w-full dark:bg-blue-d6 border border-prim rounded">
          <Icon type="Info" className="w-6 h-6 shrink-0" />
          <span className="text-sm">
            There are open requests that need your attention.{" "}
            <Link
              to={`../${adminRoutes.proposals}`}
              className="text-orange hover:text-orange-l2 active:text-orange-d1 underline"
            >
              Check them out now
            </Link>
          </span>
        </div>
      )}
    </QueryLoader>
  );
}
