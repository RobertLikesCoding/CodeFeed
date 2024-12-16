import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostsList from "../components/Posts/PostsList";
import { fetchSearchQuery, Post } from "../components/services/api/redditAPI";

const MainPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { topic } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const data = topic
          ? await fetchSearchQuery(topic)
          : await fetchSearchQuery("web+development");
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts: ", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [topic]);

  return (
    <section>
      <h1>{topic ? topic : "Latest"}</h1>
      <p>Sort by</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : posts?.length !== 0 ? (
          <PostsList posts={posts} />
        ) : (
          <p>No results found</p>
        )}
    </section>
  );
};

export default MainPage;
