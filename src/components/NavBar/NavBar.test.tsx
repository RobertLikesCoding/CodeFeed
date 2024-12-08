import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("Navbar", () => {
  test("should show logo, links and searchbar", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const logo = screen.getByText("CodeFeed");
    const links = screen.getAllByRole("listitem");
    const searchBar = screen.getByRole("textbox");

    expect(logo).toBeInTheDocument();
    expect(links.length).toBe(4);
    expect(searchBar).toBeInTheDocument();
  });
});
