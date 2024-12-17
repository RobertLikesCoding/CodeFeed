import { useState, useEffect } from "react";
import { Subreddit, querySubreddits } from "../services/api/redditAPI";
interface Props {
  topic: string | undefined;
}

const InfoBox: React.FC<Props> = ({ topic }) => {
  const [subreddits, setSubreddits] = useState<Subreddit[]>([]);

  useEffect(() => {
    const fetchSubreddits = async () => {
      try {
        if (!topic) {
          return;
        }
        const data = await querySubreddits(topic);
        setSubreddits(data);
      } catch (error) {
        console.error("Error fetching info box: ", error);
      }
    };

    fetchSubreddits();
  }, [topic]);

  return (
    <aside>
      <h3>{topic}</h3>
      <p>Most popular {topic} subreddits:</p>

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
                href={`https://reddit.com/${subreddit.data.display_name_prefixed}`}
              >
                {subreddit.data.display_name_prefixed}
              </a>
            </li>
          );
        })
      )}
    </aside>
  );
};

export default InfoBox;
