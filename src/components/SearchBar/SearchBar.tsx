import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { fetchSearchQuery } from "../services/api/redditAPI";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useState<string>("");

  return (
    <div>
      <input
        type="text"
        name="query"
        id="query"
        placeholder="e.g. 'React'"
        aria-label="search query"
        value={searchQuery}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(event.target.value)
        }
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
};

export default SearchBar;
