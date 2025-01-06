import styles from "./NavBar.module.scss";
import SearchBar from "./SearchBar/SearchBar";

const NavBar = () => {
  return (
    <>
      <nav className={`${styles.navbar} flex-center`}>
        <span className={styles.logo}>CodeFeed</span>
        <SearchBar />
      </nav>
    </>
  );
};

export default NavBar;
