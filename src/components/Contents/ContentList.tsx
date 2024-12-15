import { useState, useEffect } from "react";
import ContentItem from "./ContentItem";

interface Props {
  title: string;
  topic: string;
}

const ContentsList = ({ topic, title }: Props) => {
  const {content, setContent} = useState([]);

  useEffect(() => {
    //fetch subreddits with topic as query
  })

  return (
    <>
      <h3>{ title }</h3>
      {content.map((item) => {
        return <ContentItem item={item} />
      })}
    </>
  )
}

export default ContentsList;