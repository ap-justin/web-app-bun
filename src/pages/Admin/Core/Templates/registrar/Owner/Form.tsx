import { FormValues as FV } from "./types";
import { Field } from "components/form";
import { FormContainer, Submitter } from "../../../../components";
import useUpdateOwner from "./useUpdateOwner";

export default function Form() {
  const { updateOwner, isSubmitDisabled } = useUpdateOwner();
  return (
    <FormContainer onSubmit={updateOwner}>
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
      <Field<FV>
        classes="field-admin"
        label="Current owner"
        name="initialOwner"
        disabled
      />
      <Field<FV>
        classes="field-admin"
        label="New owner"
        name="newOwner"
        required
      />
      <Submitter type="submit" _classes="mt-4" disabled={isSubmitDisabled}>
        Submit
      </Submitter>
    </FormContainer>
  );
}
