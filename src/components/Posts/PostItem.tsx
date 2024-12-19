import UserInfo from "../UserInfo/UserInfo";
import { Post } from "../services/api/redditAPI";
import placeHolderImage from "../../assets/placeholder_thumbnail.jpg";
import { fetchPostDetailsThunk } from "../../redux/querySearch/postDetailsSlice";

interface PostProps {
  post: Post['data'];
}

async function handleClickPost() {

  // dispatch(fetchPostDetailsThunk({ subreddit: post.subreddit, postId: post.id }));
}

const PostItem: React.FC<PostProps> = ({ post: { title, ups, num_comments, author, created, thumbnail } }) => {
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