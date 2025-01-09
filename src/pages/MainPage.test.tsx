import { screen, render, fireEvent } from "@testing-library/react";
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

  // test("should render Frontend heading when clicking frontend tab", async () => {

  // });
});
