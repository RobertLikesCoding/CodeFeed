import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const SubredditBanner: React.FC = () => {
  const subredditDetails = useSelector((state: RootState) => state.subredditDetails.details);
  const isLoading = useSelector((state: RootState) => state.subredditDetails.isLoading);
  const hasError = useSelector((state: RootState) => state.subredditDetails.hasError);

  return (
    <>
    {isLoading ? (
      <p>Loading...</p>
    ) : hasError ? (
      <p>An Error occured</p>
    ) : (
      <h1>r/{subredditDetails?.display_name}</h1>
      
    )}
    </>
  )
}

export default SubredditBanner;