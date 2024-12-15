import { useState, useEffect } from "react";
import ContentItem from "./ContentItem";
import { querySubreddits } from "../services/api/redditAPI";
import { Subreddit } from "../services/api/redditAPI";

interface Props {
  title: string;
  topic: string;
}

const ContentsList = ({ topic, title }: Props) => {
  const [content, setContent] = useState<Subreddit[]>([]);

  useEffect(() => {
    //fetch subreddits with topic as query
    const fetchTopics = async () => {
      try {
        if (topic) {
          const data = await querySubreddits(topic);
          setContent(data);
        } else {
          return;
        }
      } catch (error) {
        console.error("Failed to fetch topics: ", error);
      }
    }

    fetchTopics();
  },[])

  return (
    <>
      <h3>{ title }</h3>
      {content?.map((item, index) => {
        return <ContentItem key={index} item={item} />
      })}
    </>
  )
}

export default ContentsList;