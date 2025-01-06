import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchSubredditPostsThunk } from "../../redux/querySearch/postsSlice";
import { Subreddit } from "../services/api/redditAPI";
import { useNavigate } from "react-router-dom";

interface Props {
  item: Subreddit;
}

const ContentItem = ({ item }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  async function handleClickSubreddit() {
    await dispatch(fetchSubredditPostsThunk(item.data.display_name));
    navigate(`/r/${item.data.display_name}`);
  }

  return (
    <>
      <div data-testid="subreddit" onClick={handleClickSubreddit}>
        {item.data.icon_img ? (
          <img
            src={item.data.icon_img}
            alt={`subreddit icon of ${item.data.display_name}`}
          />
        ) : null}
        <a>r/{item.data.display_name}</a>
      </div>
    </>
  );
};

export default ContentItem;
