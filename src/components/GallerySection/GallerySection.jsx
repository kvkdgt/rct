import React, { useEffect, useState } from "react";
import "./GallerySection.css";

const GallerySection = (props) => {
  return (
    <div>
      <div class="custom-container">
        <div class="bg-white py-8">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
              <h2 class="text-3xl leading-9 font-extrabold text-gray-900">
                GLIMPSE OF OUR WORK
              </h2>
            </div>
            <div class="mt-6 flex justify-between items-center">
              <div class="flex space-x-4">
                <img
                  src={props.img1}
                  alt="Work image 1"
                  class="rounded-lg shadow-md"
                  height="200"
                />
                <img
                  src={props.img1}
                  alt="Work image 2"
                  class="rounded-lg shadow-md"
                  height="200"
                />
                <img
                  src={props.img1}
                  alt="Work image 3"
                  class="rounded-lg shadow-md"
                  height="200"
                />
                <img
                  src={props.img1}
                  alt="Work image 4"
                  class="rounded-lg shadow-md"
                  height="200"
                />
                <img
                  src={props.img1}
                  alt="Work image 4"
                  class="rounded-lg shadow-md"
                  height="200"
                />
                <img
                  src={props.img1}
                  alt="Work image 4"
                  class="rounded-lg shadow-md"
                  height="200"
                />
              </div>
            </div>
            <div class="mt-6 flex justify-center">
              <button class="custom-button">View Gallery</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
