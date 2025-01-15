import { Link } from "react-router-dom";
import SubredditsList from "../Subreddits/SubredditsList";
import styles from "../SideNav/SideNav.module.scss";
import { useMediaQuery } from "react-responsive";

const SideNav: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: "768px" });

  return (
    <div className={isMobile ? styles.sidenavMobile : styles.sidenav} hidden={isMobile}>
      <h3>Topics</h3>
      <ul>
        <li>
          <Link to="/">Latest</Link>
        </li>
        <li>
          <Link to="/topics/Frontend">Frontend</Link>
        </li>
        <li>
          <Link to="/topics/Backend">Backend</Link>
        </li>
        <li>
          <Link to="/topics/Fullstack">Fullstack</Link>
        </li>
      </ul>
      <SubredditsList title="Popular" topic="programming development" />
      <SubredditsList title="Other" topic="javascript typescript ruby" />
    </div>
  );
};

export default SideNav;
