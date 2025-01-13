import styles from "./UserInfo.module.scss";
import SubredditIcon from "../UI/SubredditIcon";

interface UserInfoProps {
  author?: string;
  created: number;
  subreddit?: string;
  color: string;
}

const UserInfo: React.FC<UserInfoProps> = ({author, created, subreddit, color}) => {
  return (
    <div className={styles.userInfo}>
      {subreddit ? (
        <p className="flex flex-center gap"><SubredditIcon color={color} small={true}/> {subreddit}</p>
      ) : (
        <p>{author}</p>
      )}
      •
      <p>{created} ago</p>
    </div>
  )
}

export default UserInfo;