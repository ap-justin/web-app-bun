import { TransactionStatus } from "types/lists";

export function Status(props: { status: TransactionStatus }) {
  return (
    <p
      className={`text-xs uppercase px-2 py-1 rounded-sm ${
        statusClasses[props.status]
      }`}
    >
      {props.status}
    </p>
  );
}
export const statusClasses: { [key in TransactionStatus]: string } = {
  executed: "bg-blue",
  pending: "bg-orange",
};
