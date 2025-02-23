import { useFormContext } from "react-hook-form";
import { FV } from "./types";
import { IS_TEST } from "constants/env";
import { denoms } from "constants/tokens";
import { feeData } from "./helpers";

export default function Breakdown() {
  const { watch, getValues } = useFormContext<FV>();
  const destinationChainId = watch("destinationChainId");
  const amounts = watch("amounts");
  const usdcAmountStr =
    amounts.find((a) => a.tokenId === (IS_TEST ? denoms.ausdc : denoms.uusdc))
      ?.value ?? "0";

  const fv = getValues(); //doesn't trigger re-render
  const { items: feeItems, toReceive } = feeData({
    ...fv,
    destinationChainId,
    withdrawAmount: +usdcAmountStr,
  });

  /**
   * don't show breakdown if:
   * - user has nothing to receive after fees
   * - no fees applies
   */

  const filteredFeeItems = feeItems.filter((item) => item.value > 0);

  if (toReceive <= 0 || filteredFeeItems.length <= 1) return null;

  return (
    <div className="divide-y divide-prim">
      <p className="font-bold font-work mb-2">Summary</p>
      {filteredFeeItems.map(({ name, value }) => (
        <Item key={name} title={name} value={value + " USDC"} />
      ))}
    </div>
  );
}

type Props = { title: string; value: string };
function Item({ title, value }: Props) {
  return (
    <div className="flex justify-between items-center w-full text-sm py-2 text-gray-d1 dark:text-gray">
      <span className="uppercase font-semibold text-xs">{title} :</span>
      <span>{value}</span>
    </div>
  );
}
