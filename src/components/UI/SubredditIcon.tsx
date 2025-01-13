interface Props {
  color: string;
}

const SubredditIcon: React.FC<Props> = ({ color }) => {
  return (
    <span
      className="flex-center"
      style={{ backgroundColor: color === "self" ? color : "#FFF" }}
    >
      r/
    </span>
  );
};

export default SubredditIcon;
