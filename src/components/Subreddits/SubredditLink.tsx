import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchSubredditPostsThunk } from "../../redux/querySearch/postsSlice";
import { Subreddit } from "../services/api/redditAPI";
import { useNavigate } from "react-router-dom";

interface Props {
  item: Subreddit;
}

const SubredditLink = ({ item }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  async function handleClickSubreddit() {
    await dispatch(fetchSubredditPostsThunk(item.data.display_name));
    navigate(`/r/${item.data.display_name}`);
  }

  return (
    <>
      <ul data-testid="subreddit" onClick={handleClickSubreddit}>
        <li>
          {item.data.icon_img ? (
            <img
              src={item.data.icon_img}
              alt={`subreddit icon of ${item.data.display_name}`}
            />
          ) : null}
          <a>r/{item.data.display_name}</a>
        </li>
      </ul>
    </>
  );
};

export default SubredditLink;
