import {
  ConnectType,
  Installation,
  Connection as TerraConnection,
  WalletStatus,
  useWallet,
} from "@terra-money/wallet-provider";
import { useState } from "react";
import { Connection, ProviderId, ProviderInfo } from "./types";
import { BaseChain } from "types/aws";
import { useModalContext } from "contexts/ModalContext";
import Popup from "components/Popup";
import {
  UnsupportedNetworkError,
  WalletDisconnectedError,
} from "errors/errors";
import { chainIDs } from "constants/chains";
import useSetSupportedChains from "./useSetSupportedChains";

const SUPPORTED_CHAIN_IDS = [chainIDs.terraMain, chainIDs.terraTest];

const SUPPORTED_CHAINS: BaseChain[] = SUPPORTED_CHAIN_IDS.map((chain_id) => ({
  chain_id,
  chain_name: chain_id,
}));

export default function useTerra() {
  const [supportedChains, setSupportedChains] = useState(SUPPORTED_CHAINS);

  const {
    availableConnections,
    availableInstallations,
    connection,
    network,
    wallets,
    status,
    connect,
    disconnect,
  } = useWallet();

  const { showModal } = useModalContext();

  useSetSupportedChains(SUPPORTED_CHAIN_IDS, setSupportedChains);

  const terraInfo: ProviderInfo | undefined = connection
    ? {
        providerId:
          //use connect type as Id if no futher connections stems out of the type
          (connection?.identifier as ProviderId) ||
          connection.type.toLowerCase(),
        logo: connection?.icon!,
        chainId: network.chainID,
        address: wallets[0].terraAddress,
      }
    : undefined;

  const terraConnections: Connection[] = availableConnections
    .filter(_filter)
    .map((connection) => ({
      logo: connection.icon,
      name: connection.name,
      connect: async () => {
        connect(connection.type, connection.identifier);
      },
    }))
    .concat(
      availableInstallations.filter(_filter).map(({ name, icon, url }) => ({
        logo: icon,
        name,
        connect: async () => {
          window.open(url, "_blank", "noopener noreferrer");
        },
      }))
    );

  const switchChain = async (chainId: chainIDs) => {
    if (!connection) {
      throw new WalletDisconnectedError();
    }

    if (!SUPPORTED_CHAIN_IDS.includes(chainId)) {
      throw new UnsupportedNetworkError(chainId);
    }

    showModal(Popup, {
      message: `Please use your wallet to switch to ${chainId} chain and reload the page`,
    });
  };

  return {
    isTerraLoading: status === WalletStatus.INITIALIZING,
    terraConnections,
    disconnectTerra: disconnect,
    terraInfo,
    switchChain,
    supportedChains,
  };
}

function _filter<T extends TerraConnection | Installation>(conn: T) {
  const identifier = conn.identifier as ProviderId;

  return (
    identifier === "xdefi-wallet" ||
    identifier === "leap-wallet" ||
    identifier === "station" ||
    conn.type === ConnectType.WALLETCONNECT
  );
}
