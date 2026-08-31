import "../Badge/Badge.css";
function Badge(props) {
  let className = "badge";

  if (props.color === "green") {
    className = "badge badge--green";
  } else if (props.color === "gray") {
    className = "badge badge--gray";
  } else {
    className = "badge badge--blue";
  }

  return <span className={className}>{props.text}</span>;
}

export default Badge;