import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import SubredditsList from "./SubredditsList";
import { mockSubreddits } from "../../__mocks__/redditAPI.mock";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockSubreddits),
  })
) as jest.Mock;

describe("SubredditsList", () => {
  test("should render list of subreddits with a title header", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SubredditsList topic={"games"} title={"Popular"} />
        </BrowserRouter>
      </Provider>
    );

    const header = await screen.findByText("Popular");
    const subredditItems = await screen.findAllByTestId("subreddit");

    expect(header).toBeInTheDocument();
    expect(subredditItems.length).toBeGreaterThan(1);
  });

  test("should render loading message when fetching data", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SubredditsList topic={"games"} title={"Popular"} />
        </BrowserRouter>
      </Provider>
    );

    const loadingMessage = await screen.findByText("Loading...");

    expect(loadingMessage).toBeInTheDocument();
  });
});
