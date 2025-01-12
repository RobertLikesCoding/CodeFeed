import styles from "./UserInfo.module.scss";

interface UserInfoProps {
  author: string;
  created: number;
}

const UserInfo: React.FC<UserInfoProps> = ({author, created}) => {
  return (
    <div className={styles.userInfo}>
      {/* <img src="" alt="" /> */}
      <p>{author}</p>
      •
      <p>posted {created} days ago</p>
    </div>
  )
}

export default UserInfo;