import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";

import PostsList from "../components/Posts/PostsList";
import { fetchPostsThunk } from "../redux/slices/postsSlice";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const posts = useSelector((state: RootState) => state.fetchPosts.posts);
  const isLoading = useSelector((state: RootState) => state.fetchPosts.isLoading);
  const hasError = useSelector((state: RootState) => state.fetchPosts.hasError);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (query) {
      dispatch(fetchPostsThunk(query));
    }
  }, [dispatch, query]);

  return (
    <div className="mainSection">
      <section>
        <h1>Results for: {query}</h1>
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
    </div>
  );
};

export default SearchPage;
