import { Link } from "react-router-dom";
import { Subreddit } from "../services/api/redditAPI";

interface Props {
  item: Subreddit;
}

const ContentItem = ({ item }: Props) => {
  return (
    <>
      <Link
        data-testid="subreddit"
        to={`subreddits/${item.data.display_name_prefixed}`}
      >
        {item.data.icon_img ? (
          <img
            src={item.data.icon_img}
            alt={`subreddit icon of ${item.data.display_name_prefixed}`}
          />
        ) : null}
        <p>{item.data.display_name_prefixed}</p>
      </Link>
    </>
  );
};

export default ContentItem;
