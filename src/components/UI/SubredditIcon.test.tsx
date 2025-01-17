import { screen, render } from "@testing-library/react";
import SubredditIcon from "./SubredditIcon";

describe("Subreddit ", () => {
  test("should render small icon when small prop is 'small'", () => {
    render(<SubredditIcon size={"small"} color="#FFF" />);

    const icon = screen.getByText("r/");

    expect(icon).toHaveClass("small");
  });

  test("should render medium size icon when size is not small", () => {
    render(<SubredditIcon size={"medium"} color="#FFF" />);

    const icon = screen.getByText("r/");

    expect(icon).toHaveClass("medium");

  });

  test("should render large size icon when prop is 'large'", () => {
    render(<SubredditIcon size={"large"} color="#FFF" />);

    const icon = screen.getByText("r/");

    expect(icon).toHaveClass("large");

  });

  test("should render color from props", () => {
    render(<SubredditIcon size={"small"} color="#776464" />);

    const icon = screen.getByText("r/");

    expect(icon).toHaveStyle("backgroundColor: #776464")
  });
});
