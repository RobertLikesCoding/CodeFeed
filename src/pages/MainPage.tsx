import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PostsList from "../components/Posts/PostsList";
import { fetchSearchQuery } from "../components/services/api/redditAPI";
import { setPosts, setIsLoading } from "../redux/querySearch/querySearchSlice";

const MainPage = () => {
  const { topic } = useParams();
  const posts = useSelector((state: RootState) => state.searchResult.value)
  const isLoading = useSelector((state: RootState) => state.searchResult.isLoading)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchPosts = async () => {
      dispatch(setIsLoading(true));
      try {
        const data = topic
          ? await fetchSearchQuery(topic)
          : await fetchSearchQuery("web+development");
        dispatch(setPosts(data));
      } catch (error) {
        console.error("Error fetching posts: ", error);
        dispatch(setPosts([]));
      } finally {
        dispatch(setIsLoading(false));
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
