import UserInfo from "../UserInfo/UserInfo";
import { Post } from "../services/api/redditAPI";

interface PostProps {
  post: Post['data'];
}

const PostItem: React.FC<PostProps> = ({ post: { title, ups, num_comments, author, created } }) => {
  return (
    <div data-testid="post" >
      {/* <img src="" alt="" /> */}
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