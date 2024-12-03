import UserInfo from "../UserInfo/UserInfo";

const PostItem = ({post: Post}) => {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <UserInfo />
        <p>Post Title</p>
        <div>
          <i>Post Upvotes</i>
          <i>Post Comments</i>
        </div>
      </div>
    </div>
  )
}

export default PostItem;