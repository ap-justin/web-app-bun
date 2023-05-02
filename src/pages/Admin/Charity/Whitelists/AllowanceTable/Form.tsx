import { FV } from "./types";
import Allowances from "./Allowances";

export default function AllowancesForm(props: any) {
  return (
    <form {...props} className={`m-8`}>
      <Allowances<FV, "allowances">
        memberName="allowance"
        name="allowances"
        title="Allowances"
        emptyMsg="This member has no allowances."
        classes="mb-8"
      />
      <div className={`grid grid-cols-2 sm:flex gap-2 m-2`}>
        <button type="reset" className="text-sm px-8 btn-outline-filled">
          Cancel
        </button>
        <button type="submit" className="text-sm px-8 btn-orange">
          Submit Changes
        </button>
      </div>
    </form>
  );
}
