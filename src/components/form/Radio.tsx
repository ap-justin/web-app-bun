import { PropsWithChildren } from "react";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import { Classes } from "./types";
import { unpack } from "./helpers";

type Props<T extends FieldValues, K extends Path<T>> = PropsWithChildren<{
  name: K;
  value: PathValue<T, K> extends string ? PathValue<T, K> : never;
  classes?: Classes;
}>;

export function Radio<T extends FieldValues, K extends Path<T>>({
  children,
  classes,
  name,
  value,
}: Props<T, K>) {
  const id = `__${name}-${value}`;
  const { container, input } = unpack(classes);
  const {
    register,
    formState: { isSubmitting },
  } = useFormContext<T>();

  return (
    <label className={`radio ${container}`} htmlFor={id}>
      <input
        {...register(name)}
        id={id}
        type="radio"
        className={`peer ${input}`}
        disabled={isSubmitting}
        value={value}
      />
      {children || value}
    </label>
  );
}
