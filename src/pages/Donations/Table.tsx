import { Link } from "react-router-dom";
import { Donation } from "types/aws";
import CsvExporter from "components/CsvExporter";
import Icon from "components/Icon";
import useKYC from "components/KYC/useKYC";
import TableSection, { Cells } from "components/TableSection";
import { HeaderButton, useSort } from "components/donations";
import { getTxUrl, humanize, maskAddress } from "helpers";
import { appRoutes } from "constants/routes";

export default function Table(props: { donations: Donation[] }) {
  const { handleHeaderClick, sorted, sortDirection, sortKey } = useSort(
    props.donations
  );
  const showKYCForm = useKYC();

  return (
    <table className="w-full text-sm text-gray-d2">
      <TableSection type="thead" rowClass="">
        <Cells
          type="th"
          cellClass="bg-orange-l6 uppercase font-heading font-semibold text-left text-gray-d2 text-sm border border-gray-l2 p-3"
        >
          <HeaderButton
            onClick={handleHeaderClick("charityName")}
            _activeSortKey={sortKey}
            _sortKey="charityName"
            _sortDirection={sortDirection}
          >
            Recipient
          </HeaderButton>
          <HeaderButton
            onClick={handleHeaderClick("date")}
            _activeSortKey={sortKey}
            _sortKey="date"
            _sortDirection={sortDirection}
          >
            Date
          </HeaderButton>
          <HeaderButton
            onClick={handleHeaderClick("chainName")}
            _activeSortKey={sortKey}
            _sortKey="chainName"
            _sortDirection={sortDirection}
          >
            Network
          </HeaderButton>
          <>Currency</>
          <HeaderButton
            onClick={handleHeaderClick("amount")}
            _activeSortKey={sortKey}
            _sortKey="amount"
            _sortDirection={sortDirection}
          >
            Amount
          </HeaderButton>
          <>TX Hash</>
          <span className="flex justify-center">Status</span>
          <CsvExporter
            classes="hover:text-blue flex justify-center"
            headers={csvHeaders}
            data={props.donations}
            filename="donations.csv"
          >
            Receipt
          </CsvExporter>
        </Cells>
      </TableSection>
      <TableSection
        type="tbody"
        rowClass="hover:bg-blue hover:bg-blue/10 border border-gray-l2 even:bg-orange-l6"
      >
        {sorted.map(
          ({
            hash,
            amount,
            symbol,
            chainId,
            date,
            chainName,
            charityName,
            id: charityId,
          }) => (
            <Cells key={hash} type="td" cellClass="p-3 border border-gray-l2">
              <Link
                to={`${appRoutes.profile}/${charityId}`}
                className="flex items-center gap-1 w-40 cursor-pointer text-sm hover:underline"
              >
                <span className="truncate">{charityName}</span>
                <Icon type="ExternalLink" className="w-5 h-5" />
              </Link>
              <>{new Date(date).toLocaleDateString()}</>
              <>{chainName}</>
              <span className="font-mono text-sm">{symbol}</span>
              <>{humanize(amount, 3)}</>
              <a
                href={getTxUrl(chainId, hash)}
                target="_blank"
                rel="noreferrer noopener"
                className="text-center text-angel-blue cursor-pointer uppercase text-sm"
              >
                {maskAddress(hash)}
              </a>
              <button className="block mx-auto bg-green text-white p-1 rounded uppercase text-xs">
                Received
              </button>
              <button
                className="w-full flex justify-center"
                onClick={() =>
                  showKYCForm({
                    type: "post-donation",
                    txHash: hash,
                    classes: "grid gap-5",
                  })
                }
              >
                <Icon type="FatArrowDownload" className="text-2xl" />
              </button>
            </Cells>
          )
        )}
      </TableSection>
    </table>
  );
}
const csvHeaders: { key: keyof Donation; label: string }[] = [
  { key: "amount", label: "Amount" },
  { key: "symbol", label: "Currency" },
  { key: "date", label: "Date" },
  { key: "hash", label: "Transaction Hash" },
];
