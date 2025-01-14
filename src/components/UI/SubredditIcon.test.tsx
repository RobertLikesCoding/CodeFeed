import { screen, render } from "@testing-library/react";
import SubredditIcon from "./SubredditIcon";

describe("Subreddit ", () => {
  test("should render small icon when small prop is true", () => {
    render(<SubredditIcon small={true} color="#FFF" />);

    const icon = screen.getByText("r/");

    expect(icon).toHaveClass("small");
  });

  test("should render normal icon when small prop is false", () => {
    render(<SubredditIcon small={false} color="#FFF" />);

    const icon = screen.getByText("r/");

    expect(icon).not.toHaveClass("small");

  });

  test("should render color from props", () => {
    render(<SubredditIcon small={false} color="#776464" />);

    const icon = screen.getByText("r/");

    expect(icon).toHaveStyle("backgroundColor: #776464")
  });
});
