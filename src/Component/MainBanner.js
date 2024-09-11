// import React from "react";
// import ImageSlider from "./ImageSlider";
// import { SlideData } from "./SliderData";
// import whatsapp from "../Images/whatsapp.png";
// const MainBanner = () => {
//   return (
//     <section className="relative mt-9">
//       <div className="flex justify-center items-center bg-gradient-to-r from-white to-white h-screen">
//         <ImageSlider slides={SlideData} />
//       </div>
//       <div className="absolute inset-0 "></div>

//       <img
//         className="fixed  bottom-10 right-10 w-14 h-14"
//         src={whatsapp}
//         alt="whatsApp_image"
//       />

//       <a href="https://wa.me/+918438080309?text=urlencodedtext">
//         <img
//           className="fixed  bottom-5 right-4 w-14 h-14"
//           src={whatsapp}
//           alt="whatsApp_image"
//         />
//       </a>
//     </section>
//   );
// };

// export default MainBanner;

// import React from "react";
// import ImageSlider from "./ImageSlider";
// import { SlideData } from "./SliderData";
// import whatsapp from "../Images/whatsapp.png";

// const MainBanner = () => {
//   return (
//     <section className="relative mt-9">
//       <div className="flex justify-center items-center bg-gradient-to-r from-white to-white h-screen relative">
//         <ImageSlider slides={SlideData} />
//       </div>

//       {/* WhatsApp Button */}
//       <a
//         href="https://wa.me/+918438080309?text=urlencodedtext"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-4 right-4 md:bottom-10 md:right-10 w-14 h-14"
//       >
//         <img className="w-full h-full" src={whatsapp} alt="WhatsApp" />
//       </a>
//     </section>
//   );
// };

// export default MainBanner;

// import React from "react";

// const MainBanner = () => {
//   return (
//     <div>
//       <img src="/Header/new_img2.jpg" alt="New_Banner image" />
//       <div className="absolute">
//         <h3>END TO END E-COMMERCE MARKETING SERVICES</h3>
//         <p>
//           GROW YOUR BUSINESS 10X WITH INDIA’S BEST E-COMMERCE MARKETING AGENCY
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MainBanner;

// import React from "react";

// const MainBanner = () => {
//   return (
//     <div className="font-slab relative w-full">
//       <img
//         src="/Header/new_img.png"
//         alt="New_Banner image"
//         className="w-full h-[70vh] object-cover"
//       />
//       <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center text-white p-6">
//         <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
//           END TO END E-COMMERCE MARKETING SERVICES
//         </h3>
//         <p className="text-lg sm:text-xl lg:text-2xl font-medium max-w-2xl">
//           GROW YOUR BUSINESS 10X WITH INDIA’S BEST E-COMMERCE MARKETING AGENCY
//         </p>
//       </div>
//     </div>
//   );
// };
// export default MainBanner;
// import React, { useState, useEffect } from "react";

// const MainBanner = () => {
//   const [dynamicText, setDynamicText] = useState("Real-world Action");

//   // Array of words to display dynamically
//   const texts = ["Real-world Action", "AI", "Sustainability", "Blockchain"];

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       // Increment the index and reset to 0 when reaching the end of the array
//       index = (index + 1) % texts.length;
//       setDynamicText(texts[index]); // Update the dynamic text
//     }, 3000); // Change text every 3 seconds

//     // Clean up the interval on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-900">
//       <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-green-500 animate-pulse">
//         Meets
//         <span
//           className="ml-3 text-white transition-all duration-1000 transform-gpu ease-in-out
//           scale-105 hover:scale-110 opacity-90 hover:opacity-100
//           drop-shadow-[0_0px_20px_rgba(255,255,255,0.5)]"
//         >
//           {dynamicText}
//         </span>
//       </h1>
//     </div>
//   );
// };

// // export default DynamicText;

// export default MainBanner;

// import React from "react";
// import whatsapp from "../Images/whatsapp.png"; // Replace with the actual path to your WhatsApp icon image

// const MainBanner = () => {
//   return (
//     <div className="font-sans relative w-full">
//       {/* Background Image */}
//       <img
//         src="/Header/new_img.png" // Replace with your banner image path
//         alt="Banner"
//         className="w-full h-[70vh] object-cover"
//       />

//       {/* Overlay and Text */}
//       <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center text-white p-6">
//         <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
//           END TO END E-COMMERCE MARKETING SERVICES
//         </h3>
//         <p className="text-lg sm:text-xl lg:text-2xl font-medium max-w-3xl leading-relaxed">
//           GROW YOUR BUSINESS 10X WITH INDIA’S BEST E-COMMERCE MARKETING AGENCY
//         </p>
//       </div>

//       {/* WhatsApp Floating Button */}
//       <a
//         href="https://wa.me/+918438080309?text=urlencodedtext"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-4 right-4 md:bottom-10 md:right-10 w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//         aria-label="Contact us on WhatsApp"
//       >
//         <img
//           className="w-full h-full object-contain"
//           src={whatsapp}
//           alt="WhatsApp"
//         />
//       </a>
//     </div>
//   );
// };

// export default MainBanner;

// import React, { useEffect } from "react";
// import whatsapp from "../Images/whatsapp.png"; // Replace with the actual path to your WhatsApp icon image

// const MainBanner = () => {
//   const [text, setText] = useState("E-Commerce Marketing");

//   const changetext = ["Digital Marketing", "Website Development"];

//   useEffect(() => {
//     setInterval(() => {

//     });
//   }, []);
//   return (
//     <div className="relative w-full h-screen">
//       {/* Background Image */}
//       <img
//         src="/Header/new_img.png" // Replace with your banner image path
//         alt="Banner"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//       {/* Text Content */}
//       <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
//         <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
//           END TO END E-COMMERCE MARKETING SERVICES
//         </h1>
//         <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mb-6">
//           GROW YOUR BUSINESS 10X WITH INDIA’S BEST E - COMMERCE MARKETING AGENCY
//         </p>

//         {/* Call to Action */}
//         <a
//           href="#client-speak"
//           className="bg-red-600 hover:bg-red-700 text-white py-2 px-8 rounded-lg font-bold transition duration-300"
//         >
//           Client Speak
//         </a>

//         {/* Stats Section */}
//         <div className="flex justify-center space-x-12 mt-8 text-white">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold">15+</h2>
//             <p>Years in Business</p>
//           </div>
//           <div className="text-center">
//             <h2 className="text-3xl font-bold">20 Cr+</h2>
//             <p>Revenue Generate</p>
//           </div>
//           <div className="text-center">
//             <h2 className="text-3xl font-bold">150+</h2>
//             <p>Businesses Transformed</p>
//           </div>
//           <div className="text-center">
//             <h2 className="text-3xl font-bold">5+</h2>
//             <p>Websites Launched</p>
//           </div>
//         </div>
//       </div>

//       {/* WhatsApp Floating Button */}
//       <a
//         href="https://wa.me/+918438080309?text=urlencodedtext"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-4 right-4 md:bottom-10 md:right-10 w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//         aria-label="Contact us on WhatsApp"
//       >
//         <img
//           className="w-full h-full object-contain"
//           src={whatsapp}
//           alt="WhatsApp"
//         />
//       </a>
//     </div>
//   );
// };

// export default MainBanner;

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
          GROW YOUR BUSINESS 10X WITH INDIA’S BEST E-COMMERCE MARKETING AGENCY
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
