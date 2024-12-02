import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import "@testing-library/jest-dom";

describe("Layout", () => {
  test("should render Frontend heading when clicking frontend tab", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="frontend" element={<h1>Frontend</h1>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // Find and click the Frontend link
    const frontendTab = screen.getByText("Frontend");
    fireEvent.click(frontendTab);

    // Check that the Frontend heading is rendered
    const heading = screen.getByRole("heading", { name: /Frontend/i });
    expect(heading).toBeInTheDocument();
  });
});
