import { screen, render, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { store } from "../redux/store";
import PostDetailsPage from "./PostDetailsPage";
import { mockPostDetails } from "../__mocks__/redditAPI.mock";
import postDetailsReducer from "../redux/querySearch/postDetailsSlice";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: mockPostDetails }),
  })
) as jest.Mock;

describe("PostDetailsPage", () => {
  test("should render initially as Loading", () => {
    render(
      <Provider store={store}>
        <PostDetailsPage />
      </Provider>
    );
    expect(screen.getByTestId("loadingState")).toBeInTheDocument();
  });

  test("should render post details when provided", async () => {
    const store = configureStore({
      reducer: {
        post: postDetailsReducer,
      },
      preloadedState: {
        post: {
          details: mockPostDetails,
          comments: [],
          isLoading: false,
          hasError: false,
        }
      }
    })

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/subreddits/reactjs/testId123"]}>
          <Routes>
            <Route path="/subreddits/:subreddit/:postId" element={<PostDetailsPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByTestId("detailsState")).toBeInTheDocument();
    })
    expect(screen.getByText(mockPostDetails.data.title)).toBeInTheDocument();
  });

});
