import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const PostDetailsPage: React.FC = () => {
  const postDetails = useSelector((state: RootState) => state.post.details);
  console.log(postDetails);

  return (
    <div className="flex-column">
    {postDetails === null ? (<p>Loading...</p>)
    : (
      <>
        <h1>PostDetails</h1>
        <p>{postDetails.data.title}</p>
        <p>{postDetails.data.selftext}</p>
      </>
    )}

    </div>
  )
}

export default PostDetailsPage;