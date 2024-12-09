import { useState, useEffect } from "react";
import PostsList from "../components/Posts/PostsList";
import { fetchSearchQuery, Post } from "../components/services/api/redditAPI";

const LatestPage = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetchSearchQuery("web+development");
      setPosts(data);
    }

    fetchPosts();
  }, [])


  return (
    <>
      <h1>Latest</h1>
      <p>Sort by</p>
      {posts ? <PostsList posts={posts} /> : <p>No results found</p>}
    </>
  )
}

export default LatestPage;