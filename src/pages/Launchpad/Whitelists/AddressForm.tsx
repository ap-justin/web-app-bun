import { Dialog } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { object } from "yup";
import { SchemaShape } from "schemas/types";
import { useModalContext } from "contexts/ModalContext";
import { Field } from "components/form";
import { useGetter } from "store/accessors";
import { requiredWalletAddr } from "schemas/string";
import { chainIds } from "constants/chains";

type Props = {
  added: string[];
  name: string;
  onAdd(address: string): void;
};

type FV = { addr: string };
export default function MemberForm({ onAdd, name, added }: Props) {
  const network = useGetter((state) => state.launchpad.network);
  const { closeModal } = useModalContext();
  const methods = useForm<FV>({
    resolver: yupResolver(
      object().shape<SchemaShape<FV>>({
        addr: requiredWalletAddr(
          network === "juno" ? chainIds.juno : chainIds.polygon
        ).notOneOf(added, "address already added"),
      })
    ),
    defaultValues: { addr: "" },
  });
  const { handleSubmit } = methods;
  return (
    <Dialog.Panel
      onSubmit={handleSubmit(({ addr }) => {
        onAdd(addr);
        closeModal();
      })}
      as="form"
      className="p-6 fixed-center z-10 grid gap-4 text-gray-d2 dark:text-white bg-white dark:bg-blue-d4 sm:w-full w-[90vw] sm:max-w-lg rounded overflow-hidden"
    >
      <FormProvider {...methods}>
        <Field name="addr" label="Address" required />
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
