import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import SubredditBanner from "../components/UI/SectionBanner";
import PostsList from "../components/Posts/PostsList";
import PageInfo from "../components/PageInfo/PageInfo";
import { fetchSubredditPostsThunk } from "../redux/slices/postsSlice";
import { fetchSubredditDetailsThunk } from "../redux/slices/subredditDetailsSlice";

const SubredditPage: React.FC = () => {
  const { subreddit } = useParams();
  const posts = useSelector((state: RootState) => state.fetchPosts.posts);
  const isLoading = useSelector(
    (state: RootState) => state.fetchPosts.isLoading
  );
  const hasError = useSelector((state: RootState) => state.fetchPosts.hasError);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (subreddit) {
      dispatch(fetchSubredditPostsThunk(subreddit));
      dispatch(fetchSubredditDetailsThunk(subreddit));
    }
  }, [dispatch, subreddit]);

  return (
    <>
      <section>
        <SubredditBanner />
        <p>Sort by</p>
        {isLoading ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : hasError ? (
          <p style={{ textAlign: "center" }}>
            Error loading posts. Please try again.
          </p>
        ) : posts.length !== 0 ? (
          <PostsList posts={posts} />
        ) : (
          <p>No results found</p>
        )}
      </section>
      <PageInfo />
    </>
  );
};

export default SubredditPage;
