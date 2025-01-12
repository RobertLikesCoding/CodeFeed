import { screen, render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SideNav from "./SideNav";
import { mockSubreddits } from "../../__mocks__/redditAPI.mock";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockSubreddits),
  })
) as jest.Mock;

describe("SideNav", () => {
  test("should render navigation links", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SideNav />
        </BrowserRouter>
      </Provider>
    );

    waitFor(() => {
      expect(screen.getByText("Latest")).toBeInTheDocument();
      expect(screen.getByText("Frontend")).toBeInTheDocument();
      expect(screen.getByText("Backend")).toBeInTheDocument();
      expect(screen.getByText("Fullstack")).toBeInTheDocument();
    });
  });
});
