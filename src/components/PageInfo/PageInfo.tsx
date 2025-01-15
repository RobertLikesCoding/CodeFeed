import { useState, useEffect } from "react";
import { SubredditAbout, fetchSubredditInfo } from "../services/api/redditAPI";
import styles from "../PageInfo/PageInfo.module.scss";
import SubredditsList from "../Subreddits/SubredditsList";

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
          <div className="flex-column flex-center">
            <p>Members:</p>
            <p>{aboutSubreddit.subscribers}</p>
          </div>
          <div className="flex-column flex-center">
        <p>Online:</p>
        <p>{aboutSubreddit.active_user_count}</p>
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
