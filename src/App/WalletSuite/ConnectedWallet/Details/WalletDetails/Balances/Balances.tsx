import { Switch } from "@headlessui/react";
import { useState } from "react";
import CoinBalances from "./CoinBalances";

export default function Balances() {
  const [isSmallAmountsShown, setIsSmallAmountsShown] = useState(false);

  return (
    <>
      <CoinBalances isSmallAmountsShown={isSmallAmountsShown} />
      <div className="flex justify-between items-center font-heading font-semibold text-sm text-gray-d1 dark:text-gray">
        Hide small amounts:
        <Switch
          checked={isSmallAmountsShown}
          onChange={(val) => setIsSmallAmountsShown(val)}
          className={`${
            isSmallAmountsShown ? "bg-orange" : "bg-gray-l1"
          } relative flex h-4 w-8 items-center rounded-full cursor-pointer transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-l2`}
        >
          <span className="sr-only">Hide small amounts</span>
          <span
            className={`${
              isSmallAmountsShown ? "translate-x-[1.125rem]" : "translate-x-0.5"
            } pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    </>
  );
}
