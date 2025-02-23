import { useFormContext } from "react-hook-form";
import { FormValues as FV } from "./types";
import { DivContainer, Submitter, Tooltip } from "components/admin";
import { CheckField, Field, Label } from "components/form";
import { INIT_SPLIT } from ".";
import MemberAdder from "./MemberAdder";
import useCreateFund from "./useCreateFund";

export default function Form() {
  const { createFund, tooltip } = useCreateFund();
  return (
    <DivContainer disabled={!!tooltip}>
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
      <Field<FV> classes="field-admin" label="Fund name" name="name" required />
      <Field<FV, "textarea">
        type="textarea"
        classes="field-admin"
        label="Fund description"
        name="about"
        required
      />
      <Field<FV>
        classes="field-admin"
        label="Expiry height"
        name="expiryHeight"
        placeholder="700992312"
      />
      <Field<FV, "datetime-local">
        classes="field-admin date-input"
        type="datetime-local"
        label="Expiry time"
        name="expiryTime"
      />
      <Slider />
      <CheckField<FV>
        name="rotatingFund"
        classes="p-3 text-sm rounded bg-gray-l6 dark:bg-blue-d5 border border-prim"
      >
        Included on fund rotation
      </CheckField>
      <Label className="text-green-l1 -mb-4">Add members</Label>
      <MemberAdder />

      <Submitter type="button" onClick={createFund} _classes="mt-4">
        Submit
      </Submitter>
    </DivContainer>
  );
}

function Slider() {
  const { register, watch, setValue } = useFormContext<FV>();
  const splitToLiq = watch("splitToLiquid");

  function unspecifySplit() {
    setValue("splitToLiquid", INIT_SPLIT);
  }

  return (
    <div className="grid">
      <Label className="mb-2 text-xs select-none">
        <span>Split to liquid</span>
        <span className="text-green dark:text-green-l2 ml-2 text-sm">
          {splitToLiq === INIT_SPLIT ? "--" : splitToLiq + "%"}
        </span>
        <button onClick={unspecifySplit} className="text-xs ml-1">
          reset
        </button>
      </Label>
      <div className="rounded bg-gray-l5 dark:bg-blue-d5 grid items-center px-4 py-6 border border-prim">
        <input
          {...register("splitToLiquid")}
          type="range"
          className="range"
          min="0"
          max="100"
          step="1"
        />
      </div>
    </div>
  );
}
