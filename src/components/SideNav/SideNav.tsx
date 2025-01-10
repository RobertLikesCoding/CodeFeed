import { Link } from "react-router-dom";
import SubredditsList from "../Subreddits/SubredditsList";

const SideNav: React.FC = () => {
  return (
    <div className="sidenav">
          <h3>Topics</h3>
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
          <SubredditsList title="Popular" topic="development" />
          <SubredditsList title="Other" topic="game+development" />
        </div>
  )
}

export default SideNav;