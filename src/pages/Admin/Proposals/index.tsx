import { useState } from "react";
import { Expiration, Proposal } from "types/contracts";
import Icon, { DrawerIcon } from "components/Icon";
import TableSection, { Cells } from "components/TableSection";
import { Status } from "components/admin";
import { useGetter } from "store/accessors";
import ProposalDetails from "../ProposalDetails";
import Toolbar from "./Toolbar";
import {
  NUM_PROPOSALS_PER_PAGE,
  useFilteredProposals,
} from "./useFilteredProposals";

export default function Proposals() {
  const [pageNum, setPageNum] = useState(1);

  const { activeGroup, activeStatus } = useGetter(
    (state) => state.admin.proposals
  );
  const { filteredProposals, isFilteredProposalsLoading } =
    useFilteredProposals(activeGroup, activeStatus, pageNum);

  function loadMoreProposals() {
    //no way to know when to stop
    //based on id: existing doesn't start in 1
    //based on max length, would need to query all to know how large the set is
    setPageNum((prev) => prev + 1);
  }

  const isLoadMoreShown =
    //don't show load more if num proposals doesn't even reach min
    filteredProposals.length >= NUM_PROPOSALS_PER_PAGE &&
    activeStatus === "all" &&
    activeGroup === "all";

  return (
    <div className="grid content-start rounded font-work">
      <Toolbar classes="mb-6" />

      {(filteredProposals.length > 0 && (
        <table className="table-fixed">
          <TableSection
            rowClass="bg-orange-l6 dark:bg-blue-d6 hover:bg-orange-l5 hover:dark:bg-blue-d7"
            type="thead"
          >
            <Cells
              type="th"
              cellClass="p-4 text-xs text-left border border-prim uppercase font-heading"
            >
              <span />
              <>status</>
              <>request</>
              <>ends</>
              <>votes</>
              <>actions</>
            </Cells>
          </TableSection>
          <tbody>
            {filteredProposals.map((proposal) => (
              <Row proposal={proposal} />
            ))}
          </tbody>
          {isLoadMoreShown && (
            <tr>
              <td
                colSpan={6}
                className="p-4 text-xs text-center border border-prim font-heading"
              >
                <button
                  disabled={isFilteredProposalsLoading}
                  className="text-center text-xs disabled:bg-gray uppecase font-heading uppercase rounded-sm font-bold"
                  onClick={loadMoreProposals}
                >
                  {isFilteredProposalsLoading ? (
                    <Icon type="Loading" className="animate-spin" size={18} />
                  ) : (
                    "Load More Decisions"
                  )}
                </button>
              </td>
            </tr>
          )}
        </table>
      )) || (
        <p className="place-self-start">
          {isFilteredProposalsLoading
            ? "loading proposals.."
            : "no proposals found"}
        </p>
      )}
    </div>
  );
}

function Row({ proposal }: { proposal: Proposal }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr className="border border-prim divide-x divide-prim odd:bg-orange-l6 odd:dark:bg-blue-d7">
        <Cells
          key={proposal.id}
          type="td"
          cellClass="first:w-12 [&:nth-child(2)]:w-28 last:w-24 [&:nth-child(5)]:w-24 [&:nth-child(4)]:w-24 p-4 text-xs text-left border border-prim font-heading"
        >
          <DrawerIcon
            isOpen={open}
            onClick={() => setOpen(!open)}
            size={25}
            className="mx-0 dark:text-gray shrink-0"
          />
          <Status status={proposal.status} />
          <>{proposal.title}</>
          <Expiry {...proposal.expires} />
          <>need to query</>
          <span className="flex justify-between">
            <Icon type="CheckCircle" className="text-2xl text-green" />
            <Icon type="CloseCircle" className="text-2xl text-red" />
          </span>
        </Cells>
      </tr>
      {open ? <ProposalDetails id={proposal.id} /> : null}
    </>
  );
}

function Expiry(props: Expiration) {
  const isTime = "at_time" in props;
  return (
    <div className="flex gap-1 items-baseline mt-2 justify-self-end">
      {isTime ? (
        <span className="text-sm">
          {new Date(props.at_time / 1e6).toLocaleString("en", {
            dateStyle: "short",
          })}
        </span>
      ) : (
        <>
          <span className="text-sm">{props.at_height.toLocaleString()}</span>
          <Icon type="Blockchain" className="relative top-0.5" />
        </>
      )}
    </div>
  );
}
