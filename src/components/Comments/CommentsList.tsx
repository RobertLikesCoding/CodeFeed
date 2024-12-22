import CommentItem from "./CommentItem";
import { Comment } from "../services/api/redditAPI";

interface Props {
  comments: Comment[]
}

const CommentsList: React.FC<Props> = ({comments}) => {
  return (
    <>
      {comments.map((comment) => {
        return <CommentItem key={comment.data.id} comment={comment} />
      })}
    </>
  )
}

export default CommentsList;