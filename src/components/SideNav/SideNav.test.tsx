import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SideNav from "./SideNav";

describe("SideNav", () => {
  test("should render navigation links", () => {
    render (
      <BrowserRouter>
        <SideNav />
      </BrowserRouter>
    )

    expect(screen.getByText("Latest")).toBeInTheDocument();
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("Fullstack")).toBeInTheDocument();
  })
});