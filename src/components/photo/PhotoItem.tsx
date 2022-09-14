import React, { useState } from "react";
import { Photo } from "../../app/models/photo";
import { LazyLoadImage } from "react-lazy-load-image-component";

function PhotoItem(item: Photo) {
  return (
    <div className="sm:m-auto md:m-0 photo-item">
      <LazyLoadImage src={item.urls.small} alt={item.alt_description} />
    </div>
  );
}

export default PhotoItem;
