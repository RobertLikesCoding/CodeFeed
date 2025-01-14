import { Link } from "react-router-dom";
import styles from "./UserInfo.module.scss";
import SubredditIcon from "../UI/SubredditIcon";
import { parseTimestamp } from "../../helpers/helpers";

interface UserInfoProps {
  author?: string;
  created: number;
  subreddit?: string;
  color: string;
}

const UserInfo: React.FC<UserInfoProps> = ({
  author,
  created,
  subreddit,
  color,
}) => {
  const timestamp = parseTimestamp(created);
  console.log(subreddit);

  return (
    <div className={styles.userInfo}>
      {subreddit ? (
        <>
          <SubredditIcon color={color} small={true} />
          <Link to={`/r/${subreddit}`} className="flex flex-center gap">
            {subreddit}
          </Link>
        </>
      ) : (
        <p>{author}</p>
      )}
      •<p>{timestamp}</p>
    </div>
  );
};

export default UserInfo;
