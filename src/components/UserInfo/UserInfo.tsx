interface UserInfoProps {
  userInfo: any;
}

const UserInfo = ({user: UserInfoProps}) => {
  return (
    <div>
      <img src="" alt="" />
      <p>User Name</p>
      <p>Time since Post</p>
    </div>
  )
}

export default UserInfo;