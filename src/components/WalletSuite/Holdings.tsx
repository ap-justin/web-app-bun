<<<<<<< HEAD
import { TokenWithBalance } from "services/terra/multicall/types";
=======
import { CURRENCIES } from "constants/currency";
>>>>>>> master
import toCurrency from "helpers/toCurrency";

export default function Holdings(props: { coins: TokenWithBalance[] }) {
  return (
    <ul className="p-4">
      {props.coins.map(({ balance, symbol, logo }) => {
        return (
          <li
            key={symbol}
            className="p-3 grid grid-cols-aa1 border-b border-angel-grey/10 items-center"
          >
<<<<<<< HEAD
            <img src={logo} className="w-7 h-7 object-contain mr-2" alt="" />
            <span className="uppercase text-sm font-bold mr-2 text-angel-grey">
              {symbol}
=======
            <img
              src={CURRENCIES[denom].icon}
              className="w-7 h-7 object-contain mr-2"
              alt=""
            />
            <span className="uppercase text-sm font-bold mr-2 text-angel-grey">
              {CURRENCIES[denom].ticker}
>>>>>>> master
            </span>
            <span className="ml-auto text-angel-grey">
              {toCurrency(balance, 3, true)}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
