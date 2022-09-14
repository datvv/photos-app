import React, { useEffect, useState } from "react";
import { fetchImages } from "../app/api";
import { Photo } from "../app/models/photo";
import PhotoItem from "./photo/PhotoItem";
import { PAGE_SIZE } from "../app/constants";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Collection = () => {
  let page = 0;

  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  async function loadPhotos() {
    page = page + 1;
    const data = await fetchImages(page, PAGE_SIZE);
    let list: any = [];
    data.forEach((p: any) => list.push(p));
    setPhotos((prev) => [...prev].concat(list));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await loadPhotos();
    window.addEventListener("scroll", handleScroll);
  };

  const handleScroll = async (e: any) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 10 >=
      e.target.documentElement.scrollHeight
    ) {
      await loadPhotos();
    }
  };

  return (
    <div className="max-w-[1230px] m-auto mt-5">
      <div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {photos.map((item: any, index) => (
              <PhotoItem key={index} {...item} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Collection;
