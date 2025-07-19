import React from "react";

const ImageContainer = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <img
          src="/images/water.jpg"
          alt="Image 1"
          className="w-full sm:w-1/2 h-64 sm:h-auto object-cover rounded-xl"
        />
        <img
          src="/images/beach.jpg"
          alt="Image 2"
          className="w-full sm:w-1/2 h-64 sm:h-auto object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default ImageContainer;
