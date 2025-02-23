import { PAYMENT_WORDS, titleCase } from "constants/common";
import { adminRoutes } from "constants/routes";
import DonationsTable from "./DonationsTable";
import Seo from "./Seo";

export default function Contributions() {
  return (
    <div>
      <Seo title="Contributions" url={adminRoutes.contributions} />

      <h2 className="text-[2rem] font-bold mb-10">
        {titleCase(PAYMENT_WORDS.noun.plural)}
      </h2>
      <DonationsTable />
    </div>
  );
}
