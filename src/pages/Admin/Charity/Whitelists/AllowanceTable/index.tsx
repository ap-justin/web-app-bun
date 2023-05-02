import { FormProvider, useForm } from "react-hook-form";
import { FV } from "./types";
import Form from "./Form";

export default function AllowanceTable() {
  const methods = useForm<FV>({
    defaultValues: { allowances: [] },
  });

  const { handleSubmit } = methods;
  return (
    <td colSpan={3} className="border-b border-prim">
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit((data) => {})} />
      </FormProvider>
    </td>
  );
}
