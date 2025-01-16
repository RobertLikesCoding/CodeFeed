import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import styles from "../PageInfo/PageInfo.module.scss";
import SubredditsList from "../Subreddits/SubredditsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { parseBodyHTML } from "../../helpers/helpers";

interface Props {
  topic?: string | undefined;
  subreddit?: string | undefined;
}

const PageInfo: React.FC<Props> = ({ topic }) => {
  const subredditDetails = useSelector((state: RootState) => state.subredditDetails.details)

  if (topic) {
    return (
      <aside className={`${styles.communities}`}>
        <h3>Communities</h3>
        <p>Most popular related subreddits:</p>
        <SubredditsList title="" topic={topic} />
      </aside>
    );
  }

  if (subredditDetails) {
    const subredditDescription = parseBodyHTML(subredditDetails.description_html);

    return (
      <aside className={`${styles.about} flex-column gap-1`}>
        <h3>r/{subredditDetails.display_name}</h3>
        <div>{subredditDescription}</div>
        <div className="flex gap-2">
          <div className="flex-column">
            <span>{subredditDetails.subscribers}</span>
            <div className="flex flex-center gap">
              <FontAwesomeIcon icon={faUserGroup} />
              <p>Members</p>
            </div>
          </div>
          <div className="flex-column">
            <span>{subredditDetails.active_user_count}</span>
            <div className="flex flex-center gap">
              <div className={styles.online}></div>
              <p>Online</p>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside>
      <p>No data found.</p>
    </aside>
  );
};

export default PageInfo;
