import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import introImage from "../Images/IntroImage.jpg"; // Replace with your actual image path

const Intro = () => {
  const [currentText, setCurrentText] = useState("SME'S");

  const textArray = ["SME'S", "MANUFACTURERS", "BRANDS"];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((currentText) => {
        const currentIndex = textArray.indexOf(currentText);
        const nextIndex = (currentIndex + 1) % textArray.length;
        return textArray[nextIndex];
      });
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <section className="font-body bg-white py-6 px-4 sm:px-6 lg:px-6 rounded-xl shadow-md">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-lg sm:text-xl text-red-600 font-bold tracking-wide uppercase">
            Who We Are
          </h3>
        </div>

        {/* Text Content */}
        <div
          className="flex flex-col justify-center items-center h-full text-center text-black mb-12"
          data-aos="fade-up"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            We Help{" "}
            <span className="bg-red-600 text-white px-2 py-1 rounded-md">
              {currentText}
            </span>{" "}
            Grow Their Business Online
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl">
            Our expertise in digital marketing and e-commerce strategies
            empowers businesses to reach their full potential in the online
            marketplace.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-12">
          {/* Image Section */}
          <div className="flex-shrink-0" data-aos="zoom-in">
            <img
              src={introImage}
              alt="Intro"
              className="w-56 h-56 lg:w-80 lg:h-80 rounded-lg object-cover shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>

          {/* Text Section */}
          <div
            className="text-lg text-gray-800 max-w-3xl text-center lg:text-left"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold text-black mb-2">
              Mr. Senthilkumar
            </h3>
            <p className="text-md font-semibold text-red-600 mb-4">
              Founder & CEO
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              We are a team of internationally certified E-Commerce & Digital
              Experts with a vision to grow your e-commerce business from 10X to
              100X in a short time. Our mission is to provide top-notch services
              to help businesses thrive in the competitive digital marketplace.
            </p>
            {/* <a
              href="#"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              aria-label="Learn More About Us"
            >
              Learn More
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
