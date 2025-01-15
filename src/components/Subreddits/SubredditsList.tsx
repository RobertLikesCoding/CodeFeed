import { useState, useEffect } from "react";
import SubredditItem from "./SubredditItem";
import { fetchSubreddits } from "../services/api/redditAPI";
import { Subreddit } from "../services/api/redditAPI";

interface Props {
  title: string;
  topic: string | null;
}

const SubredditsList: React.FC<Props> = ({ topic, title }) => {
  const [content, setContent] = useState<Subreddit[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchTopics = async () => {
      setError(false);
      setIsLoading(true);

      if (topic) {
        const data = await fetchSubreddits(topic);
        if (!data) {
          setError(true);
        } else {
          setContent(data);
        }
      }
      setIsLoading(false);
    };

    fetchTopics();
  }, [topic]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h3>{title}</h3>
      {error ? (
        <p>Couldn't find related subreddits.</p>
      ) : (
        <ul>
          {content?.map((item, index) => {
            return <SubredditItem key={index} item={item} />;
          })}
        </ul>
      )}
    </>
  );
};

export default SubredditsList;
