import { useNavigate } from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo";
import { Post } from "../services/api/redditAPI";
import placeHolderImage from "../../assets/placeholder_thumbnail.jpg";
import styles from "./PostItem.module.scss";

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
    <div
      data-testid="post"
      onClick={handleClickPost}
      className={`${styles.postContainer}`}
    >
      <div className={styles.imgContainer}>
        <img
          src={post.thumbnail === "" ? placeHolderImage : post.thumbnail}
          alt="thumbnail of post."
        />
      </div>
      <div className={styles.content}>
        <UserInfo author={post.author} created={post.created} />
        <div className={`${styles.postContent}`}>
          <h3>{post.title}</h3>
          <div>
            <i>{post.ups} upvotes</i>
            <i>{post.num_comments} comments</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
