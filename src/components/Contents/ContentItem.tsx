import { Subreddit } from "../services/api/redditAPI";

interface Props {
  item: Subreddit;
}

const ContentItem = ({ item }: Props) => {

  return (
    <>
      <div>
        {item.data.icon_img ? (
          <img src={item.data.icon_img} alt={`subreddit icon of ${item.data.display_name_prefixed}`} />
        ) : null}
        <p>{item.data.display_name_prefixed}</p>
      </div>
    </>
  )
}

export default ContentItem;