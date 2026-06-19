function SearchBar({
  setSearch,
}) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search Products..."
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
}

export default SearchBar;