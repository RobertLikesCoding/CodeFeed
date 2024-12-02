import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";
import "@testing-library/jest-dom";

test("renders Hello, World! heading", () => {
  render(<HelloWorld />);
  const heading = screen.getByText(/Hello World!/i);
  expect(heading).toBeInTheDocument();
});