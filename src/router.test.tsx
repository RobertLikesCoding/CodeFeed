import Layout from "./components/Layout"
import { screen, render, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom';

describe("Layout", () => {
  test("should render Frontend heading when clicking frontend tab", () => {
    render(<Layout />);

    const frontendTab = screen.getByText("Frontend");
    fireEvent.click(frontendTab);
    const heading = screen.getByRole("h1");

    expect(heading).toBeInTheDocument();
  })
})