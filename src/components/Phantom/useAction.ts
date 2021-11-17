import { setIcon } from "components/WalletSuite/manageIcon";
import { Icons } from "components/WalletSuite/types";
import Warning, { Props } from "components/WalletSuite/Warning";
import { useSetModal } from "components/Nodal/Nodal";
import { useGetter } from "store/accessors";
import { useSetPhantom } from "wallets/Phantom";

export default function useAction(icon: Icons) {
  const { connect } = useSetPhantom();
  const { isLoading } = useGetter((state) => state.wallet);
  const { showModal } = useSetModal();

  async function handleConnect() {
    try {
      connect();
      setIcon(icon);
    } catch (err) {
      console.error(err);
      showModal<Props>(Warning, {
        text: "Error connecting to phantom wallet",
      });
    }
  }

  return { handleConnect, isLoading };
}
