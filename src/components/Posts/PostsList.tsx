import PostItem from "./PostItem";
import { Post } from "../services/api/redditAPI";

interface Props {
  posts: Post[];
}

const PostsList: React.FC<Props> = ({posts}) => {
  return (
    <>
      {posts?.map((post, index) => {
        return <PostItem key={index} post={post.data} />
      })}
    </>
  )
}

export default PostsList;