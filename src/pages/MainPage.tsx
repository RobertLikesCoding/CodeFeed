import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import PostsList from "../components/Posts/PostsList";
import PageInfo from "../components/PageInfo/PageInfo";
import { fetchPostsThunk } from "../redux/slices/postsSlice";

// Validating topics to prevent injection
const allowedTopics = ["Frontend", "Backend", "Fullstack"];

const MainPage = () => {
  const { topic } = useParams();
  const isValidTopic = topic && allowedTopics.includes(topic);
  const posts = useSelector((state: RootState) => state.fetchPosts.posts);
  const isLoading = useSelector(
    (state: RootState) => state.fetchPosts.isLoading
  );
  const hasError = useSelector((state: RootState) => state.fetchPosts.hasError);
  const dispatch = useDispatch<AppDispatch>();
  const isTablet = useMediaQuery({ maxWidth: "875px" });

  useEffect(() => {
    dispatch(fetchPostsThunk(topic));
  }, [dispatch, topic]);

  return (
    <div className="mainSection">
      <section>
        <h1>
          {isValidTopic ? topic : "Latest"}
        </h1>
        <p>Sort by</p>
        {isLoading ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : hasError ? (
          <p>Error loading posts. Please try again.</p>
        ) : posts.length !== 0 ? (
          <PostsList posts={posts} />
        ) : (
          <p style={{ textAlign: "center" }}>No results found</p>
        )}
      </section>
      <PageInfo topic={topic ? topic : "web development"} isTablet={isTablet} />
    </div>
  );
};

export default MainPage;
