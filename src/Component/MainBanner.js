import React, { useState, useEffect } from "react";
import whatsapp from "../Images/whatsapp.png"; // Replace with the actual path to your WhatsApp icon image

const MainBanner = () => {
  const [currentText, setCurrentText] = useState("E-Commerce Marketing");

  const textArray = [
    "E-Commerce Marketing",
    "Digital Marketing",
    "Website Development",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((currentText) => {
        const currentIndex = textArray.indexOf(currentText);
        const nextIndex = (currentIndex + 1) % textArray.length;
        return textArray[nextIndex];
      });
    }, 3000); // Change text every 4 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="/Header/new_img.png" // Replace with your banner image path
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 leading-tight">
          END-TO-END{" "}
          <span className="bg-red-600 px-2 py-1 rounded-md">
            {currentText.toUpperCase()}
          </span>{" "}
          SERVICES
        </h1>
        <p className="text-sm sm:text-lg lg:text-2xl max-w-xl mb-6 leading-relaxed">
          GROW YOUR BUSINESS 10X WITH INDIA’S BEST{" "}
          <span style={{ whiteSpace: "nowrap" }}>E-COMMERCE</span> MARKETING
          AGENCY
        </p>

        {/* Call to Action */}
        <a
          href="#client-speak"
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-8 rounded-lg font-bold transition duration-300"
        >
          Client Speak
        </a>

        {/* Stats Section */}
        <div className="flex justify-center space-x-4 sm:space-x-8 lg:space-x-12 mt-8 text-white text-sm sm:text-lg lg:text-xl">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">14+</h2>
            <p>Years in Business</p>
          </div>
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              20 Cr+
            </h2>
            <p>Revenue Generated</p>
          </div>
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">100+</h2>
            <p>Businesses Transformed</p>
          </div>
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">10+</h2>
            <p>Websites Launched</p>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+918438080309?text=urlencodedtext"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-10 md:right-10 w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <img
          className="w-full h-full object-contain"
          src={whatsapp}
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default MainBanner;
