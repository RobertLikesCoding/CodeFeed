import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header", () => {
  test("should show logo, links and searchbar", () => {
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
});
