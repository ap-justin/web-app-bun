import { RadioGroup } from "@headlessui/react";
import { ErrorMessage } from "@hookform/error-message";
import { Fragment } from "react";
import { useController } from "react-hook-form";
import { FormValues as FV } from "./types";
import { Field, Label } from "components/form";

const types: FV["beneficiaryType"][] = ["wallet", "endowment", "treasury"];

export default function Beneficiary() {
  const {
    formState: { errors },
    field: { value: type, onChange: onTypeChange },
  } = useController<Pick<FV, "beneficiaryType">>({ name: "beneficiaryType" });

  return (
    <div className="mt-6">
      <Label required className="mb-2 text-gray-d2">
        Beneficiary
      </Label>
      <ErrorMessage
        as="p"
        errors={errors}
        name="beneficiaryType"
        className="font-mono font-semibold text-left text-red-l1 text-xs mb-2"
      />
      <RadioGroup
        value={type}
        onChange={onTypeChange}
        name="plan"
        className="flex gap-2 mb-6"
      >
        {types.map((type) => (
          <RadioGroup.Option key={type} value={type} as={Fragment}>
            {({ checked }) => (
              <span
                className={`${
                  checked ? "bg-blue/20" : ""
                } text-gray-d2 w-36 cursor-pointer rounded-sm border border-gray-d2/40 px-3 py-1 text-center text-sm uppercase`}
              >
                {type}
              </span>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
      {type === "wallet" && (
        <Field<FV>
          classes="field-admin"
          label="Wallet address"
          name="beneficiaryWallet"
          placeholder="juno123abc..."
          required
        />
      )}
      {type === "endowment" && (
        <Field<FV, "number">
          type="number"
          classes="field-admin"
          label="Endowment id"
          name="beneficiaryEndowmentId"
          placeholder="1"
          required
        />
      )}
      {type === "treasury" && (
        <p className="text-sm text-gray-d1 dark:text-gray py-1">
          AP treasury is the beneficiary
        </p>
      )}
    </div>
  );
}
