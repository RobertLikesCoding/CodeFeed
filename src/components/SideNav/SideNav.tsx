import { Link } from "react-router-dom";
import SubredditsList from "../Subreddits/SubredditsList";
import styles from "../SideNav/SideNav.module.scss";

const SideNav: React.FC = () => {
  return (
    <div className={styles.sidenav}>
      <h3>Topics</h3>
      <ul>
        <li>
          <Link to="/">Latest</Link>
        </li>
        <li>
          <Link to="/topics/frontend">Frontend</Link>
        </li>
        <li>
          <Link to="/topics/backend">Backend</Link>
        </li>
        <li>
          <Link to="/topics/fullstack">Fullstack</Link>
        </li>
      </ul>
      <SubredditsList title="Popular" topic="programming development" />
      <SubredditsList title="Other" topic="javascript typescript ruby" />
    </div>
  );
};

export default SideNav;
