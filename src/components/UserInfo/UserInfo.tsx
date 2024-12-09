interface UserInfoProps {
  author: string;
  created: number;
}

const UserInfo: React.FC<UserInfoProps> = ({author, created}) => {
  return (
    <div>
      {/* <img src="" alt="" /> */}
      <p>{author}</p>
      <p>Time since Post: {created}</p>
    </div>
  )
}

export default UserInfo;