import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
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
    render(<PageInfo topic={"frontend"} />);

    const subreddits = await screen.findAllByRole("listitem");

    expect(subreddits.length).toBe(5);
  });

  test("should handle an empty API response", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: { children: [] } }),
      })
    ) as jest.Mock;

    render(<PageInfo topic={"frontend"} />);

    const notice = await screen.findByText("No subreddits found for this topic.");

    expect(notice).toBeInTheDocument();
  });
});
