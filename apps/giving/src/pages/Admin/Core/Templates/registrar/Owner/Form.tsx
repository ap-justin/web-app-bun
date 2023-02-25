import { FormContainer, Submitter } from "@giving/components/admin";
import { Field } from "@giving/components/form";
import { RegistrarOwnerValues as RV } from "@giving/types/pages/admin";
import useUpdateOwner from "./useUpdateOwner";

export default function Form() {
  const { updateOwner, isSubmitDisabled } = useUpdateOwner();
  return (
    <FormContainer onSubmit={updateOwner}>
      <Field<RV>
        classes="field-admin"
        label="Proposal title"
        name="title"
        required
      />
      <Field<RV, "textarea">
        type="textarea"
        classes="field-admin"
        label="Proposal description"
        name="description"
        required
      />
      <Field<RV>
        classes="field-admin"
        label="Current owner"
        name="initialOwner"
        disabled
      />
      <Field<RV>
        classes="field-admin"
        label="New owner"
        name="new_owner"
        required
      />
      <Submitter type="submit" _classes="mt-4" disabled={isSubmitDisabled}>
        Submit
      </Submitter>
    </FormContainer>
  );
}
