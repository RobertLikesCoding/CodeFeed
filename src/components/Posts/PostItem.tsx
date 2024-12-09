import UserInfo from "../UserInfo/UserInfo";
// import { Post } from "../../utils/redditAPI";

interface PostProps {
  post: {
    title: string;
    num_comments: number;
    ups: number;
    author: string;
    created: number;
  }
}

const PostItem: React.FC<PostProps> = ({ post: { title, ups, num_comments, author, created } }) => {
  return (
    <div>
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