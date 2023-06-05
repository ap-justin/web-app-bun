import { FormProps, FormValues } from "./types";
import { useAdminResources } from "pages/Admin/Guard";
import { createTx, encodeTx } from "contracts/createTx/createTx";
import useTxSender from "hooks/useTxSender";
import { getTagPayloads } from "helpers/admin";

export default function useUpdateMembers(action: FormProps["action"]) {
  const { multisig, getWallet } = useAdminResources();
  const { sendTx, isSending } = useTxSender(true);

  async function updateMembers(fv: FormValues) {
    const wallet = getWallet();
    if (typeof wallet === "function") return wallet();

    const [data, dest, meta] = encodeTx(
      action === "add" ? "multisig.add-owner" : "multisig.remove-owner",
      {
        multisig,
        address: fv.address,
      },
      { action, address: fv.address }
    );

    const tx = createTx(wallet.address, "multisig.submit-transaction", {
      multisig: dest,
      title: fv.title,
      description: fv.description,
      destination: dest,
      value: "0",
      data,
      meta: meta.encoded,
    });

    await sendTx({
      content: { type: "evm", val: tx },
      ...wallet.meta,
      tagPayloads: getTagPayloads(wallet.meta.willExecute && meta.id),
    });
  }

  return { updateMembers, isSending };
}
