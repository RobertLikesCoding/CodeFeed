import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PostsList from "../components/Posts/PostsList";
import InfoBox from "../components/InfoBox/InfoBox";
import { fetchSubredditPostsThunk } from "../redux/querySearch/postsSlice";

const SubredditPage: React.FC = () => {
  const { subreddit } = useParams();
  const posts = useSelector((state: RootState) => state.fetchPosts.posts)
  const isLoading = useSelector((state: RootState) => state.fetchPosts.isLoading)
  const hasError = useSelector((state: RootState) => state.fetchPosts.hasError)
  const dispatch = useDispatch<AppDispatch>();
  console.log(posts);

  useEffect(() => {
    dispatch(fetchSubredditPostsThunk(subreddit));
  }, [dispatch, subreddit]);

  return (
    <>
      <section>
        <h1>{subreddit}</h1>
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
      <InfoBox subreddit={subreddit} />
    </>
  );
}

export default SubredditPage;