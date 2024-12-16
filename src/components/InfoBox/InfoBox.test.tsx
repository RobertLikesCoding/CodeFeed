import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import InfoBox from "./InfoBox";
import { mockSubreddits } from "../../__mocks__/redditAPI.mock";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockSubreddits),
  })
) as jest.Mock;

describe("InfoBox", () => {
  test("should render list of 5 subreddits", async () => {
    render(<InfoBox topic={"frontend"} />);

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

    render(<InfoBox topic={"frontend"} />);

    const notice = await screen.findByText("No subreddits found.");

    expect(notice).toBeInTheDocument();
  });
});
