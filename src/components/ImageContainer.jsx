import React from "react";

const ImageContainer = () => {
  return (
    <div className="glossy-container my-12">
      
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="glossy-card w-full sm:w-1/2">
          <img
            src="/images/water.jpg"
            alt="Image 1"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="glossy-card w-full sm:w-1/2">
          <img
            src="/images/beach.jpg"
            alt="Image 2"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
