import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import "@testing-library/jest-dom";
import MainPage from "./MainPage";
import NavBar from "../components/NavBar/NavBar";
import { mockPostsArray } from "../__mocks__/redditAPI.mock";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockPostsArray),
  })
) as jest.Mock;

describe("MainPage", () => {
  test("should render Frontend heading when clicking frontend tab", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/topics/:topic" element={<MainPage />} />
        </Routes>
      </MemoryRouter>
    );
    // verifying initial heading
    expect(screen.getByRole("heading", { name: "Latest" })).toBeInTheDocument();

    fireEvent.click(await screen.findByText("Frontend"));
    expect(
      await screen.findByRole("heading", { name: "frontend" })
    ).toBeInTheDocument();

    fireEvent.click(screen.getByText("Backend"));
    expect(
      await screen.findByRole("heading", { name: "backend" })
    ).toBeInTheDocument();

    fireEvent.click(screen.getByText("FullStack"));
    expect(
      await screen.findByRole("heading", { name: "fullstack" })
    ).toBeInTheDocument();
  });

  test("displays posts fetched from API", async () => {
    render (
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    )

    const posts = await screen.findAllByTestId("post")

    expect(posts.length).toBeGreaterThan(0);
  })
});
