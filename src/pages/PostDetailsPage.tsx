import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchPostDetailsThunk } from "../redux/querySearch/postDetailsSlice";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CommentsList from "../components/Comments/CommentsList";
import { parseBodyHTML } from "../helpers/parseHtml";
import InfoBox from "../components/InfoBox/InfoBox";

const PostDetailsPage: React.FC = () => {
  const { subreddit, postId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const postDetails = useSelector((state: RootState) => state.post.details);
  const comments = useSelector((state: RootState) => state.post.comments);
  const isLoading = useSelector((state: RootState) => state.post.isLoading);
  const hasError = useSelector((state: RootState) => state.post.hasError);
  const navigate = useNavigate();

  useEffect(() => {
    if (subreddit && postId) {
      dispatch(fetchPostDetailsThunk({ subreddit, postId }));
    }
  }, [dispatch, subreddit, postId]);

  return (
    <>
      <section>
        <p onClick={() => navigate(-1)}>Back</p>
        {isLoading ? (
          <p data-testid="loadingState">Loading...</p>
        ) : hasError ? (
          <p data-testid="errorState">
            Error loading post details. Please try again.
          </p>
        ) : postDetails ? (
          <div data-testid="detailsState" className="flex-column">
            <div className="post">
              <h1>PostDetails</h1>
              <p>{postDetails.data.title}</p>
              {postDetails.data.selftext_html && (
                <div
                  className="comment-body"
                  dangerouslySetInnerHTML={{
                    __html: parseBodyHTML(postDetails.data.selftext_html),
                  }}
                ></div>
              )}
              {postDetails.data.url && (
                <a href={postDetails.data.url}>{postDetails.data.url}</a>
              )}
              <p>{postDetails.data.ups}</p>
              <p>{postDetails.data.created}</p>
            </div>
            <CommentsList comments={comments} />
          </div>
        ) : (
          <p>Couldn't find post data. Please reload the page.</p>
        )}
        <InfoBox topic={subreddit} />
      </section>
    </>
  );
};

export default PostDetailsPage;
