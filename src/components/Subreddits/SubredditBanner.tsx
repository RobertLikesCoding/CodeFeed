import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import styles from "./SubredditBanner.module.scss";
import SubredditIcon from "../UI/SubredditIcon";

const SubredditBanner: React.FC = () => {
  const subredditDetails = useSelector(
    (state: RootState) => state.subredditDetails.details
  );
  const isLoading = useSelector(
    (state: RootState) => state.subredditDetails.isLoading
  );
  const hasError = useSelector(
    (state: RootState) => state.subredditDetails.hasError
  );

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : hasError ? (
        <p>An Error occured</p>
      ) : (
        <div className={`flex gap-1 ${styles.subredditBanner}`}>
          <div className={`flex-center ${styles.subredditIcon}`}>
            {subredditDetails?.icon_img ? (
              <img src={subredditDetails?.icon_img} alt="subreddit icon." />
            ) : (
              <SubredditIcon
                color={subredditDetails?.primary_color || ""}
                small={false}
              />
            )}
          </div>
          <div className="flex-column">
            <h1>r/{subredditDetails?.display_name}</h1>
            <div className="flex gap-1">
              <p>Posts</p>
              <p>About</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubredditBanner;
