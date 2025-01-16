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
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchTopics = async () => {
      setHasError(false);
      setIsLoading(true);

      if (topic) {
        const data = await fetchSubreddits(topic);
        if (!data) {
          setHasError(true);
        } else {
          setContent(data);
        }
      }
      setIsLoading(false);
    };

    fetchTopics();
  }, [topic]);

  return (
    <>
      <h3>{title}</h3>
      {isLoading ? (
        <div className="flex-center">Loading...</div>
      ) : hasError ? (
        <div className="flex-center">Couldn't find related subreddits.</div>
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
