import { useState, useEffect } from "react";
import { SubredditAbout, fetchSubredditInfo } from "../services/api/redditAPI";
import styles from "../PageInfo/PageInfo.module.scss";
import SubredditsList from "../Subreddits/SubredditsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

interface Props {
  topic?: string | undefined;
  subreddit?: string | undefined;
}

const PageInfo: React.FC<Props> = ({ topic, subreddit }) => {
  const [aboutSubreddit, setAboutSubreddit] = useState<SubredditAbout | null>(
    null
  );

  useEffect(() => {
    const fetchPageInfo = async () => {
      try {
        if (subreddit) {
          const data = await fetchSubredditInfo(subreddit);
          setAboutSubreddit(data);
        } else {
          return;
        }
      } catch (error) {
        console.error("Error fetching info box: ", error);
      }
    };
    fetchPageInfo();
  }, [topic, subreddit]);

  if (aboutSubreddit) {
    return (
      <aside className={`${styles.about} flex-column gap-1`}>
        <h3>r/{aboutSubreddit.display_name}</h3>
        <p>{aboutSubreddit.public_description}</p>
        <div className="flex gap-2">
          <div className="flex-column">
            <span>{aboutSubreddit.subscribers}</span>
            <div className="flex flex-center gap">
              <FontAwesomeIcon icon={faUserGroup} />
              <p>Members</p>
            </div>
          </div>
          <div className="flex-column">
            <span>{aboutSubreddit.active_user_count}</span>
            <div className="flex flex-center gap">
              <div className={styles.online}></div>
              <p>Online</p>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  if (topic) {
    return (
      <aside className={`${styles.communities}`}>
        <h3>Communities</h3>
        <p>Most popular related subreddits:</p>
        {!topic ? (
          <i>No subreddits found for this topic.</i>
        ) : (
          <SubredditsList title="" topic={topic} />
        )}
      </aside>
    );
  }

  return (
    <aside>
      <p>Please provide a topic or subreddit to fetch data.</p>
    </aside>
  );
};

export default PageInfo;
