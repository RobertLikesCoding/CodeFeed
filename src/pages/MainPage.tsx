import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PostsList from "../components/Posts/PostsList";
import InfoBox from "../components/InfoBox/InfoBox";
import { fetchPostsThunk } from "../redux/querySearch/postsSlice";

// Validating topics to prevent injection
const allowedTopics = ["frontend", "backend", "fullstack"];

const MainPage = () => {
  const { topic } = useParams();
  const posts = useSelector((state: RootState) => state.fetchPosts.posts)
  const isLoading = useSelector((state: RootState) => state.fetchPosts.isLoading)
  const hasError = useSelector((state: RootState) => state.fetchPosts.hasError)
  const dispatch = useDispatch<AppDispatch>();

  const isValidTopic = topic && allowedTopics.includes(topic);

  useEffect(() => {
    dispatch(fetchPostsThunk(topic));
  }, [dispatch, topic]);

  return (
    <div className="flex">
      <section>
        <h1 className="text-3xl font-bold underline">{isValidTopic ? topic : "Latest"}</h1>
        <p>Sort by</p>
        {isLoading ? (
          <p>Loading...</p>
        ) : hasError ? (
          <p>Error loading posts. Please try again.</p>
        ) : posts?.length !== 0 ? (
            <PostsList posts={posts} />
          ) : (
            <p>No results found</p>
          )}
      </section>
      <InfoBox topic={topic ? topic : "web development"} />
    </div>
  );
};

export default MainPage;
