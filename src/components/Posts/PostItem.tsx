import UserInfo from "../UserInfo/UserInfo";
import { Post } from "../services/api/redditAPI";
import placeHolderImage from "../../assets/placeholder_thumbnail.jpg";
import { fetchPostDetails } from "../services/api/redditAPI";

interface PostProps {
  post: Post['data'];
}

async function handleClickPost() {
  const postDetails = await fetchPostDetails("Frontend", "1hhpgaj");
  console.log(postDetails);
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