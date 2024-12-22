import { Comment } from "../services/api/redditAPI";
import CommentsList from "./CommentsList";
import UserInfo from "../UserInfo/UserInfo";

interface Props {
  comment: Comment;
}

const CommentItem = ({ comment }: Props) => {
  const replies = comment.data.replies?.data?.children || [];
  console.log(comment);
  console.log(replies);

  return (
    <div className="comment">
      <UserInfo author={comment.data.author} created={comment.data.created} />
      <p>{comment.data.body}</p>
      <p>{comment.data.ups}</p>
      {replies.length === 0 ? null : <CommentsList comments={replies} />}
    </div>
  );
};

export default CommentItem;