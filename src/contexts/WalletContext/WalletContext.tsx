import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { Connection, ProviderStatus } from "./types";
import { BaseChain } from "types/aws";
import { ProviderId } from "types/lists";
import { Chain, TokenWithBalance } from "types/tx";
import { useChainQuery } from "services/apes";
import { WalletDisconnectedError } from "errors/errors";
import { chainIDs } from "constants/chains";
import { IS_MOBILE, IS_TEST } from "constants/env";
import {
  BNB_WALLET_SUPPORTED_CHAINS,
  EVM_SUPPORTED_CHAINS,
  placeholderChain,
} from "./constants";
import { useVerifyChain } from "./hooks";
import useInjectedProvider from "./useInjectedProvider";
import useKeplr from "./useKeplr";
import useTerra from "./useTerra";
import useWeb3Auth from "./useWeb3Auth";
import { useEVMWC, useKeplrWC } from "./wallet-connect";

export type WalletState = {
  walletIcon: string;
  displayCoin: TokenWithBalance;
  coins: TokenWithBalance[];
  address: string;
  chain: Chain;
  providerId: ProviderId;
  supportedChains: BaseChain[];
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
  } = useInjectedProvider("metamask", EVM_SUPPORTED_CHAINS);

  const {
    isLoading: isBinanceWalletLoading,
    connection: binanceWalletConnection,
    disconnect: disconnectBinanceWallet,
    providerInfo: binanceWalletInfo,
    supportedChains: binanceSupportedChains,
    switchChain: switchBinanceChain,
  } = useInjectedProvider("binance-wallet", BNB_WALLET_SUPPORTED_CHAINS);

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
    stationConnection,
    stationMobileConnection,
    xdefiTerraConnection,
    leapConnection,
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
  } = useInjectedProvider("xdefi-evm", EVM_SUPPORTED_CHAINS, "XDEFI EVM");

  const {
    isLoading: isKeplrWCLoading,
    connection: keplrWCConnection,
    disconnect: disconnectKeplrWC,
    providerInfo: keplrWCInfo,
  } = useKeplrWC();

  const {
    isLoading: isEVMWCLoading,
    connection: evmWCConnection,
    disconnect: disconnectEVMWC,
    providerInfo: evmWCInfo,
  } = useEVMWC();

  const {
    isLoading: isWeb3AuthLoading,
    supportedChains: web3AuthSupportedChains,
    connection: web3AuthConnection,
    disconnect: disconnectWeb3Auth,
    switchChain: switchWeb3AuthChain,
    providerInfo: web3AuthInfo,
  } = useWeb3Auth();

  const providerStatuses: ProviderStatus[] = [
    {
      providerInfo: web3AuthInfo,
      isLoading: isWeb3AuthLoading,
      supportedChains: web3AuthSupportedChains,
      switchChain: switchWeb3AuthChain,
    },
    {
      providerInfo: binanceWalletInfo,
      isLoading: isBinanceWalletLoading,
      supportedChains: binanceSupportedChains,
      switchChain: switchBinanceChain,
    },
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
    {
      providerInfo: keplrWCInfo,
      isLoading: isKeplrWCLoading,
      supportedChains: [],
      switchChain: () => {
        throw new Error("wc keplr can't switch chain");
      },
    },
    {
      providerInfo: evmWCInfo,
      isLoading: isEVMWCLoading,
      supportedChains: [],
      switchChain: () => {
        throw new Error("wc-evm can't switch chain");
      },
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
      case "web3auth-torus":
        disconnectWeb3Auth();
        break;
      case "evm-wc":
        disconnectEVMWC();
        break;
      case "binance-wallet":
        disconnectBinanceWallet();
        break;
      case "xdefi-evm":
        disconnectXdefi();
        break;
      case "keplr":
        disconnectKeplr();
        break;
      case "keplr-wc":
        disconnectKeplrWC();
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
    disconnectWeb3Auth,
    disconnectEVMWC,
    disconnectBinanceWallet,
    disconnectXdefi,
    disconnectKeplr,
    disconnectKeplrWC,
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

  const {
    data: chain = placeholderChain,
    isLoading: isChainLoading,
    isFetching: isChainFetching,
    error,
  } = useChainQuery(activeProvider?.providerInfo!, { skip: !activeProvider });

  useVerifyChain(chain, error, disconnect);

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
      };

      return walletState;
    }
  }, [activeProvider, chain]);

  return (
    <getContext.Provider
      value={{
        wallet: walletState,
        isLoading:
          providerStatuses.some((x) => x.isLoading) ||
          isChainLoading ||
          isChainFetching,
      }}
    >
      <setContext.Provider
        value={{
          connections: IS_MOBILE
            ? //web3 auth should also work on mobile
              [
                web3AuthConnection,
                evmWCConnection,
                ...(IS_TEST ? [] : [keplrWCConnection]),
                stationMobileConnection,
              ]
            : [
                web3AuthConnection,
                keplrConnection,
                metamaskConnection,
                evmWCConnection,
                ...(IS_TEST ? [] : [keplrWCConnection]),
                binanceWalletConnection,
                /**
                 * NOTE: we can't possibly know beforehand if user
                 * wants to use terra wallet or xdefi wallet.
                 *
                 * Solution: collapse these two connections to one,
                 * and add selection/expansion step.
                 */
                xdefiConnection,
                xdefiTerraConnection,
                leapConnection,
                stationConnection,
                stationMobileConnection,
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
