import { useFormContext } from "react-hook-form";
import { SimulContractTx } from "types/evm";
import { useAdminResources } from "pages/Admin/Guard";
import { useErrorContext } from "contexts/ErrorContext";
import { useGetWallet } from "contexts/WalletContext";
import { createTx, encodeTx } from "contracts/createTx/createTx";
import useTxSender from "hooks/useTxSender";
import { isEmpty } from "helpers";
import { getPayloadDiff, getTagPayloads } from "helpers/admin";
import { UnexpectedStateError } from "errors/errors";
import createUpdateEndowmentControllerMsg from "./createUpdateEndowmentControllerMsg";
import { FormValues } from "./schema";
import useUserAuthorization from "./useUserAuthorization";

export default function useSubmit() {
  const {
    id,
    multisig,
    propMeta,
    settingsController: settings,
  } = useAdminResources<"charity">();
  const { handleError } = useErrorContext();
  const {
    formState: { isSubmitting, errors },
    handleSubmit,
    reset,
  } = useFormContext<FormValues>();
  const { wallet } = useGetWallet();
  const sendTx = useTxSender();
  const { isUserOwner, userDelegated } = useUserAuthorization();

  async function onSubmit({
    initialValues,
    endowment_controller,
    ...newValues
  }: FormValues) {
    try {
      if (!endowment_controller.modifiableAfterInit) {
        throw new UnexpectedStateError(
          "Submitting unmodifiable controller changes"
        );
      }

      const diff = getPayloadDiff(initialValues, newValues);

      if (isEmpty(Object.entries(diff))) {
        return handleError("No changes detected");
      }

      if (!wallet) {
        return alert("wallet not connected");
      }

      const args = createUpdateEndowmentControllerMsg(id, diff, settings);

      let tx: SimulContractTx;

      // Unauthorized & non-delegated users wouldn't even be able to submit,
      // making it safe to assume they are either of those
      //
      // Users who are delegates for the whole controller can send direct update msg,
      // thus bypassing the need to create a proposal (even if they are a member of CW3 owners)
      if (userDelegated) {
        tx = createTx(wallet.address, "accounts.update-controller", args);
      } else {
        const [data, dest] = encodeTx("accounts.update-controller", args);
        tx = createTx(wallet.address, "multisig.submit-transaction", {
          multisig,
          title: `Update permission settings`,
          description: `Update permission settings for endowment id:${id} by member:${wallet?.address}`,
          destination: dest,
          value: "0",
          data,
        });
      }

      await sendTx({
        content: { type: "evm", val: tx },
        ...propMeta,
        isAuthorized: userDelegated || isUserOwner,
        tagPayloads: getTagPayloads(propMeta.willExecute && "endow_controller"),
      });
    } catch (error) {
      handleError(error);
    }
  }

  return {
    errors,
    isSubmitting,
    reset: () => reset(),
    submit: handleSubmit(onSubmit),
  };
}
