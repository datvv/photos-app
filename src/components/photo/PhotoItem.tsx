import React from "react";
import { Photo } from "../../app/models/photo";

function PhotoItem(item: Photo) {
  return (
    <div className="h-min w-full">
      <img src={item.urls.small} alt={item.alt_description} />
    </div>
  );
}

export default PhotoItem;
