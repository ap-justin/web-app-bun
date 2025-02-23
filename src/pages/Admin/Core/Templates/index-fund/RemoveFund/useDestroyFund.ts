import { useFormContext } from "react-hook-form";
import { FormValues as FV } from "./types";
import { ID } from "types/tx";
import { queryContract } from "services/juno/queryContract";
import { useModalContext } from "contexts/ModalContext";
import { TxPrompt } from "components/Prompt";
import { createTx, encodeTx } from "contracts/createTx/createTx";
import useTxSender from "hooks/useTxSender";
import { hasElapsed } from "helpers/admin";
import { isTooltip, useAdminContext } from "../../../../Context";

export default function useDestroyFund() {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext<FV>();
  const sendTx = useTxSender();
  const { showModal } = useModalContext();
  const { multisig, txResource } = useAdminContext();

  async function destroyFund(fv: FV) {
    try {
      const fund = await queryContract("index-fund.fund", { id: +fv.fundId });
      if (fund.expiryTime !== 0 && hasElapsed(fund.expiryTime)) {
        return showModal(TxPrompt, { error: "Fund is already closed" });
      }
    } catch (err) {
      return showModal(TxPrompt, { error: "Fund not found" });
    }

    if (isTooltip(txResource)) throw new Error(txResource);

    const id: ID = { id: +fv.fundId };
    const [data, dest, meta] = encodeTx("index-fund.remove-fund", id, {
      title: fv.title,
      description: fv.description,
      content: id,
    });

    const { wallet, txMeta } = txResource;
    await sendTx({
      content: {
        type: "evm",
        val: createTx(wallet.address, "multisig.submit-transaction", {
          multisig,

          destination: dest,
          value: "0",
          data,
          meta: meta.encoded,
        }),
      },
      ...txMeta,
    });
  }

  return {
    destroyFund: handleSubmit(destroyFund),
    isSubmitDisabled: isSubmitting,
    tooltip: isTooltip(txResource) ? txResource : undefined,
  };
}
