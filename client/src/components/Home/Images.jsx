import React from "react";
import { useSelector } from "react-redux";
const Images = () => {
  const { images } = useSelector((state) => state.desiese);
  // const imageURL = URL.createObjectURL(file)
  return (
    <div className="p-5 ">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-screen overflow-y-scroll ">
        {images.map((each, index) => (
          <div key={index}>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={URL.createObjectURL(each)}
                alt="cancer image"
              />
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Images;
