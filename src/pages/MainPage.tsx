import { useState, useEffect } from "react";
import PostsList from "../components/Posts/PostsList";
import { fetchSearchQuery, Post } from "../components/services/api/redditAPI";

interface MainPageProps {
  topic: string | null;
}

const MainPage = ({ topic }: MainPageProps) => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetchSearchQuery("");
      setPosts(data);
    }

    fetchPosts();
  }, [])


  return (
    <>
      <h1>Main</h1>
      <p>Sort by</p>
      {posts?.length !== 0 ? <PostsList posts={posts} /> : <p>No results found</p>}
    </>
  )
}

export default MainPage;