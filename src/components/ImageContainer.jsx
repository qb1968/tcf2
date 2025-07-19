import React from "react";

const ImageContainer = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row gap-4">
        <img
          src="/images/water.jpg"
          alt="Image 1"
          className="w-1/2 object-cover"
        />
        <img
          src="/images/beach.jpg"
          alt="Image 2"
          className="w-1/2 object-cover"
        />
      </div>
    </div>
  );
};

export default ImageContainer;
// A Thirty Day Devotional To Living Life Well