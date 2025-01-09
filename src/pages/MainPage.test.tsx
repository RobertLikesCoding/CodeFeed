import { screen, render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import "@testing-library/jest-dom";
import MainPage from "./MainPage";
import { mockPosts } from "../__mocks__/redditAPI.mock";
import { Provider } from "react-redux";
import { store } from "../redux/store";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockPosts),
  })
) as jest.Mock;

describe("MainPage", () => {
  test("displays latest posts initially with latest heading", async () => {
    render (
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <MainPage />
        </MemoryRouter>
      </Provider>
    )
    const heading = screen.getByRole("heading", { name: /latest/i });
    const posts = await screen.findAllByTestId("post");

    expect(heading).toBeInTheDocument();
    expect(posts.length).toBeGreaterThan(0);
  })

  test("renders Frontend content when navigating to /topics/frontend", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/topics/frontend"]}>
          <Routes>
            <Route path="/topics/:topic" element={<MainPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const heading = screen.getByRole("heading", { name: /frontend/i, level: 1 });
    expect(heading).toBeInTheDocument();

    const posts = await screen.findAllByTestId("post");
    expect(posts.length).toBeGreaterThan(0);
  });
});
