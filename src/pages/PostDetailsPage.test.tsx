import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { store } from "../redux/store";
import PostDetailsPage from "./PostDetailsPage";
import { configureStore } from "@reduxjs/toolkit";
import postDetailsReducer from "../redux/querySearch/postDetailsSlice";
import { mockPostDetails, mockComments } from "../__mocks__/redditAPI.mock";

describe("PostDetailsPage", () => {
  test("should render initially as Loading", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <PostDetailsPage />
        </Provider>
      </MemoryRouter>
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
      },
    };
    const storeWithDetails = configureStore({
      reducer: {
        post: postDetailsReducer,
      },
      preloadedState,
    });

    render(
      <MemoryRouter>
        <Provider store={storeWithDetails}>
          <PostDetailsPage />
        </Provider>
      </MemoryRouter>
    );

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
      },
    };
    const storeWithError = configureStore({
      reducer: {
        post: postDetailsReducer,
      },
      preloadedState,
    });

    render(
      <MemoryRouter>
        <Provider store={storeWithError}>
          <PostDetailsPage />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId("errorState")).toBeInTheDocument();
    expect(
      screen.getByText("Error loading post details. Please try again.")
    ).toBeInTheDocument();
  });

  test("should render comments when provided", async () => {
    const preloadedState = {
      post: {
        details: mockPostDetails,
        comments: mockComments,
        isLoading: false,
        hasError: false,
      },
    };
    const storeWithError = configureStore({
      reducer: {
        post: postDetailsReducer,
      },
      preloadedState,
    });

    render(
      <MemoryRouter>
        <Provider store={storeWithError}>
          <PostDetailsPage />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId("comment")).toBeInTheDocument();
  });

  test("should go to previous page when clicking 'back'", () => {
    render(
      <MemoryRouter
      // This creates a mock browser history stack. Previous-page is the first page and the second argument
      // is the current page.
        initialEntries={["/previous-page", "/r/reactjs/comments/123"]}
        initialIndex={1}
      >
        <Provider store={store}>
          <Routes>
            <Route
              path="/r/reactjs/comments/:id"
              element={<PostDetailsPage />}
            />
            <Route
              // This creates a previous page with a element to target on it
              path="/previous-page"
              element={
                <div data-testid="previous-page-content">Previous Page</div>
              }
            />
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    const backButton = screen.getByText("Back");
    fireEvent.click(backButton);

    expect(screen.getByText("Previous Page")).toBeInTheDocument();
  });
});
