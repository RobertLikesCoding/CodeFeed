import PostItem from "./PostItem";
import { Post } from "../../utils/redditAPI";

interface Props {
  posts: Post[] | null;
}

const PostsList: React.FC<Props>= ({posts}) => {
  return (
    <>
      {posts?.map((post, index) => {
        return <PostItem key={index} post={post.data} />
      })}
    </>
  )
}

export default PostsList;