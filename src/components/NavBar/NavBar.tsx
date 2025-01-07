import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./NavBar.module.scss";
import SearchBar from "./SearchBar/SearchBar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: "576px" });
  const [inputIsVisible, setInputIsVisible] = useState<boolean>(isMobile);

  return (
    <>
      <nav className={`${styles.navbar}`}>
        {inputIsVisible && <span className={styles.logo}>CodeFeed</span>}
        <SearchBar
          inputIsVisible={inputIsVisible}
          setInputIsVisible={setInputIsVisible}
          isMobile={isMobile}
        />
        {/* <FontAwesomeIcon icon={faBars} /> */}
      </nav>
    </>
  );
};

export default NavBar;
