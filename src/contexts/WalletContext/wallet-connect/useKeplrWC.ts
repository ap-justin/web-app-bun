import { KeplrQRCodeModalV1 } from "@keplr-wallet/wc-qrcode-modal";
import SignClient from "@walletconnect/sign-client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Connected,
  Cosmos,
  KeplrWC,
  ProviderState,
  Wallet,
  WalletMeta,
} from "../types";
import { TxRaw } from "@keplr-wallet/proto-types/cosmos/tx/v1beta1/tx";
import { SignDoc, WCSignAminoRes, WCSignDirectRes } from "types/cosmos";
import icon from "assets/icons/wallets/keplr.png";

const QRModal = new KeplrQRCodeModalV1();

//user peer name as ID
const PEER_NAME = "Keplr";

type WCSession = Awaited<
  ReturnType<Awaited<ReturnType<SignClient["connect"]>>["approval"]>
>;

let client: SignClient;
async function getClient(): Promise<SignClient> {
  if (client) return client;
  client = await SignClient.init({
    projectId: "039a7aeef39cb740398760f71a471957",
  });
  return client;
}

/** NOTE: only use this wallet in mainnet */
export function useKeplrWC(): Wallet {
  const [state, setState] = useState<ProviderState>({
    status: "disconnected",
  });

  /** persistent connection */
  useEffect(() => {
    (async () => {
      setState({ status: "loading" });
      const client = await getClient();
      const prevSession = client.session
        .getAll()
        .find((s) => s.peer.metadata.name === PEER_NAME);

      if (prevSession) {
        setState(await connectedState(client, prevSession));
        client.on("session_delete", onSessionDelete);
      } else {
        setState({ status: "disconnected" });
      }
    })();
    //eslint-disable-next-line
  }, []);

  function onSessionDelete() {
    setState({ status: "disconnected" });
  }

  /** new connection */
  async function connect() {
    try {
      setState({ status: "loading" });
      const client = await getClient();

      const prevSession = client.session
        .getAll()
        .find((s) => s.peer.metadata.name === PEER_NAME);

      if (prevSession) {
        return console.log(prevSession);
      }

      const prevPairing = client.pairing
        .getAll({ active: true })
        .find((p) => p.peerMetadata?.name === PEER_NAME);

      const { uri, approval } = await client.connect({
        pairingTopic: prevPairing?.topic,
        requiredNamespaces: {
          cosmos: {
            methods: ["cosmos_signDirect", "cosmos_signAmino"],
            chains: ["cosmos:juno-1"],
            events: [],
          },
        },
      });

      // uri is only returned for new pairings
      if (uri) {
        QRModal.open(uri, (/** close callback */) => {
          setState({ status: "disconnected" });
        });
      } else {
        toast.loading("Waiting for approval");
      }
      const session = await approval();
      toast.dismiss();

      setState(await connectedState(client, session));

      client.on("session_delete", onSessionDelete);
      if (uri) {
        QRModal.close();
      }
    } catch (err) {
      toast.dismiss();
      setState({ status: "disconnected" });
      toast.error("Failed to connect to wallet");
    } finally {
      QRModal.close();
    }
  }

  async function disconnect() {
    setState({ status: "loading" });
    const client = await getClient();
    const session = client.session
      .getAll()
      .find((s) => s.peer.metadata.name === PEER_NAME);

    if (session) {
      await client.disconnect({
        topic: session.topic,
        reason: { code: 1, message: "user disconnected" },
      });
    }
    client.off("session_delete", onSessionDelete);
    setState({ status: "disconnected" });
  }

  const meta: WalletMeta = {
    logo: icon,
    id: "keplr-wc",
    name: "Keplr mobile",
  };

  return {
    ...state,
    ...meta,
    ...{ connect, disconnect },
  };
}

async function connectedState(
  client: SignClient,
  session: WCSession
): Promise<Pick<Connected, "address" | "chainId" | "status"> & Cosmos> {
  const { namespaces, topic } = session;
  const cosmos = namespaces.cosmos;

  const [, chainId, address] = cosmos.accounts[0].split(":");
  const request = client.request.bind(client);

  const wcClient: KeplrWC = {
    async signDirect(chain_id, signer, doc: SignDoc) {
      //doc is from cosmos/types SignDoc
      const tx = TxRaw.fromPartial({
        bodyBytes: doc.bodyBytes,
        authInfoBytes: doc.authInfoBytes,
      });
      const { authInfoBytes, bodyBytes } = TxRaw.toJSON(tx) as any;
      const { signature } = await request<WCSignDirectRes>({
        topic: topic,
        chainId: `cosmos:${chain_id}`,
        request: {
          method: "cosmos_signDirect",
          params: {
            signerAddress: signer,
            signDoc: {
              authInfoBytes,
              bodyBytes,
              chainId: doc.chainId,
              accountNumber: doc.accountNumber?.toString(),
            },
          },
        },
      }).catch((err) => {
        console.log(err);
        throw err;
      });
      return { signature, signed: doc };
    },
    async signAmino(signer, chainId, doc) {
      const { signature } = await request<WCSignAminoRes>({
        topic: topic,
        chainId,
        request: {
          method: "cosmos_signAmino",
          params: { signerAddress: signer, signDoc: doc },
        },
      });

      return { signature, signed: doc };
    },
  };

  return {
    status: "connected",
    type: "cosmos",
    chainId,
    address,
    client: wcClient,
  };
}
