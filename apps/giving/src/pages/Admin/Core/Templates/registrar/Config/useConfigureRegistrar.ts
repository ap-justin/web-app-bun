import Prompt from "@giving/components/prompt";
import { useModalContext } from "@giving/contexts/modal-context";
import { useGetWallet } from "@giving/contexts/wallet-context";
import CW3 from "@giving/contracts/CW3";
import Registrar from "@giving/contracts/Registrar";
import { genDiffMeta, getPayloadDiff } from "@giving/helpers/admin";
import { cleanObject } from "@giving/helpers/cleanObject";
import useCosmosTxSender from "@giving/hooks/useCosmosTxSender/useCosmosTxSender";
import { useFormContext } from "react-hook-form";
import { RegistrarConfigPayload } from "@giving/types/contracts";
import {
  RegistrarConfigUpdateMeta,
  RegistrarConfigValues,
} from "@giving/types/pages/admin";
import { useAdminResources } from "pages/Admin/Guard";

type Key = keyof RegistrarConfigPayload;
type Value = RegistrarConfigPayload[Key];
export default function useConfigureRegistrar() {
  const { cw3, propMeta } = useAdminResources();
  const { wallet } = useGetWallet();
  const {
    handleSubmit,
    formState: { isDirty, isSubmitting },
  } = useFormContext<RegistrarConfigValues>();
  const { showModal } = useModalContext();
  const sendTx = useCosmosTxSender();

  async function configureRegistrar({
    title,
    description,
    initialConfigPayload,
    ...data //registrarConfig
  }: RegistrarConfigValues) {
    //check for changes
    const diff = getPayloadDiff(initialConfigPayload, data);
    const diffEntries = Object.entries(diff) as [Key, Value][];
    if (diffEntries.length <= 0) {
      showModal(Prompt, { children: "no changes detected" });
      return;
    }
    //convert presentational decimal to floating point string
    const finalPayload: RegistrarConfigPayload = {
      ...diff,
      tax_rate: diff.tax_rate && `${+diff.tax_rate / 100}`,
      split_default: diff.split_default && `${+diff.split_default / 100}`,
      split_max: diff.split_max && `${+diff.split_max / 100}`,
      split_min: diff.split_min && `${+diff.split_min / 100}`,
    };

    const registrarContract = new Registrar(wallet);
    const configUpdateMsg = registrarContract.createEmbeddedConfigUpdateMsg(
      cleanObject(finalPayload)
    );

    const configUpdateMeta: RegistrarConfigUpdateMeta = {
      type: "reg_config",
      data: genDiffMeta(diffEntries, initialConfigPayload),
    };

    const adminContract = new CW3(wallet, cw3);
    const proposalMsg = adminContract.createProposalMsg(
      title,
      description,
      [configUpdateMsg],
      JSON.stringify(configUpdateMeta)
    );

    await sendTx({
      msgs: [proposalMsg],
      ...propMeta,
    });
  }

  return {
    configureRegistrar: handleSubmit(configureRegistrar),
    isSubmitDisabled: !isDirty || isSubmitting,
  };
}
