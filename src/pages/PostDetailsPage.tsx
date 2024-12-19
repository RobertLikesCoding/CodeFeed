import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

const PostDetailsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const postDetails = useSelector((state: RootState) => state.post.details);
  const comments = useSelector((state: RootState) => state.post.comments);

  return (
    <>
      <h1>PostDetails</h1>
    </>
  )
}

export default PostDetailsPage;