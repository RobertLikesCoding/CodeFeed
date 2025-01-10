import { useState, useEffect } from "react";
import SubredditLink from "./SubredditLink";
import { fetchSubreddits } from "../services/api/redditAPI";
import { Subreddit } from "../services/api/redditAPI";

interface Props {
  title: string;
  topic: string;
}

const SubredditsList = ({ topic, title }: Props) => {
  const [content, setContent] = useState<Subreddit[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        setIsLoading(true);
        if (topic) {
          const data = await fetchSubreddits(topic);
          setContent(data);
        }
      } catch (error) {
        console.error("Failed to fetch topics: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTopics();
  }, [topic]);

  return (
    <>
      <h3>{title}</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {content?.map((item, index) => {
            return <SubredditLink key={index} item={item} />;
          })}
        </ul>
      )}
    </>
  );
};

export default SubredditsList;
