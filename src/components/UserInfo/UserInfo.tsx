import styles from "./UserInfo.module.scss";
import SubredditIcon from "../UI/SubredditIcon";
import { parseTimestamp } from "../../helpers/helpers";

interface UserInfoProps {
  author?: string;
  created: number;
  subreddit?: string;
  color: string;
}

const UserInfo: React.FC<UserInfoProps> = ({author, created, subreddit, color}) => {
  const timestamp = parseTimestamp(created);

  return (
    <div className={styles.userInfo}>
      {subreddit ? (
        <p className="flex flex-center gap"><SubredditIcon color={color} small={true}/> {subreddit}</p>
      ) : (
        <p>{author}</p>
      )}
      •
      <p>{timestamp}</p>
    </div>
  )
}

export default UserInfo;