import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import copyIcon from "../assets/images/copy.png";
import moreIcon from "../assets/images/more.png";

import {
  useWallet,
  WalletStatus,
  ConnectType,
} from "@terra-money/wallet-provider";

export function ConnectTerraButton() {
  const {
    status,
    availableConnectTypes,
    availableInstallTypes,
    connect,
    disconnect,
    install,
    wallets,
  } = useWallet();
  const { buttonProps, isOpen } = useDropdownMenu(5);

  switch (status) {
    case WalletStatus.INITIALIZING:
      return (
        <div>
          <button disabled>Initializing Wallet...</button>
        </div>
      );
    case WalletStatus.WALLET_NOT_CONNECTED:
      return (
        <div>
          {availableConnectTypes.includes(ConnectType.CHROME_EXTENSION) && (
            <button onClick={() => connect(ConnectType.CHROME_EXTENSION)}>
              Connect Chrome Extension
            </button>
          )}
          {availableInstallTypes.includes(ConnectType.CHROME_EXTENSION) && (
            <button onClick={() => install(ConnectType.CHROME_EXTENSION)}>
              Install Chrome Extension
            </button>
          )}
        </div>
      );
    case WalletStatus.WALLET_CONNECTED:
      return (
        <div>
          {wallets.length > 0 && (
            <div className="flex justify-between items-center ml-5">
              <p>{wallets[0].terraAddress.substr(0, 15) + "..."}</p>
              <span
                className="mx-2"
                onClick={() => onCopyAddress(wallets[0].terraAddress)}
              >
                <img src={copyIcon} alt="AngelProtocol" />
              </span>
              <div className="flex justify-between items-center relative">
                <button {...buttonProps}>
                  <img src={moreIcon} alt="AngelProtocol" />
                </button>
                <div
                  className={
                    isOpen
                      ? "block p-5 absolute right-0 top-10 bg-white text-black rounded-md"
                      : "hidden p-5 absolute right-0 top-10 bg-white text-black rounded-md"
                  }
                  role="menu"
                >
                  <a href="#" onClick={() => disconnect()}>
                    Disconnect
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      );
  }
}

function onCopyAddress(terraAddress: string) {
  const selBox = document.createElement("textarea");
  selBox.style.position = "fixed";
  selBox.style.left = "0";
  selBox.style.top = "0";
  selBox.style.opacity = "0";
  selBox.value = terraAddress;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  document.execCommand("copy");
  document.body.removeChild(selBox);
}
