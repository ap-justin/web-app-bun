import { useEffect } from "react";
import { ErrorStage } from "slices/transaction/types";
import { useErrorContext } from "contexts/ErrorContext";
import { useModalContext } from "contexts/ModalContext";
import ExtLink from "components/ExtLink";
import Icon from "components/Icon";
import { useSetter } from "store/accessors";
import { setStage } from "slices/transaction/transaction";
import { getTxUrl } from "helpers";

export default function ErrPop(props: ErrorStage) {
  const dispatch = useSetter();
  const { closeModal } = useModalContext();
  const { message, tx } = props;
  const { handleError } = useErrorContext();

  useEffect(() => {
    if (props.step !== "error") {
      handleError("wrong component rendered");
    }
  }, [props.step, handleError]);

  function acknowledge() {
    dispatch(setStage({ step: "initial" }));
    closeModal();
  }

  if (props.step !== "error") {
    return null;
  }

  return (
    <div className="bg-white grid p-4 rounded-md w-full shadow-lg min-h-[15rem] content-center place-items-center">
      <Icon type="Info" className="text-angel-grey text-2xl mb-2" />
      <p className="text-center text-gray-d2 mb-2 ">{message}</p>
      {tx && (
        <ExtLink
          href={getTxUrl(tx.chainID, tx.hash)}
          className="text-center text-red-l1 cursor-pointer mb-6 text-sm"
        >
          view transaction details
        </ExtLink>
      )}
      <button
        onClick={acknowledge}
        className="bg-orange text-white rounded-md uppercase py-1 px-4 mt-4"
      >
        ok
      </button>
    </div>
  );
}
