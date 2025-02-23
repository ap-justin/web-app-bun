import { Navigate, Route, Routes } from "react-router-dom";
import Seo from "components/Seo";
import { APP_NAME, DAPP_URL } from "constants/env";
import About from "./About";
import ConnectWallet from "./ConnectWallet";
import Fees from "./Fees";
import Layout from "./Layout";
import Management from "./Management";
import Maturity from "./Maturity";
import Splits from "./Splits";
import Start from "./Start";
import Success from "./Success";
import Summary from "./Summary";
import Whitelists from "./Whitelists";
import { routes, steps } from "./constants";

//Launchpad component
export default function Launchpad() {
  return (
    <>
      <Seo
        title={`Create your Angel Smart Treasury - ${APP_NAME}`}
        url={`${DAPP_URL}/register`}
      />
      <Routes>
        <Route
          path="steps"
          element={<Layout classes="my-0 md:my-20 justify-self-center" />}
        >
          <Route path={steps[2]} element={<Management step={2} />} />
          <Route path={steps[3]} element={<Whitelists step={3} />} />
          <Route path={steps[4]} element={<Maturity step={4} />} />
          <Route path={steps[5]} element={<Splits step={5} />} />
          <Route path={steps[6]} element={<Fees step={6} />} />
          <Route path={steps[7]} element={<ConnectWallet step={7} />} />
          <Route path={steps[8]} element={<Summary />} />
          <Route index element={<About step={1} />} />
          <Route path="*" element={<Navigate to="." />} />
        </Route>
        <Route
          path={routes.success}
          element={<Success classes="justify-self-center my-10 sm:my-20 " />}
        />
        <Route
          index
          element={<Start classes="place-self-center my-10 sm:my-20" />}
        />
      </Routes>
    </>
  );
}
