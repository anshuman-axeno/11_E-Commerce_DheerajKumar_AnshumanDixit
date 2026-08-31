import "./Button.css";

export default function Button(props) {
  let className = "button";

  if (props.variant === "danger") {
    className = "button button--danger";
  } else if (props.variant === "outline") {
    className = "button button--outline";
  } else {
    className = "button button--primary";
  }

  return (
    <button
      className={className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
}

