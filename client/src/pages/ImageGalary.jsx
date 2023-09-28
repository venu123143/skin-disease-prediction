import React, { useState } from "react";
import { useSelector } from "react-redux";

const ImageGallery = () => {
  const { images } = useSelector((state) => state.desiese);

  const [currentIndex, setCurrentIndex] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openFullscreen = (index) => {
    setCurrentIndex(index);
    setIsFullscreen(true);
  };
  
  const closeFullscreen = () => {
    setCurrentIndex(null);
    setIsFullscreen(false);
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleSetImage=(index)=>{
    openFullscreen(index)
    setCurrentImage(images[index])
  }

  return (
    <div>
      <div className={`fullscreen-overlay ${isFullscreen ? "active" : ""}`}>
        <div className="fullscreen-modal">
          <img
            src={URL.createObjectURL(currentImage)}
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
      <div className="image-list">
        {images.map((image, index) => (
          <img
            key={index}
            src={URL.createObjectURL(image)}
            alt={`Image ${index + 1}`}
            className="thumbnail"
            onClick={(index) =>{handleSetImage(index)}}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
