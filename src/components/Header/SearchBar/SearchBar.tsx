import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBar.module.scss";

interface PropsType {
  inputIsVisible: boolean;
  setInputIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
}

const SearchBar: React.FC<PropsType> = ({
  inputIsVisible,
  // setInputIsVisible,
  // isMobile,
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

  // const toggleInputVisibility = () => {
  //   setInputIsVisible(!inputIsVisible);
  // };

  return (
    <div className={`${styles.searchBar} flex-center`}>
          {!inputIsVisible && (
            <div className={`${styles.inputContainer} ${!inputIsVisible && styles.fade}`}>
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
          )}
        </div>
  )

  /* return (
    <>
      {isMobile ? (
        <div className={`${styles.searchBar} flex-center`}>
          {!inputIsVisible && (
            <div className={`${styles.inputContainer} ${!inputIsVisible && styles.fade}`}>
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
          )}
        </div>
      ) : (
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

          {inputIsVisible ? (
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles.mobileSearchIcon}
              onClick={toggleInputVisibility}
              data-testid="mobile-search-toggle"
            />
          ) : (
            <FontAwesomeIcon
              icon={faXmark}
              className={styles.mobileSearchIcon}
              onClick={toggleInputVisibility}
            />
          )}
        </div>
      )}
    </>
  ); */
};

export default SearchBar;
