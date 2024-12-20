import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import PostDetailsPage from "./PostDetailsPage";
import { configureStore } from "@reduxjs/toolkit";
import postDetailsReducer from "../redux/querySearch/postDetailsSlice";
import { mockPostDetails } from "../__mocks__/redditAPI.mock";

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
    const preloadedState = {
      post: {
        details: mockPostDetails,
        comments: [],
        isLoading: false,
        hasError: false,
      }
    };
    const storeWithDetails = configureStore({
      reducer: {
        post: postDetailsReducer,
      },
      preloadedState
    });

    render(
      <Provider store={storeWithDetails}>
        <PostDetailsPage />
      </Provider>
    );

    // Check that post details are displayed
    expect(screen.getByTestId("detailsState")).toBeInTheDocument();
    expect(screen.getByText(mockPostDetails.data.title)).toBeInTheDocument();
  });

  test("should render error state when there's an error", async () => {
    const preloadedState = {
      post: {
        details: null,
        comments: [],
        isLoading: false,
        hasError: true,
      }
    };
    const storeWithError = configureStore({
      reducer: {
        post: postDetailsReducer,
      },
      preloadedState
    });

    render(
      <Provider store={storeWithError}>
        <PostDetailsPage />
      </Provider>
    );

    // Check that error message is displayed
    expect(screen.getByTestId("errorState")).toBeInTheDocument();
    expect(screen.getByText("Error loading post details. Please try again.")).toBeInTheDocument();
  });
});
