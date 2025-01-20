import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import styles from "./Header.module.scss";
import SearchBar from "./SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: "768px" });
  const [inputIsVisible, setInputIsVisible] = useState<boolean>(isMobile);

  useEffect(() => {
    setInputIsVisible(true);
  }, [isMobile]);

  const toggleInputVisibility = () => {
    setInputIsVisible(!inputIsVisible);
  };

  return (
    <>
      <nav className={`${styles.header}`}>
        {inputIsVisible && (
          <span className={`${styles.logo} ${styles.fade}`}>CodeFeed</span>
        )}
        <SearchBar
          inputIsVisible={inputIsVisible}
          setInputIsVisible={setInputIsVisible}
          isMobile={isMobile}
        />
        <div className="flex-center gap-1">
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
          <FontAwesomeIcon
            icon={faBars}
            className={styles.burgerIcon}
            // onClick={handleBurgerMenu} NEEDS TO BE PASSED FROM MAINPAGE COMPONENT
          />
        </div>
      </nav>
    </>
  );
};

export default Header;
