import { SafeEventEmitterProvider, WALLET_ADAPTERS } from "@web3auth/base";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";
import { Web3Auth } from "@web3auth/modal";
import { TorusWalletConnectorPlugin } from "@web3auth/torus-wallet-connector-plugin";
import { LOGIN_MODAL_EVENTS } from "@web3auth/ui";
import { useEffect, useState } from "react";
import { BaseChain } from "types/aws";
import { chainIDs } from "constants/chains";
import { IS_TEST } from "constants/env";
import { ProviderInfo } from "..";
import { saveUserAction } from "../helpers";
import RPC from "./ethersRPC";
import { WEB3AUTH_LOGO, chainConfig } from "./web3AuthConfigs";

const clientId =
  "BEglQSgt4cUWcj6SKRdu5QkOXTsePmMcusG5EAoyjyOYKlVRjIF1iCNnMOTfpzCiunHRrMui8TIwQPXdkQ8Yxuk"; // get from https://dashboard.web3auth.io
const SUPPORTED_CHAINS: BaseChain[] = IS_TEST
  ? [
      { chain_id: chainIDs.polygonTest, chain_name: "Polygon Testnet" },
      { chain_id: chainIDs.polygonMain, chain_name: "Polygon Mainnet" },
    ]
  : [{ chain_id: chainIDs.polygonMain, chain_name: "Polygon Mainnet" }];

const DEFAULT_CHAIN: BaseChain = IS_TEST
  ? { chain_id: chainIDs.polygonTest, chain_name: "Polygon Testnet" }
  : { chain_id: chainIDs.polygonMain, chain_name: "Polygon Mainnet" };

export default function useWeb3Auth() {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [providerInfo, setProviderInfo] = useState<ProviderInfo>();
  const [chainId, setChainId] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  );

  useEffect(() => {
    const init = async () => {
      try {
        const web3Auth = new Web3Auth({
          clientId,
          web3AuthNetwork: "cyan",
          chainConfig: chainConfig[DEFAULT_CHAIN.chain_id],
          uiConfig: {
            theme: "dark",
            loginMethodsOrder: ["github", "google"],
            defaultLanguage: "en",
            appLogo: WEB3AUTH_LOGO, // Your App Logo Here
          },
        });

        // adding metamask adapter
        const metamaskAdapter = new MetamaskAdapter({
          clientId,
          sessionTime: 3600, // 1 hour in seconds
          web3AuthNetwork: "cyan",
          chainConfig: chainConfig[DEFAULT_CHAIN.chain_id],
        });
        web3Auth.configureAdapter(metamaskAdapter);

        const torusConnectorPlugin = new TorusWalletConnectorPlugin({
          torusWalletOpts: {},
          walletInitOptions: {
            whiteLabel: {
              theme: { isDark: true, colors: { primary: "#00a8ff" } },
              logoDark: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
              logoLight: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
            },
            useWalletConnect: true,
          },
        });
        await web3Auth.addPlugin(torusConnectorPlugin);
        await web3Auth.initModal();
        web3Auth.on(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, (isVisible) => {
          console.log("LOGIN_MODAL_EVENTS.MODAL_VISIBILITY", isVisible);
          setIsLoading(isVisible);
        });
        setWeb3auth(web3Auth);
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  useEffect(() => {
    const setupProviderInfo = async () => {
      if (!provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(provider);
      const chainId = await rpc.getChainId();
      const address = await rpc.getAccounts();
      setProviderInfo({
        providerId: "web3auth-metamask",
        logo: WEB3AUTH_LOGO,
        chainId,
        address,
      });
    };
    if (provider) setupProviderInfo();
  }, [provider, chainId]);

  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
  };

  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    try {
      await web3auth.logout();
    } catch (e) {
      console.log(e);
    }

    web3auth.clearCache();
    saveUserAction("metamask__pref", "disconnect");
    setProviderInfo(undefined);
  };

  const switchChain = async (chainId: string) => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    if (chainConfig[chainId]) {
      await web3auth?.addChain(chainConfig[chainId]);
      await web3auth?.switchChain({ chainId: chainConfig[chainId].chainId });
    }
    setChainId(chainId);
  };

  return {
    isLoading,
    connection: {
      connect: login,
      logo: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
      name: "Web3 Auth",
    },
    providerInfo,
    disconnect: logout,
    switchChain,
    supportedChains: SUPPORTED_CHAINS,
  };
}
