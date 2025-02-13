import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { mockPosts } from "./__mocks__/redditAPI.mock";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(mockPosts),
  })
) as jest.Mock;

describe("App Integration", () => {
  test("renders Frontend link", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const frontendLink = screen.getByRole("link", { name: /frontend/i });
    expect(frontendLink).toBeInTheDocument();
    fireEvent.click(frontendLink);

    waitFor(() => {
      const frontendHeading = screen.getByRole("heading", {
        name: /frontend/i,
      });
      expect(frontendHeading).toBeInTheDocument();
    });
  });
});
