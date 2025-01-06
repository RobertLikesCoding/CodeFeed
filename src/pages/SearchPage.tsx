import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PostsList from "../components/Posts/PostsList";
import { fetchSearchQuery, Post } from "../components/services/api/redditAPI";

const SearchPage = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query");

    if (query) {
      setSearchTerm(query)
      const fetchPosts = async () => {
        const data = await fetchSearchQuery(query);
        setPosts(data);
      }
      fetchPosts();
    }
  }, [location.search])


  return (
    <>
      <h1>Search: { searchTerm }</h1>
      <p>Sort by</p>
      <section>
        {posts ? <PostsList posts={posts} /> : <p>No results found</p>}
      </section>
    </>
  )
}

export default SearchPage;