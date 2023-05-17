import { useFormContext } from "react-hook-form";
import { FormValues as FV } from "./types";
import { useAdminResources } from "pages/Admin/Guard";
import { useModalContext } from "contexts/ModalContext";
import Prompt from "components/Prompt";
import { createTx, encodeTx } from "contracts/createTx/createTx";
import useTxSender from "hooks/useTxSender";
import { getPayloadDiff } from "helpers/admin";

type Key = keyof FV;
type Value = FV[Key];

export default function useConfigureRegistrar() {
  const { multisig, propMeta, getWallet } = useAdminResources();
  const {
    handleSubmit,
    formState: { isDirty, isSubmitting },
  } = useFormContext<FV>();
  const { showModal } = useModalContext();
  const sendTx = useTxSender();

  async function configureRegistrar({
    title,
    description,
    initial,
    ...fv //registrarConfig
  }: FV) {
    //check for changes
    const diff = getPayloadDiff(initial, fv);
    const diffEntries = Object.entries(diff) as [Key, Value][];
    if (diffEntries.length === 0) {
      return showModal(Prompt, {
        type: "error",
        title: "Update Registrar",
        headline: "No Changes Detected",
        children: "Nothing to submit, no changes detected",
      });
    }

    const wallet = getWallet();
    if (typeof wallet === "function") return wallet();

    const [data, dest] = encodeTx("registrar.update-config", {
      ...initial,
      ...fv,
    });

    await sendTx({
      content: {
        type: "evm",
        val: createTx(wallet.address, "multisig.submit-transaction", {
          multisig,
          title,
          description,
          destination: dest,
          value: "0",
          data,
        }),
      },
      ...propMeta,
    });
  }

  return {
    configureRegistrar: handleSubmit(configureRegistrar),
    isSubmitDisabled: !isDirty || isSubmitting,
  };
}
