import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import Dashboard from "pages/Dashboard";
import Login from "pages/Login/Login";
import Register from "pages/registration/index";
import TCA from "pages/TCA/TCA";
import { app, site } from "../types/routes";
import AppFoot from "components/Footers/AppFoot";
import Fund from "pages/Fund/Fund";
import Charity from "pages/Charity/Charity";
import { WalletProvider } from "@terra-money/wallet-provider";
import { mainnet, walletConnectChainIds } from "./chains";
import Leaderboard from "pages/Leaderboard/Leaderboard";
import Withdraw from "pages/Withdraw/Withdraw";
import Marketplace from "pages/Marketplace/Marketplace";
import { UseWalletProvider } from "use-wallet";
import Test from "pages/Test";

const App = () => {
  //{match.path} is '/app'
  const { path } = useRouteMatch();
  const location = useLocation();

  return (
    <div className={`grid bg-gradient-to-b from-blue-accent to-black-blue`}>
      <WalletProvider
        defaultNetwork={mainnet}
        walletConnectChainIds={walletConnectChainIds}
      >
        <UseWalletProvider
          connectors={{
            torus: { chainId: 1 },
            //TODO: get proper url
            ledger: {
              chainId: 1,
              url: "https://mainnet.infura.io/v3/f7ca16d6c4704dee939ca7557896cf07",
            },
          }}
        >
          <Switch>
            <Redirect from="/:url*(/+)" to={location.pathname.slice(0, -1)} />
            <Route path={`${path}/${app.dashboard}`} component={Dashboard} />
            <Route
              path={`${path}/${app.marketplace}`}
              component={Marketplace}
            />
            <Route path={`${path}/${app.charity}`} component={Charity} />
            <Route path={`${path}/${app.login}`} component={Login} />
            <Route path={`${path}/${app.register}`} component={Register} />
            <Route path={`${path}/${app.tca}`} component={TCA} />
            <Route path={`${path}/${app.test}`} component={Test} />
            <Route
              path={`${path}/${app.withdraw}/:address`}
              component={Withdraw}
            />
            <Route path={`${path}${app.index}`} component={Leaderboard} />
            <Route path={`${path}${app.index}`} component={Leaderboard} />
            <Redirect from="*" to={site.home} />
          </Switch>
          <AppFoot />
        </UseWalletProvider>
      </WalletProvider>
    </div>
  );
};

export default App;
