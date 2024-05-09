// ConnectingBusinessImageSlides.js
import React, { useState } from "react";
import { SliderDataforConnectingBusinesses } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ConnectingBusinessImageSlides = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || length === 0) return null;

  const previousSlide = () =>
    setCurrent(current === 0 ? length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);

  return (
    <section className="bg-gray-100 py-12">
      <div className="relative flex justify-center items-center overflow-hidden">
        <FaArrowAltCircleLeft
          className="absolute left-0 z-10 cursor-pointer select-none text-3xl text-white hover:text-blue-400 transition duration-300 ease-in-out ml-6"
          onClick={previousSlide}
        />
        <FaArrowAltCircleRight
          className="absolute right-0 z-10 cursor-pointer select-none text-3xl text-white hover:text-blue-400 transition duration-300 ease-in-out mr-6"
          onClick={nextSlide}
        />
        {SliderDataforConnectingBusinesses.map((slide, index) => {
          return (
            <div
              className={`${
                index === current
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              } transition duration-1000 ease-in-out transform`}
              key={index}
            >
              {index === current && (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-auto block"
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ConnectingBusinessImageSlides;
