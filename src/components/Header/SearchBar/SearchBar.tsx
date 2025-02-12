import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBar.module.scss";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyUp = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchQuery) {
      setSearchQuery("");
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className={`${styles.searchBar} flex-center`}>
      <div className={`${styles.inputContainer} ${styles.fade}`}>
        <label htmlFor="query" hidden />
        <input
          type="text"
          name="query"
          id="query"
          placeholder="e.g. 'React'"
          aria-label="search query"
          value={searchQuery}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={styles.searchIcon}
        />
      </div>
    </div>
  );
};

export default SearchBar;
