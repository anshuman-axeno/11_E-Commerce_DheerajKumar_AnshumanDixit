import "./EmptyState.css";
function EmptyState(props) {
  return (
    <div className="empty-state">
      <p>{props.message}</p>
    </div>
  );
}

export default EmptyState;