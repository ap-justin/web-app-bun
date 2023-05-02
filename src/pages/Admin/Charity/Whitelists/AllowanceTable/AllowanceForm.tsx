import { Dialog } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { object, string } from "yup";
import { AllowanceFV } from "./types";
import { SchemaShape } from "schemas/types";
import { useModalContext } from "contexts/ModalContext";
import { Selector } from "components/Selector";
import { Field, Label } from "components/form";
import { fiatWallet } from "slices/donation";
import { requiredPositiveNumber } from "schemas/number";

type Props = {
  added: string[];
  name: string;
  onAdd(data: AllowanceFV): void;
};

export default function MemberForm({ onAdd, name, added }: Props) {
  const { closeModal } = useModalContext();
  const methods = useForm<AllowanceFV>({
    resolver: yupResolver(
      object().shape<SchemaShape<AllowanceFV>>({
        allowance: requiredPositiveNumber,
        token: string().notOneOf(added, "Token Allowance already Added"),
      })
    ),
    defaultValues: { allowance: 0, token: { label: "", value: "" } },
  });
  const { handleSubmit } = methods;
  return (
    <Dialog.Panel
      onSubmit={handleSubmit(({ allowance, token }) => {
        console.log({ allowance, token });
        onAdd({ allowance, token });
        closeModal();
      })}
      as="form"
      className="p-6 fixed-center z-10 grid gap-4 text-gray-d2 dark:text-white bg-white dark:bg-blue-d4 sm:w-full w-[90vw] sm:max-w-lg rounded overflow-hidden"
    >
      <FormProvider {...methods}>
        <Field name="allowance" label="Allowance" required />
        <Label className="-mb-4" required>
          Select Token
        </Label>
        <Selector<AllowanceFV, "token", string, false>
          name={"token"}
          options={fiatWallet.tokens.map((c) => ({
            label: c.symbol,
            value: c.symbol,
          }))}
          classes={{ container: "overflow" }}
        />
      </FormProvider>
      <button
        type="submit"
        className="btn btn-orange mt-4 text-sm justify-self-end"
      >
        Add {name}
      </button>
    </Dialog.Panel>
  );
}
