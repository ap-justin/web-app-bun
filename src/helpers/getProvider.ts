import { ProviderId } from "contexts/WalletContext/types";
import { InjectedProvider } from "types/evm";
import { Dwindow } from "types/window";

export function getProvider(
  providerId: ProviderId
): InjectedProvider | undefined {
  const dwindow = window as Dwindow;
  switch (providerId) {
    case "binance-wallet":
      return dwindow.BinanceChain;
    case "metamask":
      return dwindow.ethereum;
    case "xdefi-evm":
      return dwindow.xfi?.ethereum as InjectedProvider;
    default:
      return undefined;
  }
}
