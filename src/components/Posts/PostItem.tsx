import { useNavigate } from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo";
import { Post } from "../services/api/redditAPI";
import placeHolderImage from "../../assets/placeholder_thumbnail.jpg";

interface PostProps {
  post: Post['data'];
}

const PostItem: React.FC<PostProps> = ({post}) => {
  const navigate = useNavigate();

  async function handleClickPost() {
    if (post.subreddit && post.id) {
      navigate(`/r/${post.subreddit}/${post.id}`);
    } else {
      navigate(`/r/${post.subreddit}/${post.id}`)
    }
  }

  return (
    <div data-testid="post" onClick={handleClickPost}>
      <img src={ post.thumbnail === "" ? placeHolderImage : post.thumbnail } alt="thumbnail of post." />
      <div>
        <UserInfo author={post.author} created={post.created}/>
        <h3>{post.title}</h3>
        <div>
          <i>{post.ups} upvotes</i>
          <i>{post.num_comments} comments</i>
        </div>
      </div>
    </div>
  )
}

export default PostItem;