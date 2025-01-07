import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBar.module.scss";

interface PropsType {
  inputIsVisible: boolean;
  setInputIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<PropsType> = ({
  inputIsVisible,
  setInputIsVisible,
}) => {
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

  const toggleInputVisibility = () => {
    setInputIsVisible(!inputIsVisible);
  };

  return (
    <>
      <div className={`${styles.searchBar} flex-center`}>
        <div className={`${styles.inputContainer}`}>
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

        {/* Toggle icon for mobile view */}
        {inputIsVisible ? (
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.mobileSearchIcon}
            onClick={toggleInputVisibility}
          />
        ) : (
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.mobileSearchIcon}
            onClick={toggleInputVisibility}
          />
        )}
      </div>
    </>
  );
};

export default SearchBar;
