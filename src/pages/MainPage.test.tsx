import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import "@testing-library/jest-dom";
import MainPage from "./MainPage";
import NavBar from "../components/NavBar/NavBar";
import { Post } from "../components/services/api/redditAPI";

const mockPost = {
  data: {
    children: [
      {
        data: {
          id: "1",
          author: "test_author",
          created: 1620000000,
          num_comments: 10,
          url: "https://www.example.com",
          subreddit_name_prefixed: "r/test",
          title: "Test Post",
          ups: 100,
          public_description: "This is a test post description",
        },
      },
    ],
  },
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(mockPost), // Mock the response data as needed
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
});
