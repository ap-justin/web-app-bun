import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { Connection, ProviderId, ProviderStatus } from "./types";
import { BaseChain, Chain, Token } from "types/aws";
import { WalletDisconnectedError } from "errors/errors";
import { chainIDs } from "constants/chains";
import { useChainWithBalancesQuery } from "./hooks";
import useInjectedProvider from "./useInjectedProvider";
import useKeplr from "./useKeplr";
import useTerra from "./useTerra";

export type WalletState = {
  walletIcon: string;
  displayCoin: Token;
  coins: Token[];
  address: string;
  chain: Chain;
  providerId: ProviderId;
  supportedChains: BaseChain[];
  getBalance: (token_id: string) => number;
};

type State = {
  wallet?: WalletState;
  isLoading: boolean;
};

type Setters = {
  switchChain: (chainId: chainIDs) => Promise<void>;
  disconnect(): void;
  connections: Connection[];
};

const initialState: State = {
  wallet: undefined,
  isLoading: true,
};

export default function WalletContext(props: PropsWithChildren<{}>) {
  const {
    isLoading: isMetamaskLoading, //requesting permission, attaching event listeners
    connection: metamaskConnection,
    disconnect: disconnectMetamask,
    providerInfo: metamaskInfo,
    supportedChains: metamaskSupportedChains,
    switchChain: switchMetamaskChain,
  } = useInjectedProvider("metamask");

  // const {
  //   isLoading: isBinanceWalletLoading,
  //   connection: binanceWalletConnection,
  //   disconnect: disconnectBinanceWallet,
  //   providerInfo: binanceWalletInfo,
  //   supportedChains: binanceSupportedChains,
  //   switchChain: switchBinanceChain,
  // } = useInjectedProvider("binance-wallet");

  const {
    isLoading: isKeplrLoading,
    connection: keplrConnection,
    disconnect: disconnectKeplr,
    providerInfo: keplrWalletInfo,
    supportedChains: keplrSupportedChains,
    switchChain: switchKeplrChain,
  } = useKeplr();

  const {
    isTerraLoading,
    terraConnections,
    disconnectTerra,
    terraInfo,
    supportedChains: terraSupportedChains,
    switchChain: switchTerraChain,
  } = useTerra();

  const {
    isLoading: isXdefiLoading, //requesting permission, attaching event listeners
    connection: xdefiConnection,
    disconnect: disconnectXdefi,
    providerInfo: xdefiInfo,
    supportedChains: xdefiSupportedChains,
    switchChain: switchXdefiChain,
  } = useInjectedProvider("xdefi-evm");

  const providerStatuses: ProviderStatus[] = [
    // {
    //   providerInfo: binanceWalletInfo,
    //   isLoading: isBinanceWalletLoading,
    //   supportedChains: binanceSupportedChains,
    //   switchChain: switchBinanceChain,
    // },
    {
      providerInfo: metamaskInfo,
      isLoading: isMetamaskLoading,
      supportedChains: metamaskSupportedChains,
      switchChain: switchMetamaskChain,
    },

    {
      providerInfo: terraInfo,
      isLoading: isTerraLoading,
      supportedChains: terraSupportedChains,
      switchChain: switchTerraChain,
    },
    {
      providerInfo: keplrWalletInfo,
      isLoading: isKeplrLoading,
      supportedChains: keplrSupportedChains,
      switchChain: switchKeplrChain,
    },
    {
      providerInfo: xdefiInfo,
      isLoading: isXdefiLoading,
      supportedChains: xdefiSupportedChains,
      switchChain: switchXdefiChain,
    },
  ];

  const activeProvider = providerStatuses.find(
    ({ providerInfo, isLoading }) => !isLoading && providerInfo !== undefined
  );

  const disconnect = useCallback(() => {
    switch (activeProvider?.providerInfo!.providerId) {
      case "metamask":
        disconnectMetamask();
        break;
      // case "binance-wallet":
      //   disconnectBinanceWallet();
      //   break;
      case "xdefi-evm":
        disconnectXdefi();
        break;
      case "keplr":
        disconnectKeplr();
        break;
      case "xdefi-wallet":
      case "station":
      case "leap-wallet":
      case "walletconnect":
        disconnectTerra();
        break;
      default:
        throw new WalletDisconnectedError();
    }
  }, [
    activeProvider?.providerInfo,
    disconnectMetamask,
    // disconnectBinanceWallet,
    disconnectXdefi,
    disconnectKeplr,
    disconnectTerra,
  ]);

  const switchChain = useCallback(
    async (chainId: chainIDs) => {
      if (!activeProvider) {
        throw new WalletDisconnectedError();
      }

      await activeProvider.switchChain(chainId);
    },
    [activeProvider]
  );

  const { chain, isLoading: isChainLoading } = useChainWithBalancesQuery(
    activeProvider?.providerInfo?.address,
    activeProvider?.providerInfo?.chainId,
    disconnect
  );

  const walletState: WalletState | undefined = useMemo(() => {
    if (activeProvider) {
      const { logo, providerId, address } = activeProvider.providerInfo!;
      const walletState: WalletState = {
        walletIcon: logo,
        displayCoin: chain.native_currency,
        coins: [chain.native_currency, ...chain.tokens],
        address,
        chain,
        providerId,
        supportedChains: activeProvider.supportedChains,
        getBalance: (token_id: string) =>
          [chain.native_currency, ...chain.tokens].find(
            (x) => x.token_id === token_id
          )?.balance || 0,
      };

      return walletState;
    }
  }, [activeProvider, chain]);

  return (
    <getContext.Provider
      value={{
        wallet: walletState,
        isLoading: providerStatuses.some((x) => x.isLoading) || isChainLoading,
      }}
    >
      <setContext.Provider
        value={{
          connections: [
            keplrConnection,
            metamaskConnection,
            xdefiConnection,
            ...terraConnections,
            // binanceWalletConnection,
          ],
          disconnect,
          switchChain,
        }}
      >
        {props.children}
      </setContext.Provider>
    </getContext.Provider>
  );
}

const getContext = createContext<State>(initialState);
const setContext = createContext<Setters>({
  connections: [],
  disconnect: async () => {},
  switchChain: async (_) => {},
});

export const useSetWallet = () => useContext(setContext);
export const useGetWallet = () => useContext(getContext);
