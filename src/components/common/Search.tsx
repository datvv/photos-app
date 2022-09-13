import React from "react";
import search from "../../assets/images/search-icon.svg";
import search_icon from "../../assets/images/search-icon-sm.svg";

const Search = () => {
  return (
    <div className="flex items-center">
      <img src={search_icon} alt="search" className="absolute w-[25px] z-10" />
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 block w-[80%] p-2.5 py-4 pl-10 ml-[-10px]"
        placeholder="Search free high-resolution photos"
      />
    </div>
  );
};

export default Search;
