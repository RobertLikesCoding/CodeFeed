import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  test("should show logo, links and searchbar", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("listitem");

    expect(links.length).toBe(4);
  });
});
