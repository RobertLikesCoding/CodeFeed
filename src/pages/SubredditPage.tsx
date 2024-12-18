import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PostsList from "../components/Posts/PostsList";
import InfoBox from "../components/InfoBox/InfoBox";
import { fetchPostsThunk } from "../redux/querySearch/querySearchSlice";

const SubredditPage: React.FC = () => {
  const { subreddit } = useParams();
  const posts = useSelector((state: RootState) => state.searchResult.posts)
  const isLoading = useSelector((state: RootState) => state.searchResult.isLoading)
  const hasError = useSelector((state: RootState) => state.searchResult.hasError)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPostsThunk(subreddit));
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