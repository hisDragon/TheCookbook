import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { PiForkKnifeBold } from "react-icons/pi";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (searchInput.trim()) {
        navigate(`/search-results?query=${encodeURIComponent(searchInput)}`)
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  
  return (
    <div className="flex items-center lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto bg-white rounded-xl shadow-md px-2 py-2">
      <PiForkKnifeBold className="text-primary mr-2 w-7 h-7" />
      <input
        placeholder="Find what do you want to cook today"
        className="flex-1 outline-none text-gray font-fira"
        value={searchInput}
        onKeyDown={handleKeyDown}
        onChange={(input) => setSearchInput(input.target.value)}
      />
      <button
        className="bg-primary p-3 rounded-lg text-white cursor-pointer hover:bg-primary-offset"
        onClick={handleSearch}
      >
        <BiSearch className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SearchBar;
