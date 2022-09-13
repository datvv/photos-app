import React from "react";
import logo from "../../assets/images/unsplash-logo.svg";
import Avatar from "./Avatar";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center gap-4 py-3 border-2 border-gray-600">
        <div className="w-11 h-11 ml-3">
          <img src={logo} alt="unsplash-logo" className="w-full h-full" />
        </div>
        <div className="w-full">
          <input
            className="border border-gray-300 text-gray-900 text-sm rounded-3xl p-2.5 w-[80%] bg-[#eeeeee] ml-5"
            placeholder="Search free high-resolution photos"
          ></input>
        </div>
        <Avatar />
      </nav>
    </div>
  );
};

export default Navbar;
