import { WalletStatus, useWallet } from "@terra-money/wallet-provider";
import { useCallback, useMemo } from "react";
import { Connection, ProviderId, ProviderInfo } from "./types";
import { BaseChain } from "types/aws";
import xdefiIcon from "assets/icons/wallets/xdefi.jpg";
import { UnexpectedStateError, UnsupportedNetworkError } from "errors/errors";
import { chainIDs } from "constants/chains";
import { WALLET_METADATA } from "./constants";
import checkXdefiPriority from "./helpers/checkXdefiPriority";
import useInjectedProvider from "./useInjectedProvider";

type Result = {
  isLoading: boolean;
  disconnect: () => void;
  switchChain: (chainId: chainIDs) => Promise<void>;
  supportedChains: BaseChain[];
  connection: Connection;
  providerInfo: ProviderInfo | undefined;
};

export default function useXdefi(): Result {
  const evmProvider = useInjectedProvider("xdefi-evm");

  const {
    availableConnections,
    connect: connectTerra,
    status,
    disconnect: disconnectTerra,
    network,
    wallets,
  } = useWallet();

  const xdefiConnection = useMemo(
    () =>
      availableConnections.find(
        (connection) => connection.identifier === "xdefi-wallet"
      ),
    [availableConnections]
  );

  const connect = useCallback(
    async (chainId: chainIDs) => {
      if (
        evmProvider.supportedChains.some(({ chain_id }) => chain_id === chainId)
      ) {
        await evmProvider.connection.connect();
      } else if (
        chainId === chainIDs.terraMain ||
        chainId === chainIDs.terraTest
      ) {
        if (xdefiConnection) {
          connectTerra(xdefiConnection.type, xdefiConnection.identifier);
        } else {
          checkXdefiPriority();
        }
      } else {
        throw new Error(`Chain ${chainId} not supported on XDefi`);
      }
    },
    [
      xdefiConnection,
      evmProvider.supportedChains,
      evmProvider.connection,
      connectTerra,
    ]
  );

  const disconnect = useCallback(() => {}, []);

  // const xdefiTerraConnection: Connection = {
  //   logo: terraIcon, //this connector will appear on network selection
  //   name: "xdefi (Terra)",
  //   installUrl: WALLET_METADATA["xdefi-wallet"].installUrl,
  //   connect: async () => {
  //     if (connection) {
  //       connect(connection.type, connection.identifier);
  //     } else {
  //       checkXdefiPriority();
  //     }
  //   },
  // };

  // const terraInfo: ProviderInfo | undefined = connection
  //   ? {
  //       providerId:
  //         //use connect type as Id if no futher connections stems out of the type
  //         (connection?.identifier as ProviderId) ||
  //         connection.type.toLowerCase(),
  //       logo: connection?.icon!,
  //       chainId: network.chainID,
  //       address: wallets[0].terraAddress,
  //     }
  //   : undefined;

  // const terraProvider: Result = {
  //   connection: xdefiTerraConnection,
  //   isLoading: status === WalletStatus.INITIALIZING,
  //   disconnect,
  //   providerInfo: terraInfo,
  //   supportedChains:
  // };

  // return [evmProvider, terraProvider];

  return {};
}
