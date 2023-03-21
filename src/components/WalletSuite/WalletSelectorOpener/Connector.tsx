import { useModalContext } from "contexts/ModalContext";
import { DisconnectedWallet } from "contexts/WalletContext";
import Image from "components/Image";

export default function Connector({ connect, logo, name }: DisconnectedWallet) {
  const { closeModal } = useModalContext();

  return (
    <button
      className="flex flex-col items-center justify-center gap-1 h-28 p-5 border border-gray-l3 rounded bg-white hover:bg-orange-l5 dark:bg-blue/50 hover:dark:bg-blue-d3 dark:border-none"
      onClick={() => {
        closeModal();
        connect();
      }}
    >
      <Image
        img={{ src: logo }}
        className="w-12 h-12 border border-prim rounded-full"
      />
      <span className="font-heading font-bold text-sm capitalize">{name}</span>
    </button>
  );
}
