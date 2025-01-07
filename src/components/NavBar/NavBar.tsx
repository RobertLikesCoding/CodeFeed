import { useState } from "react";
import styles from "./NavBar.module.scss";
import SearchBar from "./SearchBar/SearchBar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [inputIsVisible, setInputIsVisible] = useState<boolean>(true);

  return (
    <>
      <nav className={`${styles.navbar}`}>
        {inputIsVisible && <span className={styles.logo}>CodeFeed</span>}
        <SearchBar
          inputIsVisible={inputIsVisible}
          setInputIsVisible={setInputIsVisible}
        />
        {/* <FontAwesomeIcon icon={faBars} /> */}
      </nav>
    </>
  );
};

export default NavBar;
