import { useState, useEffect } from "react";
import PostsList from "../components/Posts/PostsList";
import { fetchSearchQuery, Post } from "../components/services/api/redditAPI";

const Latest = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [query, setQuery] = useState<string | null>(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setQuery(queryParams.get("query"));

    if (query) {
      const fetchPosts = async () => {
        const data = await fetchSearchQuery(query);
        setPosts(data);
      }
      fetchPosts();
    }
  }, [])


  return (
    <>
      <h1>Search: { query }</h1>
      <p>Sort by</p>
      <PostsList posts={posts && posts} />
    </>
  )
}

export default Latest;