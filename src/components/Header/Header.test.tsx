import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Header from "./Header";
// import { resizeWindow } from "../../helpers/testHelpers";

describe("Header", () => {
  test("should render logo and searchbar", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logo = screen.getByText("CodeFeed");
    const searchBar = screen.getByRole("textbox");

    expect(logo).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
  });

  test("should not render mobile icons in desktop size", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.queryByTestId("mobile-icons")).not.toBeInTheDocument();
  });
});
