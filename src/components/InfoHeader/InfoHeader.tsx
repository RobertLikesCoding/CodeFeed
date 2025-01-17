import { Link } from "react-router-dom";
import styles from "./InfoHeader.module.scss";
import SubredditIcon from "../UI/SubredditIcon";
import { parseTimestamp } from "../../helpers/helpers";

interface InfoHeaderProps {
  author?: string;
  created: number;
  subreddit?: string;
  color: string;
}

const InfoHeader: React.FC<InfoHeaderProps> = ({
  author,
  created,
  subreddit,
  color,
}) => {
  const timestamp = parseTimestamp(created);

  return (
    <div className={styles.infoHeader}>
      {subreddit ? (
        <>
          <SubredditIcon color={color} size="small" />
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

export default InfoHeader;
