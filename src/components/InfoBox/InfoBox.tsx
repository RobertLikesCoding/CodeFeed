// should recieve informations to display through props
// should display information about the current topic or subreddit
// needs to access fetch data through redux

const InfoBox: React.FC = () => {
  return (
    <div>
      <h3>Topic/Subreddit</h3>
      <p>Information about this page</p>

      {/*
        if topic show reddits
        if subreddit show users
      */}
      <ul>
        <li>related reddits</li>
      </ul>
    </div>
  )
}

export default InfoBox;