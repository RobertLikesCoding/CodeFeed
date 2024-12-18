import { useState, useEffect } from "react";
import {
  Subreddit,
  SubredditAbout,
  fetchSubreddits,
  fetchSubredditInfo,
} from "../services/api/redditAPI";
interface Props {
  topic?: string | undefined;
  subreddit?: string | undefined;
}

const InfoBox: React.FC<Props> = ({ topic, subreddit }) => {
  const [popularSubreddits, setPopularSubreddits] = useState<Subreddit[]>([]);
  const [aboutSubreddit, setAboutSubreddit] = useState<SubredditAbout | null>(null);
  console.log(aboutSubreddit)

  useEffect(() => {
    const fetchInfoBoxData = async () => {
      try {
        if (topic) {
          const data = await fetchSubreddits(topic);
          setPopularSubreddits(data);
        } else if (subreddit) {
          const data = await fetchSubredditInfo(subreddit);
          setAboutSubreddit(data);
        } else {
          return;
        }
      } catch (error) {
        console.error("Error fetching info box: ", error);
      }
    };

    fetchInfoBoxData();
  }, [topic, subreddit]);

  if (aboutSubreddit) {
    return (
      <aside>
        <h3>r/{aboutSubreddit.display_name}</h3>
        <p>Subscribers: {aboutSubreddit.subscribers}</p>
        <p>{aboutSubreddit.public_description}</p>
        <p>Active Users: {aboutSubreddit.active_user_count}</p>
      </aside>
    );
  }

  if (topic) {
    return (
      <aside>
        <h3>{topic}</h3>
        <p>Most popular related subreddits:</p>
        {popularSubreddits.length === 0 ? (
          <p>No subreddits found for this topic.</p>
        ) : (
          <ul>
            {popularSubreddits.map((subreddit) => (
              <li key={subreddit.data.id}>
                <a href={`https://reddit.com/r/${subreddit.data.display_name}`}>
                  r/{subreddit.data.display_name}
                </a>
              </li>
            ))}
          </ul>
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

export default InfoBox;
