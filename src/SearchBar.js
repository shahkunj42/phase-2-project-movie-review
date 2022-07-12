function SearchBar({setSearch}) {
    return (
      <div className="search">
        <h1>Search</h1>
        <input
          type="text"
          className="searchTerm"
          onChange={(event) =>setSearch(event.target.value)}
          
        />
      </div>
    );
  }
  
  export default SearchBar;