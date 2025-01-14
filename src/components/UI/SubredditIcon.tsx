import styles from "./SubredditIcon.module.scss"

interface Props {
  color: string;
  small?: boolean;
}

const SubredditIcon: React.FC<Props> = ({ color, small }) => {
  console.log(color)

  return (
    <span
      className={`flex-center ${styles.icon} ${small && styles.small}`}
      style={{ backgroundColor: color === "" ? "#FFF" : color }}
    >
      r/
    </span>
  );
};

export default SubredditIcon;
