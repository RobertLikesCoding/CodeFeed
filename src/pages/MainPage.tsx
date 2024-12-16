import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PostsList from "../components/Posts/PostsList";
import { fetchPostsThunk } from "../redux/querySearch/querySearchSlice";

const MainPage = () => {
  const { topic } = useParams();
  const posts = useSelector((state: RootState) => state.searchResult.posts)
  const isLoading = useSelector((state: RootState) => state.searchResult.isLoading)
  // const hasError = useSelector((state: RootState) => state.searchResult.hasError)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPostsThunk(topic))
  }, [dispatch, topic]);

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
