// should recieve informations to display through props
// should display information about the current topic or subreddit
// needs to access fetch data through redux

const InfoBox: React.FC = () => {
  return (
    <aside>
      <h3>Topic/Subreddit</h3>
      <p>Information about this page</p>

      {/*
        if topic show reddits
        if subreddit show users
      */}
      <ul>
        <li>related reddits</li>
      </ul>
    </aside>
  )
}

export default InfoBox;