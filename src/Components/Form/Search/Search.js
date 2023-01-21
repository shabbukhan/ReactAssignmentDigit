import React from "react";
import "./search.css";

const Search = (props) => {
  return (
    <form className="search">
      <input
        type="text"
        placeholder="Search dishes here..."
        onChange={props.handleChange}
        value={props.searchInput}
      />
    </form>
  );
};

export default Search;
