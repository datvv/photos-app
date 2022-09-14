import React from "react";
import { Photo } from "../../app/models/photo";

function PhotoItem(item: Photo) {
  return (
    <div className="sm:m-auto md:m-0 photo-item">
      <img src={item.urls.small} alt={item.alt_description} />
    </div>
  );
}

export default PhotoItem;
