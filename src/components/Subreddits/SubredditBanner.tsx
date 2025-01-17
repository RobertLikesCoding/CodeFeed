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
        <div className={`flex align-center gap-1 ${styles.subredditBanner}`}>
            {subredditDetails?.icon_img ? (
          <div className={`${styles.subredditIcon}`}>
              <img src={subredditDetails?.icon_img} alt="subreddit icon." />
              </div>
            ) : (
              <SubredditIcon
                color={subredditDetails?.primary_color || ""}
                size="large"
              />
            )}
          <div className="flex-column gap">
            <h1>r/{subredditDetails?.display_name}</h1>
            <ul className={`${styles.mobileNav}`} aria-roledescription="navigation">
              <li>Posts</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SubredditBanner;
