import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const SubredditBanner: React.FC = () => {
  const subredditDetails = useSelector((state: RootState) => state.subredditDetails.details);
  const isLoading = useSelector((state: RootState) => state.subredditDetails.isLoading);
  const hasError = useSelector((state: RootState) => state.subredditDetails.hasError);
  console.log(subredditDetails);


  return (
    <>
    {isLoading ? (
      <p>Loading...</p>
    ) : hasError ? (
      <p>An Error occured</p>
    ) : (
      <div className={`flex gap-1 ${styles.subredditBanner}`}>
        <div className={`${styles.subredditIcon}`}>
          <img src={subredditDetails?.icon_img} alt="subreddit icon." />
        </div>
        <div className="flex-column gap-1">
          <h1>r/{subredditDetails?.display_name}</h1>
          <div className="flex gap-2">
            <p>Posts</p>
            <p>About</p>
          </div>
        </div>

      </div>
    )}
    </>
  )
}

export default SubredditBanner;