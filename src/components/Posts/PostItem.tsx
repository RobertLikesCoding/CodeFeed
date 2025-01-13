import { useNavigate } from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo";
import { Post } from "../services/api/redditAPI";
import styles from "./PostItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

interface PostProps {
  post: Post["data"];
}

const PostItem: React.FC<PostProps> = ({ post }) => {
  const navigate = useNavigate();

  async function handleClickPost() {
    if (post.subreddit && post.id) {
      navigate(`/r/${post.subreddit}/${post.id}`);
    } else {
      navigate(`/r/${post.subreddit}/${post.id}`);
    }
  }

  return (
    <>
      <div className="gradientBorderLine"></div>
      <div
        data-testid="post"
        onClick={handleClickPost}
        className={`${styles.postContainer}`}
      >
        {post.thumbnail === "self" ? null : (
          <div className={styles.imgContainer}>
            <img src={post.thumbnail} alt="thumbnail of post." />
          </div>
        )}
        <div className={styles.contentContainer}>
          <UserInfo author={post.author} created={post.created} />
          <div className={`${styles.content}`}>
            <h4>{post.title}</h4>
            <div className="flex gap-1">
              <span className="upvote">
                {post.ups}
                <FontAwesomeIcon icon={faCircleChevronUp} />{" "}
              </span>
              <span>{post.num_comments} comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostItem;
