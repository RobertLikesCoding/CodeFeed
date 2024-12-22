import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CommentItem from "./CommentItem";


const CommentsList = () => {
  const comments = useSelector((state: RootState) => state.post.comments)

  return (
    <>
      {comments.map((comment) => {
        console.log(comment)
        return <CommentItem key={comment.data.id} comment={comment} />
      })}
    </>
  )
}

export default CommentsList;