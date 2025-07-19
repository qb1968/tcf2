import React from "react";
import { Link } from "react-router-dom";

const ImageCard = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200">
      <div className="p-8 sm:p-10 text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-1 text-gray-900 tracking-tight">
          IMPƎRFƎCT
        </h1>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 tracking-wide">
          HAPPINESS
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-700">
          A Journey Of Perfect Twists
        </h2>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-light font-custom mb-4">
          <span className="font-bold">IMPƎRFƎCT HAPPINESS</span> is based on
          real events and follows the author’s journey from a teenager dreaming
          of success in a struggling community to achieving the American Dream
          and living a life of executive privilege. Despite the lavish trips,
          private jets, limousines, and the power he once believed would bring
          happiness and fulfillment, he discovered an unexpected emptiness—and
          began a deeper journey toward what he now calls{" "}
          <span className="italic">"Imperfect Happiness."</span>
        </p>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-light font-custom">
          This is a story of adventure and love—of the dead ends of life without
          Godly hope, contrasted with the lasting happiness and contentment
          found in a life lived well with God.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link
            to="/book"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-medium py-2 px-6 rounded-xl shadow-md"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
