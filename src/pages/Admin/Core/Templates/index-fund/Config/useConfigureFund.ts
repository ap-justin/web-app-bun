import { useFormContext } from "react-hook-form";
import { FormValues } from "./types";
import { useModalContext } from "contexts/ModalContext";
import Prompt from "components/Prompt";
import { createTx, encodeTx } from "contracts/createTx/createTx";
import useTxSender from "hooks/useTxSender";
import { isEmpty } from "helpers";
import { getPayloadDiff, getTagPayloads } from "helpers/admin";
import { useAdminContext } from "../../../../Context";

export default function useConfigureFund() {
  const { multisig, wallet, _tx } = useAdminContext();
  const {
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid },
  } = useFormContext<FormValues>();
  const { showModal } = useModalContext();
  const sendTx = useTxSender();

  async function configureFund({
    title,
    description,
    initial,
    ...data
  }: FormValues) {
    //check for changes
    const diffs = getPayloadDiff(initial, data);

    if (isEmpty(diffs)) {
      return showModal(Prompt, {
        type: "error",
        title: "Update Fund",
        headline: "No Changes Detected",
        children: "Nothing to submit, no changes detected",
      });
    }

    const [configData, dest, meta] = encodeTx("index-fund.config", data, diffs);

    const tx = createTx(wallet.address, "multisig.submit-transaction", {
      multisig,
      title,
      description,
      destination: dest,
      value: "0",
      data: configData,
      meta: meta.encoded,
    });

    await sendTx({
      content: { type: "evm", val: tx },
      ..._tx,
      tagPayloads: getTagPayloads(_tx.willExecute && meta.id),
    });
  }

  return {
    configureFund: handleSubmit(configureFund),
    isSubmitDisabled: isSubmitting || !isValid || !isDirty,
  };
}
