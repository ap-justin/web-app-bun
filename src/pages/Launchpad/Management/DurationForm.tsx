import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { number, object } from "yup";
import { useModalContext } from "contexts/ModalContext";
import Modal from "components/Modal";
import { Field } from "components/form";

export type Props = {
  initial: string;
  onChange(duration: string): void;
};

type FV = { duration: number };

export default function DurationForm({ onChange, initial }: Props) {
  const { closeModal } = useModalContext();
  const methods = useForm<FV>({
    defaultValues: { duration: +initial },
    resolver: yupResolver(
      object({
        duration: number()
          .required()
          .typeError("invalid number")
          .positive("must be greater than 0"),
      })
    ),
  });
  const { handleSubmit } = methods;

  const submit: SubmitHandler<FV> = ({ duration }) => {
    onChange(duration.toString());
    closeModal();
  };

  return (
    <Modal
      onSubmit={handleSubmit(submit)}
      as="form"
      className="p-6 fixed-center z-10 grid gap-4 text-gray-d2 dark:text-white bg-white dark:bg-blue-d4 sm:w-full w-[90vw] sm:max-w-lg rounded overflow-hidden"
    >
      <FormProvider {...methods}>
        <Field<FV, "number">
          type="number"
          name="duration"
          label="Duration (hours)"
          classes={{ container: "mt-8 mb-4" }}
          required
        />
      </FormProvider>
      <button type="submit" className="btn btn-orange mt-6">
        Submit
      </button>
    </Modal>
  );
}
