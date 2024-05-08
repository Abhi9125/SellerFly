import React from "react";
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SliderData";

const MainPage = () => {
  return (
    <div className="flex justify-center items-center bg-white h-screen mt-9">
      <ImageSlider slides={SlideData} />
    </div>
  );
};

export default MainPage;
