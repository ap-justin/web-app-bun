import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ObjectSchema, number, object } from "yup";
import { ProposalBase } from "../../types";
import { SchemaShape } from "schemas/types";
import Modal from "components/Modal";
import { Field } from "components/form";
import { createTx, encodeTx } from "contracts/createTx/createTx";
import useTxSender from "hooks/useTxSender";
import { getTagPayloads } from "helpers/admin";
import { isTooltip, useAdminContext } from "../../Context";
import { proposalShape } from "../../constants";

export type Props = {
  initial: number;
  added: string[];
};

type FV = ProposalBase & { threshold: number };

export default function ThresholdForm({ added, initial }: Props) {
  const { sendTx, isSending } = useTxSender(true);
  const { txResource, multisig } = useAdminContext();

  const schema = object<any, SchemaShape<FV>>({
    ...proposalShape,
    threshold: number()
      .typeError("required")
      .integer("no decimals")
      .min(1, "at least 1")
      //if no members set, default to 1
      .max(added.length || 1, "can't be more than number of members")
      .test("new value", `should be new`, (val) => val !== initial),
  }) as ObjectSchema<FV>;

  const methods = useForm<FV>({
    defaultValues: { threshold: initial },
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = methods;

  const submit: SubmitHandler<FV> = async (fv) => {
    if (isTooltip(txResource)) throw Error(txResource);

    const [data, dest, meta] = encodeTx(
      "multisig.change-threshold",
      {
        multisig,
        threshold: fv.threshold,
      },
      {
        title: fv.title,
        description: fv.description,
        content: { curr: initial, new: fv.threshold },
      }
    );

    const { wallet, txMeta } = txResource;
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
        <Field<FV>
          classes="field-admin"
          label="Proposal title"
          name="title"
          required
        />
        <Field<FV, "textarea">
          type="textarea"
          classes="field-admin"
          label="Proposal description"
          name="description"
          required
        />
        <Field<FV, "number">
          type="number"
          step={1}
          name="threshold"
          label="Number of signatures to pass"
          classes="field-admin"
          required
        />
      </FormProvider>
      <button
        type="submit"
        className="btn btn-orange mt-6"
        disabled={isSending}
      >
        {isSending ? "Submitting.." : "Submit"}
      </button>
    </Modal>
  );
}
