import React from "react";
import coverImg from "../assets/images/cover.jpg";
import Search from "./common/Search";

const Cover = () => {
  return (
    <div>
      <img src={coverImg} className="w-full h-[50vh]" />
      <div className="absolute text-white top-[20%] left-[25%] w-[70%]">
        <div className="cover-heading">
          <h1 className="text-6xl font-bold">Unsplash</h1>
          <h3 className="text-lg font-bold mt-3">
            The internet's source of freely-usable images.
          </h3>
          <h3 className="text-lg font-bold mt-1 mb-6">
            Powered by creators everywhere.
          </h3>
        </div>
        {/* Search area */}
        <div>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Cover;
