import React, { useEffect, useState } from "react";
import { fetchImages } from "../app/api";
import { Photo } from "../app/models/photo";
import PhotoItem from "./photo/PhotoItem";
import { PAGE_SIZE } from "../app/constants";

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
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      await loadPhotos();
    }
  };

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 p-8 max-w-[1230px] m-auto mt-5">
      {photos.map((item: any, index) => (
        <PhotoItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Collection;
