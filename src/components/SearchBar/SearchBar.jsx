import "./SearchBar.css";
function SearchBar(props) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search products..."
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default SearchBar;