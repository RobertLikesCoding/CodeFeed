import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchPostDetailsThunk } from "../redux/querySearch/postDetailsSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const PostDetailsPage: React.FC = () => {
  const { subreddit, postId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const postDetails = useSelector((state: RootState) => state.post.details);
  const isLoading = useSelector((state: RootState) => state.post.isLoading);
  const hasError = useSelector((state: RootState) => state.post.hasError);

  useEffect(() => {
    if (subreddit && postId) {
      dispatch(fetchPostDetailsThunk({ subreddit, postId }));
    }
  }, [dispatch, subreddit, postId]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : hasError ? (
        <p>Error loading post details. Please try again.</p>
      ) : postDetails ? (
        <div className="flex-column">
          <h1>PostDetails</h1>
          <p>{postDetails.data.title}</p>
          <p>{postDetails.data.selftext}</p>
          <p>{postDetails.data.ups}</p>
          <p>{postDetails.data.created}</p>
        </div>
      ) : (
        <p>Couldn't find post data. Please reload the page.</p>
      )}
    </>
  );
};

export default PostDetailsPage;
