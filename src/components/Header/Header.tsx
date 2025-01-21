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
  const isTabletOrMobile = useMediaQuery({ maxWidth: "1280px" });
  const [showMobileSearchbar, setShowMobileSearchbar] = useState<boolean>(
    !isTabletOrMobile
  );

  useEffect(() => {
    setShowMobileSearchbar(!isTabletOrMobile);
  }, [isTabletOrMobile]);

  const toggleInputVisibility = () => {
    setShowMobileSearchbar(!showMobileSearchbar);
  };

  return (
    <nav className={`${styles.header}`}>
      {/* hide logo when mobile searchbar is shown */}
      <span
        className={`${styles.logo} ${styles.fade} ${
          isTabletOrMobile && showMobileSearchbar ? "hide" : ""
        }`}
      >
        CodeFeed
      </span>
      {/* enable toggling and rendering searchbar only in mobile mode */}
      {(!isTabletOrMobile || showMobileSearchbar) && <SearchBar />}

      {isTabletOrMobile && (
        <div className="flex-center gap-1">
          <FontAwesomeIcon
            icon={showMobileSearchbar ? faXmark : faMagnifyingGlass}
            className={styles.mobileIcons}
            onClick={toggleInputVisibility}
            data-testid="mobile-search-toggle"
          />
          <FontAwesomeIcon
            icon={faBars}
            className={styles.mobileIcons}
            // onClick={handleBurgerMenu} NEEDS TO BE PASSED FROM MAINPAGE COMPONENT
          />
        </div>
      )}
    </nav>
  );
};

export default Header;
