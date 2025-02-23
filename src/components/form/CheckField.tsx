import { ErrorMessage } from "@hookform/error-message";
import { PropsWithChildren } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import { Classes } from "./types";
import { unpack } from "./helpers";

export function CheckField<T extends FieldValues>({
  name,
  children,
  classes,
  disabled,
  required,
}: PropsWithChildren<{
  name: Path<T>;
  classes?: Classes;
  disabled?: boolean;
  required?: boolean;
}>) {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext<T>();

  const id = `__${name}`;
  const { container, input: int, lbl, error } = unpack(classes);

  return (
    <div className={`check-field ${container}`}>
      <input
        {...register(name)}
        className={int + " peer"}
        type="checkbox"
        id={id}
        disabled={isSubmitting || disabled}
      />
      {!!children && (
        <label data-required={required} className={lbl} htmlFor={id}>
          {children}
        </label>
      )}

      <ErrorMessage
        data-error
        errors={errors}
        name={name as any}
        as="p"
        className={error}
      />
    </div>
  );
}
