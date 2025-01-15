import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import PageInfo from "./PageInfo";
import { mockSubreddits } from "../../__mocks__/redditAPI.mock";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockSubreddits),
  })
) as jest.Mock;

describe("PageInfo", () => {
  test("should render list of 5 subreddits", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PageInfo topic={"frontend"} />
        </BrowserRouter>
      </Provider>
    );

    const subreddits = await screen.findAllByRole("listitem");
    expect(subreddits.length).toBe(5);
  });
});
