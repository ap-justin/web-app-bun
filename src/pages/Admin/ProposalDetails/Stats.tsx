import { useMemo, useState } from "react";
import { ProposalDetails } from "services/types";
import Icon from "components/Icon/Icon";
import { DetailLabel } from "components/admin";
import { roundDownToNum } from "helpers";
import Votes from "./Votes";

export default function Stats({ id, votes, threshold }: ProposalDetails) {
  const [numYes, numNo] = useMemo(
    () =>
      votes.reduce(
        (tally, info) => {
          switch (info.vote) {
            case "yes":
              tally[0]++;
              break;
            case "no":
              tally[1]++;
              break;
          }
          return tally;
        },
        [0, 0, 0, 0]
      ),
    [votes]
  );

  const total = +threshold.absolute_percentage.total_weight;

  const pctYes = getPct(numYes, total);
  const pctNo = getPct(numNo, total);

  const [isVotesShown, setIsVotesShown] = useState(false);
  function toggleVotesTable() {
    setIsVotesShown((prev) => !prev);
  }
  return (
    <div>
      {votes.length > 0 && (
        <>
          <DetailLabel classes="justify-between">
            <span className="flex items-center">
              <button
                onClick={toggleVotesTable}
                className={`text-3xs mr-2 p-1 rounded-sm transition transform border border-prim`}
              >
                <Icon
                  type={isVotesShown ? "Dash" : "Plus"}
                  className="w-6 h-6 "
                />
              </button>
              Votes
            </span>
            <span>
              Total: Yes: {numYes}{" "}
              <span className="font-thin">({pctYes}%)</span> No: {numNo}{" "}
              <span className="font-thin">({pctNo}%)</span>
            </span>
          </DetailLabel>
          {isVotesShown && <Votes proposalId={id} classes="mt-4" />}
        </>
      )}
    </div>
  );
}

function getPct(numerator: number, denominator: number) {
  return roundDownToNum((numerator / denominator) * 100);
}
