import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import UserInfo from "../UserInfo/UserInfo";
import { Post } from "../services/api/redditAPI";
import placeHolderImage from "../../assets/placeholder_thumbnail.jpg";
import { fetchPostDetailsThunk } from "../../redux/querySearch/postDetailsSlice";

interface PostProps {
  post: Post['data'];
}

const PostItem: React.FC<PostProps> = ({ post: { id, title, ups, num_comments, author, created, thumbnail } }) => {
  const { subreddit } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  async function handleClickPost() {
    console.log("Hello from PostItem");
    if (subreddit && id) {
      dispatch(fetchPostDetailsThunk({ subreddit, postId: id }));
      navigate(`/subreddits/${subreddit}/${id}`);
    }
  }

  return (
    <div data-testid="post" onClick={handleClickPost}>
      <img src={ thumbnail === "" ? placeHolderImage : thumbnail } alt="thumbnail of post." />
      <div>
        <UserInfo author={author} created={created}/>
        <h3>{title}</h3>
        <div>
          <i>{ups} upvotes</i>
          <i>{num_comments} comments</i>
        </div>
      </div>
    </div>
  )
}

export default PostItem;