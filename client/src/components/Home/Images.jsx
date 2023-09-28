import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Images = () => {
  const navigate = useNavigate();
  const { images } = useSelector((state) => state.desiese);
  // const imageURL = URL.createObjectURL(file)
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImage, setCurrentImage] = useState(images[0]);

  const closeFullscreen = () => {
    setCurrentIndex(null);
    setIsFullscreen(false);
    setCurrentImage(null);
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentImage(URL.createObjectURL(images[currentIndex + 1]));
    }
     else if (currentIndex >= images.length - 1) {
      setIsFullscreen(false);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentImage(URL.createObjectURL(images[currentIndex - 1]));
    } else if (currentIndex <= 0) {
      setIsFullscreen(false);
    }
  };
  const handleSetImage = (index) => {
    setCurrentIndex(index);
    setIsFullscreen(true);
    setCurrentImage(URL.createObjectURL(images[index]));
  };

  return (
    <div className="p-5 ">
      <div className={`fullscreen-overlay ${isFullscreen ? "active" : ""}`}>
        <div className="fullscreen-modal">
          <img
            src={currentImage}
            alt={`Image ${currentIndex + 1}`}
            className="fullscreen-image"
          />
          <span className="close-button" onClick={closeFullscreen}>
            &times;
          </span>
          <span className="prev-button" onClick={prevImage}>
            &#8249;
          </span>
          <span className="next-button" onClick={nextImage}>
            &#8250;
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
