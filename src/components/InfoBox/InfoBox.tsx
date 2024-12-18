import { useState, useEffect } from "react";
import { Subreddit, fetchSubreddits, fetchSubredditUsers } from "../services/api/redditAPI";
interface Props {
  topic?: string | undefined;
  subreddit?: string | undefined;
}

const InfoBox: React.FC<Props> = ({ topic, subreddit }) => {
  const [subreddits, setSubreddits] = useState<Subreddit[]>([]);
  const [activeUsers, setActiveUsers] = useState<Users[]>([])

  useEffect(() => {
    const fetchInfoBoxData = async () => {
      try {
        if (topic) {
          const data = await fetchSubreddits(topic);
          setSubreddits(data);
        } else if (subreddit) {
          const data = await fetchSubredditUsers(subreddit);
          setActiveUsers(data);
        } else {
          return;
        }
      } catch (error) {
        console.error("Error fetching info box: ", error);
      }
    };

    fetchInfoBoxData();
  }, [topic, subreddit]);

  return (
    <aside>
      <h3>{topic || subreddit}</h3>
      <p>Most popular related subreddits:</p>

      {/*
        - if topic show subreddits
        - if subreddit show users
      */}
      {subreddits.length === 0 ? (
        <p>No subreddits found.</p>
      ) : (
        subreddits.map((subreddit) => {
          return (
            <li key={subreddit.data.id}>
              <a
                href={`https://reddit.com/${subreddit.data.display_name}`}
              >
                r/{subreddit.data.display_name}
              </a>
            </li>
          );
        })
      )}
    </aside>
  );
};

export default InfoBox;
