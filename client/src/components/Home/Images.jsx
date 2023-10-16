import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Images = () => {
  const { images } = useSelector((state) => state.desiese);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isZoomed, setIsZoomed] = useState(false); // Track zoom state

  const closeFullscreen = () => {
    setCurrentIndex(null);
    setIsFullscreen(false);
    setCurrentImage(null);
    setIsZoomed(false);
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentImage(URL.createObjectURL(images[currentIndex + 1]));
      setIsZoomed(false); // Reset zoom state when changing images
    } else if (currentIndex >= images.length - 1) {
      setIsFullscreen(false);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentImage(URL.createObjectURL(images[currentIndex - 1]));
      setIsZoomed(false); // Reset zoom state when changing images
    } else if (currentIndex <= 0) {
      setIsFullscreen(false);
    }
  };
  const handleSetImage = (index) => {
    setCurrentIndex(index);
    setIsFullscreen(true);
    setCurrentImage(URL.createObjectURL(images[index]));
  };
  const toggleZoom = () => {
    setIsZoomed(!isZoomed); // Toggle zoom state
  };


  return (
    <div className="p-5 ">
      <div className={`fullscreen-overlay ${isFullscreen ? "active" : ""}`}>
        <div
          className={`fullscreen-modal overflow-hidden relative`}
         
        >
          <img
            src={currentImage}
            alt={`Image ${currentIndex + 1}`}
            onClick={toggleZoom}
            className={`fullscreen-image ${
              isZoomed
                ? `hover:scale-125 duration-500 transition-all scroll-smooth cursor-move `
                : "scale-100 duration-500 transition-all"
            }`}
          />
          <span
            className="close-button p-2 hover:bg-gray-600 rounded-full"
            onClick={closeFullscreen}
          >
            <RxCross2 size={25} />
          </span>
          <span
            className="prev-button p-2 hover:bg-gray-600 rounded-full"
            onClick={prevImage}
          >
            <AiOutlineLeft size={25} />
          </span>
          <span
            className="next-button p-2 hover:bg-gray-600 rounded-full"
            onClick={nextImage}
          >
            <AiOutlineRight size={25} />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-screen overflow-y-scroll place-items-end ">
        {images.length !== 0 ? (
          images.map((each, index) => (
            <div key={index}>
              <img
                onClick={() => {
                  handleSetImage(index);
                }}
                className="h-auto max-w-full rounded-lg"
                src={URL.createObjectURL(each)}
                alt="cancer image"
              />
            </div>
          ))
        ) : (
          <div className="">
            <h3 className="text-[#777777] ">No images</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Images;
