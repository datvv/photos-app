import React, { useEffect, useState, useRef } from "react";
import { fetchDetailImage } from "../../app/api";
import { Photo } from "../../app/models/photo";
import arrowLeft from "../../assets/images/arrow-left.svg";
import arrowRight from "../../assets/images/arrow-right.svg";
import closeIcon from "../../assets/images/close-icon.svg";

const PhotoGallery = (props: any) => {
  const imageId = props.id;
  const [photoInfo, setPhotoInfo] = useState<Photo>();

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          props.togglePopup();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const loadPhotoInfo = async () => {
    const data = await fetchDetailImage(imageId);
    setPhotoInfo(() => data);
  };

  useEffect(() => {
    loadPhotoInfo();
  }, [imageId]);

  const closePopup = () => {
    props.togglePopup();
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-screen">
      <div ref={wrapperRef} className="relative my-6 mx-auto max-w-5xl w-full">
        <button className="absolute z-50 top-[50%] left-1">
          <img src={arrowLeft} alt="" className="w-7" />
        </button>
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="relative p-6 px-6 flex-auto">
            <button onClick={() => closePopup()}>
              <img src={closeIcon} alt="" className="w-7" />
            </button>
            <div className="px-3">
              <img
                src={photoInfo?.urls.regular}
                alt={photoInfo?.alt_description}
                className="m-auto sm:h-[500px] md:h-[600px] lg:h-[800px] object-contain"
              />
              <div className="flex mt-4 justify-around">
                <div>
                  <p>Likes: {photoInfo?.likes}</p>
                </div>
                <div>
                  <p>Download: 0</p>
                </div>
                <div>
                  <p>Created at: {photoInfo?.created_at?.substr(0, 10)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="absolute z-50 top-[50%] right-1">
          <img src={arrowRight} alt="" className="w-7" />
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;
