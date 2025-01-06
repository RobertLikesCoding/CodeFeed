import { useNavigate } from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo";
import { Post } from "../services/api/redditAPI";
import placeHolderImage from "../../assets/placeholder_thumbnail.jpg";

interface PostProps {
  post: Post['data'];
}

const PostItem: React.FC<PostProps> = ({ post: { id, title, ups, num_comments, author, created, thumbnail, subreddit } }) => {
  const navigate = useNavigate();

  async function handleClickPost() {
    if (subreddit && id) {
      navigate(`/r/${subreddit}/${id}`);
    } else {
      navigate(`/r/${subreddit}/${id}`)
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