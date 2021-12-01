import { Values } from "components/Staker/types";
import { useFormContext } from "react-hook-form";

export default function Fee() {
  const { watch } = useFormContext<Values>();
  const fee = watch("fee");
  return (
    <div className="flex justify-between items-center text-xs font-heading text-blue-accent mb-2">
      <p className="text-xs uppercase">tx fee</p>
      <p className="text-xs">{fee} UST (max)</p>
    </div>
  );
}
