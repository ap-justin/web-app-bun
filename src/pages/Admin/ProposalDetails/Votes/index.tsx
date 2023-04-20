import { useState } from "react";
import Icon from "components/Icon";
import TableSection, { Cells } from "components/TableSection";
import { VOTES_PER_PAGE, useVoteList } from "./useVotesList";

export default function Votes(props: { proposalId: number; classes?: string }) {
  const [pageNum, setPageNum] = useState(0);
  const { votes, isVoteListLoading } = useVoteList(props.proposalId, pageNum);

  const loadMoreVotes = () => setPageNum(pageNum + 1);
  const isLoadMoreShown = votes.length >= VOTES_PER_PAGE;

  return (
    <>
      <table className="w-full table-auto">
        <TableSection rowClass="bg-orange-l6 dark:bg-bluegray-d1" type="thead">
          <Cells
            type="th"
            cellClass="p-4 text-xs text-left border border-prim uppercase font-heading"
          >
            <>Addresses</>
            <>Vote</>
          </Cells>
        </TableSection>
        <TableSection type="tbody" rowClass="bg-orange-l6 dark:bg-blue-d6">
          {votes.map((vote, i) => (
            <Cells
              type="td"
              cellClass="p-4 text-xs text-left border border-prim"
              key={i}
            >
              <p className="pl-2">{vote.voter}</p>
              <p
                className={`pl-2 ${
                  vote.vote === "yes" ? "text-green-l1" : "text-red"
                } capitalize`}
              >
                {vote.vote}
              </p>
            </Cells>
          ))}
        </TableSection>
      </table>
      {isLoadMoreShown && (
        <button
          disabled={isVoteListLoading}
          className="mt-3 px-3 py-1 justify-self-center text-white/80 text-xs bg-blue/80 disabled:bg-gray uppecase font-heading uppercase rounded-sm"
          onClick={loadMoreVotes}
        >
          {isVoteListLoading ? (
            <Icon type="Loading" className="animate-spin" size={18} />
          ) : (
            "more"
          )}
        </button>
      )}
    </>
  );
}
