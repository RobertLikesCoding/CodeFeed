import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./NavBar.module.scss";
import SearchBar from "./SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: "576px" });
  const [inputIsVisible, setInputIsVisible] = useState<boolean>(isMobile);

  useEffect(() => {
    setInputIsVisible(true);
  }, [isMobile]);

  return (
    <>
      <nav className={`${styles.navbar}`}>
        {inputIsVisible && <span className={styles.logo}>CodeFeed</span>}
        <SearchBar
          inputIsVisible={inputIsVisible}
          setInputIsVisible={setInputIsVisible}
          isMobile={isMobile}
        />
        <FontAwesomeIcon
          icon={faBars}
          className={styles.burgerIcon}
          // onClick={handleBurgerMenu} NEEDS TO BE PASSED FROM MAINPAGE COMPONENT
        />
      </nav>
    </>
  );
};

export default NavBar;
