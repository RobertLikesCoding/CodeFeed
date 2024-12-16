import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import "@testing-library/jest-dom";
import MainPage from "./MainPage";
import NavBar from "../components/NavBar/NavBar";
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
  test("should render Frontend heading when clicking frontend tab", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/topics/:topic" element={<MainPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    // verifying initial heading
    expect(screen.getByRole("heading", { name: "Latest", level: 1 })).toBeInTheDocument();

    fireEvent.click(await screen.findByText("Frontend"));
    expect(
      await screen.findByRole("heading", { name: "frontend", level: 1 })
    ).toBeInTheDocument();

    fireEvent.click(screen.getByText("Backend"));
    expect(
      await screen.findByRole("heading", { name: "backend", level: 1 })
    ).toBeInTheDocument();

    fireEvent.click(screen.getByText("FullStack"));
    expect(
      await screen.findByRole("heading", { name: "fullstack", level: 1 })
    ).toBeInTheDocument();
  });

  test("displays posts fetched from API", async () => {
    render (
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>
    )

    const posts = await screen.findAllByTestId("post")

    expect(posts.length).toBeGreaterThan(0);
  })
});
