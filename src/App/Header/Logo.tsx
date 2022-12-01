import betaWhiteLogo from "assets/images/angelprotocol-logo-white.svg";

export default function Logo() {
  return (
    <a
      href="https://angelprotocol.io/"
      title="Go to Marketing page"
      className="w-32"
    >
      <img src={betaWhiteLogo} alt="" className="w-full h-full" />
    </a>
  );
}
