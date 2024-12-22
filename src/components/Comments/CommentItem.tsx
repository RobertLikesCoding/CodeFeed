import { Comment } from "../services/api/redditAPI";
import UserInfo from "../UserInfo/UserInfo";

interface Props {
  comment: Comment;
}

const CommentItem = ({ comment }: Props) => {

  return (
    <div className="comment">
      <UserInfo author={comment.data.author} created={comment.data.created} />
      <p>{comment.data.body}</p>
      <p>{comment.data.ups}</p>
    </div>
  )
}

export default CommentItem;