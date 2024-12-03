import PostItem from "./PostItem";

const PostsList = ({posts}) => {
  return (
    <>
      {posts.map((post, index) => {
        return <PostItem key={index} post={post} />
      })}
    </>
  )
}

export default PostsList;