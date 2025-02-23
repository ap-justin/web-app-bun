import { SubmitHandler, useFormContext } from "react-hook-form";
import { FV } from "./types";
import { ProfileUpdateMsg } from "services/types";
import { Program } from "types/aws";
import { useModalContext } from "contexts/ModalContext";
import { ImgLink } from "components/ImgEditor";
import { TxPrompt } from "components/Prompt";
import { isEmpty } from "helpers";
import { getPayloadDiff } from "helpers/admin";
import { getFullURL, uploadFiles } from "helpers/uploadFiles";
import { useAdminContext } from "../../Context";
import useUpdateEndowmentProfile from "../common/useUpdateEndowmentProfile";
import { ops } from "./ops";

export default function useSubmit() {
  const { id, owner } = useAdminContext<"charity">(ops);
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
    getValues,
  } = useFormContext<FV>();

  const { showModal } = useModalContext();
  const updateProfile = useUpdateEndowmentProfile();

  const submit: SubmitHandler<FV> = async ({ initial, ...fv }) => {
    try {
      const [imageURL, ...milestoneMediaURLs] = await uploadImgs(
        [fv.image, ...fv.milestones.map((m) => m.milestone_media)],
        () => {
          showModal(
            TxPrompt,
            { loading: "Uploading images.." },
            { isDismissible: false }
          );
        }
      );

      //having initial value means form is for editing

      const program: Program = {
        program_title: fv.title,
        program_id: initial ? initial.program_id : window.crypto.randomUUID(),
        program_description: fv.description,
        program_banner: imageURL,
        program_milestones: fv.milestones.map(({ idx, ...m }, i) => ({
          ...m,
          milestone_date: new Date(m.milestone_date).toISOString(),
          milestone_media: milestoneMediaURLs[i],
        })),
      };

      if (initial) {
        const diff = getPayloadDiff(initial, program);
        if (isEmpty(diff)) {
          return showModal(TxPrompt, { error: "No changes detected" });
        }
      }

      const updates: ProfileUpdateMsg = {
        id,
        owner,
        program: [program],
      };
      await updateProfile(updates);
      if (!initial) reset(); //for new program, reset form after submit
    } catch (err) {
      console.log(err);
      showModal(TxPrompt, {
        error: err instanceof Error ? err.message : "Unknown error occured",
      });
    }
  };

  return {
    reset,
    submit: handleSubmit(submit),
    isSubmitting,
    id,
    initial: getValues("initial"),
  };
}

async function uploadImgs(
  imgs: ImgLink[],
  onUpload: () => void
): Promise<string[]> {
  const files = imgs.flatMap((img) => (img.file ? [img.file] : []));
  if (!isEmpty(files)) onUpload();
  const baseURL = await uploadFiles(files, "endow-profiles");
  return imgs.map((img) =>
    img.file && baseURL ? getFullURL(baseURL, img.file.name) : img.publicUrl
  );
}
