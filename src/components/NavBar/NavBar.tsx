import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import SearchBar from "./SearchBar/SearchBar";

const NavBar = () => {
  return (
    <>
      <nav className={`${styles.navbar} flex-center`}>
        <span className={styles.logo}>CodeFeed</span>
        <ul>
          <li className="">
            <Link to="/">Latest</Link>
          </li>
          <li className="">
            <Link to="/topics/frontend">Frontend</Link>
          </li>
          <li className="">
            <Link to="/topics/backend">Backend</Link>
          </li>
          <li className="">
            <Link to="/topics/fullstack">FullStack</Link>
          </li>
        </ul>
        <SearchBar />
      </nav>
    </>
  );
};

export default NavBar;
