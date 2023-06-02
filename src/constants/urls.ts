import { BASE_URL, IS_TEST } from "./env";

export const APIs = {
  aws: "https://kpnxz5rzo2.execute-api.us-east-1.amazonaws.com",
  apes: "https://fctqkloitc.execute-api.us-east-1.amazonaws.com",
  flipside: "https://flipside.leslug.com/angel",
};
export const WC_BRIDGE = "https://bridge.walletconnect.org";

export const LITEPAPER = `${BASE_URL}/docs/litepaper-introduction/`;
export const PRIVACY_POLICY = `${BASE_URL}/privacy-policy/`;

export const TERMS_OF_USE = `${BASE_URL}/terms-of-use-npo/`;

export const POLYGON_RPC = IS_TEST ? "https://rpc.ankr.com/polygon_mumbai" : "";
