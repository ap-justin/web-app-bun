import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { number, object } from "yup";
import Modal from "components/Modal";
import { Field } from "components/form";
import { createTx, encodeTx } from "contracts/createTx/createTx";
import useTxSender from "hooks/useTxSender";
import { fromHours, getTagPayloads } from "helpers/admin";
import { isTooltip, useAdminContext } from "../../Context";

export type Props = {
  initial: string;
};

type FV = { duration: number };

export default function DurationForm({ initial }: Props) {
  const { txResource, multisig } = useAdminContext();
  const { isSending, sendTx } = useTxSender(true);
  const methods = useForm<FV>({
    defaultValues: { duration: +initial },
    resolver: yupResolver(
      object({
        duration: number()
          .required("required")
          .typeError("invalid number")
          .positive("must be greater than 0"),
      })
    ),
  });
  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;

  const submit: SubmitHandler<FV> = async (fv) => {
    if (isTooltip(txResource)) throw new Error(txResource);

    const { wallet, txMeta } = txResource;

    const [data, dest, meta] = encodeTx(
      "multisig.change-duration",
      {
        multisig,
        duration: fromHours(fv.duration),
      },
      {
        title: `change duration by member:${wallet.address}`,
        description: `proposer: ${wallet.address}`,
        content: { curr: initial, new: fv.duration.toString() },
      }
    );

    const tx = createTx(wallet.address, "multisig.submit-transaction", {
      multisig: dest,
      destination: dest,
      value: "0",
      data,
      meta: meta.encoded,
    });

    await sendTx({
      content: { type: "evm", val: tx },
      ...txMeta,
      tagPayloads: getTagPayloads(txMeta.willExecute && meta.id),
    });
  };

  return (
    <Modal
      onSubmit={handleSubmit(submit)}
      as="form"
      className="p-6 fixed-center z-10 grid gap-4 text-gray-d2 dark:text-white bg-white dark:bg-blue-d4 sm:w-full w-[90vw] sm:max-w-lg rounded overflow-hidden"
    >
      <FormProvider {...methods}>
        <Field<FV, "number">
          type="number"
          name="duration"
          label="Duration (hours)"
          classes={{ container: "mt-8 mb-4" }}
          required
        />
      </FormProvider>
      <button
        type="submit"
        className="btn btn-orange mt-6"
        disabled={!isDirty || isSending}
      >
        {isSending ? "Submitting.." : "Submit"}
      </button>
    </Modal>
  );
}
