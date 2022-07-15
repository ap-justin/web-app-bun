import { WalletState } from "contexts/WalletContext/WalletContext";
import { placeHolderDisplayToken } from "contexts/WalletContext/constants";
import { chainIDs } from "constants/chainIDs";

export const WALLET: WalletState = {
  walletIcon: "",
  displayCoin: placeHolderDisplayToken["keplr"],
  coins: [placeHolderDisplayToken["keplr"]],
  address: "juno1qsn67fzym4hak4aly07wvcjxyzcld0n4s726r2fs9km2tlahlc5qg2drvn",
  chainId: chainIDs.juno_test,
  providerId: "keplr",
};
