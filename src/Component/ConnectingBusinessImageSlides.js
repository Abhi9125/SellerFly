import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SliderDataforConnectingBusinesses } from "./SliderData";

const ConnectingBusinessImageSlides = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gray-100 py-6">
      {/* Section Title */}
      <h2
        className="text-3xl font-bold text-center mb-10 text-red-600"
        data-aos="fade-up"
      >
        We Connect Your Business With Potential Buyers!
      </h2>

      {/* Marquee Container */}
      <div className="relative flex justify-center items-center overflow-hidden w-full">
        <div className="flex gap-8 animate-marquee">
          {/* First loop of slides */}
          {SliderDataforConnectingBusinesses.map((slide, index) => (
            <div
              className="min-w-[300px] sm:min-w-[400px] lg:min-w-[500px] h-[150px] object-contain flex-shrink-0"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}

          {/* Duplicate loop of slides to create seamless transition */}
          {SliderDataforConnectingBusinesses.map((slide, index) => (
            <div
              className="min-w-[300px] sm:min-w-[400px] lg:min-w-[500px] h-[150px] object-contain flex-shrink-0"
              key={`duplicate-${index}`}
              data-aos="fade-up"
              data-aos-delay={index * 100 + 500} // Additional delay for duplicates
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectingBusinessImageSlides;
