import { Link } from "react-router-dom";
import { Transaction } from "types/contracts/multisig";
import TableSection, { Cells } from "components/TableSection";
import { adminRoutes } from "constants/routes";

type Props = {
  proposals: Transaction[];
  classes?: string;
  more?: (() => void) | "loading";
};
export default function Table({ proposals, classes = "", more }: Props) {
  return (
    <table
      className={
        classes + " outline rounded outline-gray-l3 dark:outline-bluegray"
      }
    >
      <TableSection
        rowClass="border-b border-prim divide-x divide-prim"
        type="thead"
      >
        <Cells
          type="th"
          cellClass="py-3 uppercase text-left font-heading text-xs"
        >
          <th className="w-28 text-center">Status</th>
          <span className="pl-4">Request</span>
        </Cells>
      </TableSection>
      <TableSection
        rowClass="last:border-none border-b border-prim divide-x divide-prim hover:bg-orange-l5 hover:dark:bg-bluegray"
        type="tbody"
      >
        {proposals
          .map(({ title, status, id }) => (
            <Cells type="td" cellClass="py-3 px-4" key={id}>
              <td className="uppercase text-xs font-semibold text-center">
                <span
                  className={`px-2 py-1 text-white ${
                    status === "approved"
                      ? "bg-green"
                      : "bg-gray-d1 dark:bg-gray"
                  } rounded`}
                >
                  {status}
                </span>
              </td>
              <Link
                to={`../${adminRoutes.proposal}/${id}`}
                className="text-sm hover:text-blue dark:text-blue-l2 block max-w-[11.5rem] @xl:max-w-lg overflow-hidden text-ellipsis"
              >
                {title}
              </Link>
            </Cells>
          ))
          .concat(
            more ? (
              <td
                colSpan={9}
                key="load-more-btn"
                className="border-t border-prim rounded-b h-12 text-center"
              >
                {more === "loading" ? (
                  <span className="text-gray-d1 dark:text-gray">
                    loading...
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={more}
                    className="grid place-items-center uppercase text-sm font-bold rounded-b w-full h-full  hover:bg-orange-l5 dark:hover:bg-blue-d3 active:bg-orange-l4 dark:active:bg-blue-d2 disabled:bg-gray-l3 disabled:text-gray aria-disabled:bg-gray-l3 aria-disabled:dark:bg-bluegray disabled:dark:bg-bluegray"
                  >
                    Load more decisions
                  </button>
                )}
              </td>
            ) : (
              []
            )
          )}
      </TableSection>
    </table>
  );
}
