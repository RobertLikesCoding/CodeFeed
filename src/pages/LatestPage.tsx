import { useState, useEffect } from "react";
import PostsList from "../components/Posts/PostsList";

const Latest: React.FC = () => {
  const [posts, setPosts] = useState([""]);

  return (
    <>
      <h1>Latest</h1>
      <p>Sort by</p>
      <PostsList posts={posts} />
    </>
  )
}

export default Latest;