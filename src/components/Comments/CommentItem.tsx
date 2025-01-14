import { Comment } from "../services/api/redditAPI";
import CommentsList from "./CommentsList";
import UserInfo from "../UserInfo/UserInfo";
import { parseBodyHTML } from "../../helpers/helpers";

interface Props {
  comment: Comment;
}

const CommentItem = ({ comment }: Props) => {
  const replies = comment.data.replies?.data?.children || [];

  return (
    <div className="comment" data-testid="comment" >
      <UserInfo author={comment.data.author} created={comment.data.created} color=""/>
      <div
        className="comment-body"
        dangerouslySetInnerHTML={{ __html: parseBodyHTML(comment.data.body_html) }}
      ></div>
      <p>{comment.data.ups}</p>
      {replies.length === 0 ? null : <CommentsList comments={replies} />}
    </div>
  );
};

export default CommentItem;