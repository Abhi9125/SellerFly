import React from "react";
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SliderData";
import whatsapp from "../Images/whatsapp.png";
const MainBanner = () => {
  return (
    <section className="relative mt-9">
      <div className="flex justify-center items-center bg-gradient-to-r from-white to-white h-screen">
        <ImageSlider slides={SlideData} />
      </div>
      <div className="absolute inset-0 "></div>

      <img
        className="fixed  bottom-10 right-10 w-14 h-14"
        src={whatsapp}
        alt="whatsApp_image"
      />

      <a href="https://wa.me/+918438080309?text=urlencodedtext">
        <img
          className="fixed  bottom-5 right-4 w-14 h-14"
          src={whatsapp}
          alt="whatsApp_image"
        />
      </a>
    </section>
  );
};

export default MainBanner;
