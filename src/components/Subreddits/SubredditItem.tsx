import { useNavigate } from "react-router-dom";

import { Subreddit } from "../services/api/redditAPI";
import SubredditIcon from "../UI/SubredditIcon";

interface Props {
  item: Subreddit;
}

const SubredditItem = ({ item }: Props) => {
  const navigate = useNavigate();

  async function handleClickSubreddit() {
    navigate(`/r/${item.data.display_name}`);
  }

  return (
    <li data-testid="subreddit" onClick={handleClickSubreddit}>
      {item.data.icon_img ? (
        <img
          src={item.data.icon_img}
          alt={`subreddit icon of ${item.data.display_name}`}
        />
      ) : (
        <SubredditIcon color={item.data.primary_color} size="medium"/>
      )}
      <p>r/{item.data.display_name}</p>
    </li>
  );
};

export default SubredditItem;
