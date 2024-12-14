import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBar from "./SearchBar/SearchBar";


const NavBar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <span className={styles.logo}>CodeFeed</span>
        <ul>
          <li className="">
            <Link to="/">Latest</Link>
          </li>
          <li className="">
            <Link to="/topics/frontend">Frontend</Link>
          </li>
          <li className="">
            <Link to="backend">Backend</Link>
          </li>
          <li className="">
            <Link to="fullstack">FullStack</Link>
          </li>
        </ul>
        <SearchBar />
      </nav>
    </>
  );
};

export default NavBar;
