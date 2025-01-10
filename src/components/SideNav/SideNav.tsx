import { Link } from "react-router-dom";
import SubredditsList from "../Subreddits/SubredditsList";
import styles from "../SideNav/SideNav.module.scss";
import { useParams } from "react-router-dom";

const SideNav: React.FC = () => {
  const { topic } = useParams<string>();

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
          <Link to="/topics/fullstack">FullStack</Link>
        </li>
      </ul>
      <SubredditsList title="Popular" topic={topic ? topic : "development"} />
      <SubredditsList title="Other" topic="game+development" />
    </div>
  );
};

export default SideNav;
