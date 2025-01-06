import styles from "./NavBar.module.scss";
import SearchBar from "./SearchBar/SearchBar";

const NavBar = () => {
  return (
    <>
      <nav className={`${styles.navbar}`}>
        <span className={styles.logo}>CodeFeed</span>
        <SearchBar />
      </nav>
    </>
  );
};

export default NavBar;
