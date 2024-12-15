// Needs to display a list of relevant subreddits.

interface Props {
  item: Subreddit;
}

const ContentItem = ({ item }: Subreddit) => {
  return (
    <>
      <div>
        <img src="" alt={`subreddit icon of ${item}`} />
        <p>{item}</p>
      </div>
    </>
  )
}

export default ContentItem;