import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { fetchSearchQuery } from "../services/api/redditAPI";

const SearchBar = () => {
  const [ searchQuery, setSearchQuery ] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }

  const handleKeyUp = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchQuery("");
      await fetchSearchQuery(event.currentTarget.value);
    }
  }

  return (
    <div>
      <input
        type="text"
        name="query"
        id="query"
        placeholder="e.g. 'React'"
        aria-label="search query"
        value={searchQuery}
        onChange={ handleChange }
        onKeyUp={ handleKeyUp }
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
};

export default SearchBar;
