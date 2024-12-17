import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
// import { fetchPostsThunk } from "../../redux/querySearch/querySearchSlice";
import { Subreddit } from "../services/api/redditAPI";

interface Props {
  item: Subreddit;
}

const ContentItem = ({ item }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div
        data-testid="subreddit"
        // onClick={dispatch(fetchPostsThunk(item.data.display_name_prefixed))}
      >
        {item.data.icon_img ? (
          <img
            src={item.data.icon_img}
            alt={`subreddit icon of ${item.data.display_name_prefixed}`}
          />
        ) : null}
        <p>{item.data.display_name_prefixed}</p>
      </div>
    </>
  );
};

export default ContentItem;
