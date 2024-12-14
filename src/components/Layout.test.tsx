import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import '@testing-library/jest-dom';
import Layout from "./Layout";
import Frontend from "../pages/SubredditPage";
import Backend from "../pages/PostDetailsPage";
import FullStack from "../pages/MainPage";
import Latest from "../pages/MainPage";
import { Post } from "./services/api/redditAPI";

const mockPost: Post = {
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
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(mockPost), // Mock the response data as needed
  })
) as jest.Mock;

describe("Layout", () => {
  test("should render Frontend heading when clicking frontend tab", () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Latest />} />
            <Route path="frontend" element={<Frontend />} />
            <Route path="backend" element={<Backend />} />
            <Route path="fullstack" element={<FullStack />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: "Latest" })).toBeInTheDocument();

    fireEvent.click(screen.getByText("Frontend"));
    expect(screen.getByRole('heading', { name: "Frontend" })).toBeInTheDocument();

    fireEvent.click(screen.getByText("Backend"));
    expect(screen.getByRole('heading', { name: "Backend" })).toBeInTheDocument();

    fireEvent.click(screen.getByText("FullStack"));
    expect(screen.getByRole('heading', { name: "FullStack" })).toBeInTheDocument();
  });
});
