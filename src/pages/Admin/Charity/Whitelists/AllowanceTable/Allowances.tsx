import {
  FieldValues,
  Path,
  useFieldArray,
  useFormContext,
} from "react-hook-form";
import { AllowanceFV } from "./types";
import { useModalContext } from "contexts/ModalContext";
import Icon from "components/Icon";
import Status from "components/Status";
import TableSection, { Cells } from "components/TableSection";
import { isEmpty } from "helpers";
import AllowanceForm from "./AllowanceForm";

type Props<T extends FieldValues, K extends Path<T>> = {
  name: T[K] extends string[] ? K : never;
  title: string;
  memberName: string;
  emptyMsg: string;
  classes?: string;
};

export default function Allowances<T extends FieldValues, K extends Path<T>>({
  name,
  memberName,
  emptyMsg,
  classes = "",
}: Props<T, K>) {
  const { showModal } = useModalContext();
  const { getValues } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: name,
  });

  async function handleAdd(allowance: AllowanceFV) {
    append(allowance as any);
  }
  async function handleRemove(index: number) {
    remove(index);
  }

  return (
    <div className={`${classes} grid content-center`}>
      {isEmpty(fields) ? (
        <Status
          inline
          classes="text-center text-sm text-gray-d1 dark:text-gray border border-prim bg-white dark:bg-blue-d6 p-4 md:p-8 rounded mb-8"
          icon="Info"
          iconOptions={{
            size: 16,
            className: "mr-2 bottom-[2px]",
          }}
        >
          {emptyMsg}
        </Status>
      ) : (
        <table className="table-fixed rounded outline outline-1 outline-prim">
          <TableSection
            type="tbody"
            rowClass="border-b border-prim divide-x divide-prim last:border-none odd:bg-orange-l6 odd:dark:bg-blue-d7"
          >
            {fields.map((field, idx) => (
              <Row
                key={field.id}
                idx={idx}
                onRemove={handleRemove}
                name={name}
              />
            ))}
          </TableSection>
        </table>
      )}
      <button
        type="button"
        onClick={() =>
          showModal(AllowanceForm, {
            onAdd: handleAdd,
            name: memberName,
            added: getValues(name),
          })
        }
        className="btn-outline-filled min-w-[13.43rem] sm:justify-self-center text-sm py-3 gap-3 mb-5"
      >
        <Icon type="Plus" />
        <span>Add {memberName}</span>
      </button>
    </div>
  );
}

type RowProps = {
  name: string;
  idx: number;
  onRemove(idx: number): void;
};

function Row({ idx, onRemove, name }: RowProps) {
  const { getValues } = useFormContext();
  const allowanceAmount = getValues(`${name}.${idx}`);
  console.log(allowanceAmount);
  return (
    <Cells type="td" cellClass="py-3 px-4 text-sm">
      <div className="truncate w-24 sm:w-full">{allowanceAmount}</div>
      <td className="w-16 h-full relative">
        <button
          className="text-center absolute-center"
          type="button"
          onClick={() => onRemove(idx)}
        >
          <Icon
            type="CloseCircle"
            size={22}
            className="text-gray-d1 dark:text-gray"
          />
        </button>
      </td>
    </Cells>
  );
}
