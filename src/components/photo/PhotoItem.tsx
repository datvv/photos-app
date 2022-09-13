import React from "react";
import Img from "../../app/models/image";

function PhotoItem(item: Img) {
  return (
    <div className="h-min w-full">
      <img src={item.url} alt="" />
    </div>
  );
}

export default PhotoItem;
