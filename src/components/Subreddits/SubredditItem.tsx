import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchSubredditPostsThunk } from "../../redux/slices/postsSlice";
import { Subreddit } from "../services/api/redditAPI";
import { useNavigate } from "react-router-dom";
import SubredditIcon from "../UI/SubredditIcon";

interface Props {
  item: Subreddit;
}

const SubredditItem = ({ item }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  async function handleClickSubreddit() {
    await dispatch(fetchSubredditPostsThunk(item.data.display_name));
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
        <SubredditIcon color={item.data.primary_color} />
      )}
      <p>r/{item.data.display_name}</p>
    </li>
  );
};

export default SubredditItem;
