import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
// should recieve informations to display through props
// should display information about the current topic or subreddit
// needs to access fetch data through redux store
interface Props {
  topic: string | undefined;
}

const InfoBox: React.FC<Props> = ({ topic }) => {
  const posts = useSelector((state: RootState) => state.searchResult.posts);

  return (
    <aside>
      <h3>{topic}</h3>
      <p>Information about this page</p>

      {/*
        if topic show reddits
        if subreddit show users
      */}
      {posts.map((post) => {
        return (
          <li>
            <a
              key={post.data.id}
              href={`https://reddit.com/${post.data.subreddit_name_prefixed}`}
            >
              {post.data.subreddit_name_prefixed}
            </a>
          </li>
        );
      })}
    </aside>
  );
};

export default InfoBox;
