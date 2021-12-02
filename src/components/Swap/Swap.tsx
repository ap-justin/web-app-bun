// import { useEffect, useState } from "react";
import useTooltip from "hooks/useTooltip";
import { FaExclamationCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { useState } from "react";
import { RiArrowDownCircleLine } from "react-icons/ri";
import CurrencyInputPanel from "./CurrencyInputPanel";
import { MdOutlineClose } from "react-icons/md";
import { useSetModal } from "components/Nodal/Nodal";

const SwapHeader = () => {
  const { enter, exit, Tooltip } = useTooltip(AdjustSlippage);

  return (
    <div className="flex justify-between items-center font-heading relative text-white">
      <span className="inline-block text-2xl font-bold">
        {" "}
        Buy <span className="uppercase">Halo</span>
      </span>
      <button
        className="bg-transparent p-1 relative"
        onClick={enter}
        onMouseLeave={exit}
      >
        <Tooltip />
        <IoSettingsSharp size="30" />
      </button>
    </div>
  );
};

function CurrencyDivider() {
  return (
    <div className="divider flex flex-col items-center my-3">
      <hr className="w-full" />
      <RiArrowDownCircleLine
        className="text-thin-blue bg-white -mt-4 cursor-pointer"
        size="30"
      />
    </div>
  );
}

export const ConnectButton = ({ onHandleClick }: { onHandleClick: any }) => {
  return (
    <button
      onClick={onHandleClick}
      className="disabled:bg-grey-accent bg-angel-blue hover:bg-thin-blue focus:bg-thin-blue text-center w-full h-12 rounded-3xl tracking-widest uppercase text-md font-bold font-heading text-white shadow-sm focus:outline-none"
    >
      Connect wallet
    </button>
  );
};

export default function Swap() {
  return (
    <div className="w-128 p-10 min-h-3/4">
      <SwapHeader />
      <div className="w-full bg-white shadow-xl rounded-lg p-5 mt-4">
        <CurrencyInputPanel></CurrencyInputPanel>
        <CurrencyDivider></CurrencyDivider>
        <CurrencyInputPanel></CurrencyInputPanel>
        <div className="swap-effect flex flex-col justify-between font-heading my-5 gap-3">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">Price</p>
            <p className="usd-price text-xs text-gray-400">
              1 UST = 89843.034 HALO
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">Price Impact</p>
            <p className="usd-price text-xs text-gray-400">0.010524%</p>
          </div>
        </div>
        <ConnectButton onHandleClick={() => {}}></ConnectButton>
      </div>
    </div>
  );
}

const AdjustSlippage = () => {
  const slippages: string[] = ["0.5", "1.0", "2.0"];
  const [currentSlippage, setCurrentSlippage] = useState(slippages[0]);
  const [dynamicSlippage, setDynamicSlippage] = useState("20");

  const handleSlippagechange = (e: any) => {
    setDynamicSlippage(e.target.value);
    setCurrentSlippage(e.target.value);
  };

  return (
    <div className="absolute -left-52 xl:-left-32 bg-white font-heading text-angel-grey rounded-md text-sm shadow-sm z-10 p-5 w-80 text-left">
      <p className="text-md font-semibold">
        Slippage tolerance <FaExclamationCircle className="inline" />
      </p>
      <div className="flex justify-start gap-3 w-full mt-2">
        {slippages.map((slippage) => (
          <button
            className={`bg-transparent text-md font-normal border-2 rounded-lg py-1 px-2 ${
              currentSlippage === slippage
                ? "border-angel-blue"
                : "border-gray-300"
            }`}
            onClick={() => setCurrentSlippage(slippage)}
          >
            {slippage}%
          </button>
        ))}
        <div
          className={`bg-transparent text-md font-normal border-2 rounded-lg py-1 px-2 ${
            currentSlippage === dynamicSlippage
              ? "border-angel-blue"
              : "border-gray-300"
          }`}
          onClick={() => setCurrentSlippage(dynamicSlippage)}
        >
          <input
            type="number"
            min="1"
            contentEditable={true}
            onChange={handleSlippagechange}
            defaultValue={dynamicSlippage}
            className="border-0 p-0 h-full w-6 inline bg-transparent focus:border-0 outline-none m-0 slippage-input"
          ></input>
          <span>%</span>
        </div>
      </div>
    </div>
  );
};

export const SwapWrapper = (props: { inModal: true }) => {
  const { hideModal } = useSetModal();

  return (
    <div
      className={`max-w-md w-full relative ${
        props.inModal ? "rounded-md" : ""
      }`}
    >
      {props.inModal && (
        <button
          onClick={hideModal}
          className="absolute right-2 top-2 text-angel-grey hover:text-black"
        >
          <MdOutlineClose size={30} />
        </button>
      )}
      <Swap />
    </div>
  );
};

export const SwapModal = () => {
  return <SwapWrapper inModal />;
};
