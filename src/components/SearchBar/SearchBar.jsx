import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

const SearchBar = ({ filter, setFilter }) => {
  return (
    <div className="flexCenter search-bar">
      <HiLocationMarker color="var(--blue)" size={25} />
      <input
        placeholder="Search by title/city/country..."
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <Link to="/properties">
        <button className="button">Search</button>
      </Link>
    </div>
  );
};

export default SearchBar;
