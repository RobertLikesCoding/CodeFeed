import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import '@testing-library/jest-dom';
import Layout from "./Layout";
import Frontend from "../pages/FrontendPage";
import Backend from "../pages/BackendPage";
import FullStack from "../pages/FullstackPage";
import Latest from "../pages/LatestPage";

describe("Layout", () => {
  test("should render Frontend heading when clicking frontend tab", () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Latest />} />
            <Route path="frontend" element={<Frontend />} />
            <Route path="backend" element={<Backend />} />
            <Route path="fullstack" element={<FullStack />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /Latest/ })).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Frontend/));
    expect(screen.getByRole('heading', { name: /Frontend/ })).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Backend/));
    expect(screen.getByRole('heading', { name: /Backend/ })).toBeInTheDocument();

    fireEvent.click(screen.getByText(/FullStack/));
    expect(screen.getByRole('heading', { name: /FullStack/ })).toBeInTheDocument();
  });
});
