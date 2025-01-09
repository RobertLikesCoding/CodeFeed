import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchBar from "./SearchBar";

const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual<typeof import("react-router-dom")>("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("Searchbar", () => {
  test("searching should navigate to SearchPage with query in URL", () => {
    render(
      <MemoryRouter>
        <SearchBar
          inputIsVisible={true}
          setInputIsVisible={jest.fn()}
          isMobile={false}
        />
      </MemoryRouter>
    );

    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "React" } });
    fireEvent.keyUp(searchInput, { key: "Enter", code: "Enter" });

    expect(mockedNavigate).toHaveBeenCalledWith("/search?query=React");
  });

  test("search field should be empty after searching", () => {
    render(
      <MemoryRouter>
        <SearchBar
          inputIsVisible={true}
          setInputIsVisible={jest.fn()}
          isMobile={false}
        />
      </MemoryRouter>
    );

    const searchInput = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "React" } });
    fireEvent.keyUp(searchInput, { key: "Enter", code: "Enter" });

    expect(searchInput.value).toBe("");
  });
});
