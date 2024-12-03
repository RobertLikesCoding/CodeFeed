import { useState, useEffect } from "react";
import PostsList from "../components/Posts/PostsList";
import { fetchSearchQuery } from "../utils/redditAPI";
import { Post } from "../utils/redditAPI";

const Latest = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetchSearchQuery("web+development");
      setPosts(data);
      console.log(data)
    }

    fetchPosts();
  }, [])


  return (
    <>
      <h1>Latest</h1>
      <p>Sort by</p>
      <PostsList posts={posts && posts} />
    </>
  )
}

export default Latest;