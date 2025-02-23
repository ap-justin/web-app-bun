import { FormValues as FV } from "./types";
import { FormContainer, Submitter, Tooltip } from "components/admin";
import { Field } from "components/form";
import useConfigureFund from "./useConfigureFund";

export default function Form() {
  const { configureFund, isSubmitDisabled, tooltip } = useConfigureFund();
  return (
    <FormContainer onSubmit={configureFund} aria-disabled={!!tooltip}>
      {tooltip && <Tooltip tooltip={tooltip} />}
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
      <Field<FV, "number">
        type="number"
        classes="field-admin"
        label="Funding goal ($)"
        name="fundingGoal"
        placeholder="$10,000"
      />
      <Field<FV, "number">
        type="number"
        classes="field-admin"
        label="Fund rotation"
        name="fundRotation"
      />

      <Submitter type="submit" _classes="mt-4" disabled={isSubmitDisabled}>
        Submit
      </Submitter>
    </FormContainer>
  );
}
