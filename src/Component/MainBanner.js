import React from "react";
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SliderData";

const MainBanner = () => {
  return (
    <section className="relative mt-9">
      <div className="flex justify-center items-center bg-gradient-to-r from-white to-white h-screen">
        <ImageSlider slides={SlideData} />
      </div>
      <div className="absolute inset-0 "></div>
    </section>
  );
};

export default MainBanner;
