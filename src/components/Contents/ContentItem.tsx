import { Subreddit } from "../services/api/redditAPI";

interface Props {
  item: Subreddit;
}

const ContentItem = ({ item }: Props) => {
  console.log(item.data.community_icon)

  return (
    <>
      <div>
        {item.data.community_icon ? (
          <img src={item.data.community_icon} alt={`subreddit icon of ${item.data.display_name_prefixed}`} />
        ) : null}
        <p>{item.data.display_name_prefixed}</p>
      </div>
    </>
  )
}

export default ContentItem;