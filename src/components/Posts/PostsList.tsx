import PostItem from "./PostItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const PostsList: React.FC= () => {
  const posts = useSelector((state: RootState) => state.fetchPosts.posts)

  return (
    <>
      {posts?.map((post, index) => {
        return <PostItem key={index} post={post.data} />
      })}
    </>
  )
}

export default PostsList;