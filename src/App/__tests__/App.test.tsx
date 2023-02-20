import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { DonationsMetricList, Update } from "types/aws";
import { store } from "store/store";
import App from "../App";

const mockMetrics: DonationsMetricList = {
  donations_daily_count: 0,
  donations_daily_amount: 0,
  donations_total_amount: 0,
};

jest.mock("services/aws/business_metrics", () => ({
  __esModule: true,
  useMetricsListQuery: () => ({
    data: mockMetrics,
  }),
}));

const mockUpdate: Update = { last_update: "", endowments: [] };
jest.mock("services/aws/leaderboard", () => ({
  __esModule: true,
  useLeaderboardsQuery: () => ({
    data: mockUpdate,
  }),
}));

//test comment 3

const heroText = /Reflecting on the past/i;
const marketLink = /marketplace/i;
const loaderTestId = "loader";

describe("App.tsx tests", () => {
  // const governanceLinkText = /governance/i;

  window.scrollTo = jest.fn();

  test("Visit top level pages", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    // footer is immediately rendered
    // role here https://www.w3.org/TR/html-aria/#docconformance
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();

    const market = screen.getByRole("link", {
      name: marketLink,
    });
    expect(market).toBeInTheDocument();

    //marketplace is being lazy loaded
    expect(screen.getByTestId(loaderTestId)).toBeInTheDocument();
    //marketplace is finally loaded
    expect(
      await screen.findByRole("heading", { name: heroText }, { timeout: 3000 })
    ).toBeInTheDocument();
    expect(screen.queryByTestId(loaderTestId)).toBeNull();

    //user goes back to Marketplace
    fireEvent.click(
      screen.getByRole("link", {
        name: marketLink,
      })
    );
    //marketplace is already lazy loaded on first visit
    expect(screen.getByRole("heading", { name: heroText })).toBeInTheDocument();
    expect(screen.queryByTestId(loaderTestId)).toBeNull();
  });
});
