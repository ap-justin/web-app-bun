import Popup from "@giving/components/Popup";
import { useModalContext } from "@giving/contexts/modal-context";
import { useGetWallet } from "@giving/contexts/wallet-context";
import { getTagPayloads } from "@giving/helpers/admin";
import { useFormContext } from "react-hook-form";
import { CW4Member } from "@giving/types/contracts";
import {
  CW4MemberUpdateMeta,
  MemberUpdatorValues,
} from "@giving/types/pages/admin";
import { useAdminResources } from "pages/Admin/Guard";
import { useGetter } from "store/accessors";
import CW3 from "contracts/CW3";
import CW4 from "contracts/CW4";
import useCosmosTxSender from "hooks/useCosmosTxSender/useCosmosTxSender";

export default function useUpdateMembers() {
  const { trigger, reset, getValues } = useFormContext<MemberUpdatorValues>();
  const { cw3, cw4, propMeta } = useAdminResources();
  const apCW4Members = useGetter((state) => state.admin.apCW4Members);
  const { wallet } = useGetWallet();
  const { showModal } = useModalContext();
  const sendTx = useCosmosTxSender();

  async function updateMembers() {
    const isValid = await trigger(["description", "title"], {
      shouldFocus: true,
    });
    if (!isValid) return;

    //check if there are changes
    type Diffs = [CW4Member[], string[]];
    const [to_add, to_remove]: Diffs = apCW4Members.reduce(
      ([to_add, to_remove]: Diffs, memberCopy) => {
        const member: CW4Member = {
          addr: memberCopy.addr,
          weight: memberCopy.weight,
        };
        if (memberCopy.is_added) {
          to_add.push(member);
        }
        if (memberCopy.is_deleted) {
          to_remove.push(member.addr);
        }
        return [to_add, to_remove];
      },
      [[], []]
    );

    if (to_remove.length <= 0 && to_add.length <= 0) {
      showModal(Popup, { message: "No member changes" });
      return;
    }
    const cw3Contract = new CW3(wallet, cw3);
    const cw4Contract = new CW4(wallet, cw4);
    const embeddedExecuteMsg = cw4Contract.createEmbeddedUpdateMembersMsg(
      to_add,
      to_remove
    );

    //create meta for proposal preview
    const memberUpdateMeta: CW4MemberUpdateMeta = {
      type: "cw4_members",
      data: {
        toAdd: to_add,
        toRemove: to_remove,
      },
    };

    const proposalTitle = getValues("title");
    const proposalDescription = getValues("description");

    const proposalMsg = cw3Contract.createProposalMsg(
      proposalTitle,
      proposalDescription,
      [embeddedExecuteMsg],
      JSON.stringify(memberUpdateMeta)
    );

    await sendTx({
      msgs: [proposalMsg],
      ...propMeta,
      tagPayloads: getTagPayloads(propMeta.willExecute && "cw4_members"),
    });
    reset();
  }

  return { updateMembers, apCW4Members };
}
