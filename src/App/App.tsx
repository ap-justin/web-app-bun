import * as Sentry from "@sentry/react";
import { WalletProvider } from "@terra-money/wallet-provider";
import { lazy } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import ModalContext from "contexts/ModalContext";
import WalletContext from "contexts/WalletContext";
import useScrollTop from "hooks/useScrollTop";
import { chainOptions } from "constants/chainOptions";
import { IS_AST } from "constants/env";
import { appRoutes } from "constants/routes";
import Layout from "./Layout";

const Admin = lazy(() => import("pages/Admin"));
const Profile = lazy(() => import("pages/Profile"));
const Donations = lazy(() => import("pages/Donations"));
const Leaderboard = lazy(() => import("pages/Leaderboard"));
const Marketplace = lazy(() => import("pages/Marketplace"));
const Registration = lazy(() => import("pages/Registration"));
const Launchpad = lazy(() => import("pages/Launchpad"));
const Donate = lazy(() => import("pages/Donate"));
const DonateFiatThanks = lazy(() => import("pages/DonateFiatThanks"));
const Gift = lazy(() => import("pages/Gift"));
const DonateWidget = lazy(() => import("pages/DonateWidget"));

export default function App() {
  const location = useLocation();
  useScrollTop(location.pathname);

  const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

  return (
    <WalletProvider {...chainOptions}>
      <WalletContext>
        <ModalContext>
          <SentryRoutes>
            <Route
              path={`${appRoutes.donate_widget}/:id`}
              element={<DonateWidget />}
            />
            <Route element={<Layout />}>
              <Route
                path={`${appRoutes.profile}/:id/*`}
                element={<Profile legacy />}
              />
              <Route path={`${appRoutes.admin}/:id/*`} element={<Admin />} />

              <Route
                path={`${appRoutes.donations}/:address`}
                element={<Donations />}
              />
              <Route path={`${appRoutes.donate}/:id`} element={<Donate />} />
              <Route
                path={appRoutes.donate_fiat_thanks}
                element={<DonateFiatThanks />}
              />
              <Route path={appRoutes.leaderboard} element={<Leaderboard />} />
              <Route
                path={`${appRoutes.register}/*`}
                element={IS_AST ? <Launchpad /> : <Registration />}
              />
              <Route path={`${appRoutes.gift}/*`} element={<Gift />} />
              <Route path={appRoutes.marketplace} element={<Marketplace />} />

              <Route path={appRoutes.marketplace}>
                <Route path=":id/*" element={<Profile />} />
                <Route index element={<Marketplace />} />
              </Route>
            </Route>
            <Route
              path="*"
              element={
                <Navigate
                  replace
                  to={IS_AST ? appRoutes.register : appRoutes.marketplace}
                />
              }
            />
          </SentryRoutes>
        </ModalContext>
      </WalletContext>
    </WalletProvider>
  );
}
