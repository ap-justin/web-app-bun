import { useFormContext } from "react-hook-form";
import { VoteValues as VV } from "./types";
import type { Any } from "@keplr-wallet/proto-types/google/protobuf/any";
import { useAdminResources } from "pages/Admin/Guard";
import { invalidateJunoTags } from "services/juno";
import { adminTags } from "services/juno/tags";
import CW3 from "contracts/CW3";
import CW3Review from "contracts/CW3/CW3Review";
import useCosmosTxSender from "hooks/useCosmosTxSender";

export default function useVote() {
  const {
    handleSubmit,
    formState: { isValid },
  } = useFormContext<VV>();
  const { cw3, getWallet } = useAdminResources();
  const { sendTx, isSending } = useCosmosTxSender(true);

  async function vote({ type, proposalId, vote, reason }: VV) {
    const wallet = getWallet();
    if (typeof wallet === "function") return wallet();

    let voteMsg: Any;
    if (type === "application") {
      const contract = new CW3Review(wallet);
      voteMsg = contract.createVoteApplicationMsg({
        proposal_id: proposalId,
        vote: vote,
        reason: (vote === "no" && reason) || undefined,
      });
    } else {
      //normal cw3
      const contract = new CW3(wallet, cw3);
      voteMsg = contract.createVoteMsg(proposalId, vote);
    }

    await sendTx({
      msgs: [voteMsg],
      tagPayloads: [
        invalidateJunoTags([{ type: "admin", id: adminTags.proposals }]),
      ],
    });
  }

  return {
    vote: handleSubmit(vote),
    isSubmitDisabled: !isValid || isSending,
    isSending,
  };
}
