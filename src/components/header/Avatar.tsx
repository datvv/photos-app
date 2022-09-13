import React from "react";
import user_icon from "../../assets/images/user-icon.svg";

const Avatar = () => {
  return (
    <div className="ml-auto mr-4">
      <img className="w-[40px]" src={user_icon} alt="user profile" />
    </div>
  );
};

export default Avatar;
