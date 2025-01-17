import styles from "./SubredditIcon.module.scss";

interface Props {
  color: string;
  size?: string;
}

const SubredditIcon: React.FC<Props> = ({ color, size }) => {
  if (size === "large") {
    return (
      <span
        className={`flex-center ${styles.icon} ${styles.large}`}
        style={{ backgroundColor: color === "" ? "#FFF" : color }}
      >
        r/
      </span>
    );
  } else {
    return (
      <span
        className={`flex-center ${styles.icon} ${
          size === "small" ? styles.small : styles.medium
        }`}
        style={{ backgroundColor: color === "" ? "#FFF" : color }}
      >
        r/
      </span>
    );
  }
};

export default SubredditIcon;
