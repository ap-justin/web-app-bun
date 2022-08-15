import { Menu } from "@headlessui/react";
import { PropsWithChildren, useState } from "react";
import { Connection } from "contexts/WalletContext/types";
import Icon from "components/Icon";
import { WalletError } from "errors/errors";

export default function Connector(props: Connection) {
  const isMulti = "networks" in props;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    if (!isMulti) throw new Error("No network selection");
    setIsOpen((prev) => !prev);
  };

  async function handleConnect() {
    try {
      if (isMulti) throw new Error("Need to choose network first");
      await props.connect();
    } catch (_err: any) {
      let errorMsg: string;
      if (_err instanceof WalletError) {
        errorMsg = _err.message;
      } else {
        errorMsg = "Unknown error occured";
      }
      alert(errorMsg);
    }
  }

  if (isMulti) {
    return (
      <div className={`${isOpen ? "border-b border-zinc-900/10" : ""}`}>
        <button
          className={`${
            isOpen ? "" : "border-b border-zinc-900/10"
          } p-2 flex items-center gap-2 w-full items-center`}
          onClick={toggle}
        >
          <Logo logo={props.logo} />
          <Name>{isOpen ? "Select network" : props.name}</Name>
          <Icon
            type={isOpen ? "Up" : "Down"}
            className="ml-auto text-angel-grey"
          />
        </button>
        {isOpen &&
          (props?.networks || []).map((c) => <Connector {...c} network />)}
      </div>
    );
  }

  return (
    <Menu.Item
      className={`group p-2 flex items-center gap-2 w-full items-center ${
        props.network ? "" : "border-b last:border-none "
      } border-zinc-900/10`}
      onClick={handleConnect}
      as="button"
    >
      <Logo logo={props.logo} />
      <Name>{props.name}</Name>
    </Menu.Item>
  );
}

function Name(props: PropsWithChildren<{}>) {
  return (
    <p className="uppercase text-sm text-angel-grey group-hover:text-sky-500 group-active:text-amber-500">
      {props.children}
    </p>
  );
}

function Logo(props: { logo: string }) {
  return (
    <img
      src={props.logo}
      className="w-8 h-8 object-contain p-1.5 bg-white-grey"
      alt=""
    />
  );
}
