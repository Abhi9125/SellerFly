// import React, { useState, useEffect } from "react";
// import { SliderDataforConnectingBusinesses } from "./SliderData";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

// const ConnectingBusinessImageSlides = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   // Auto slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((current) => (current === length - 1 ? 0 : current + 1));
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval);
//   }, [length]);

//   if (!Array.isArray(slides) || length === 0) return null;

//   const previousSlide = () =>
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);

//   return (
//     <section className="bg-gray-100 py-12">
//       <h2 className="text-3xl font-bold text-center mb-10 text-red-600">
//         We Connect Your Business With Potential Buyers!
//       </h2>
//       <div className="relative flex justify-center items-center overflow-hidden">
//         <FaArrowAltCircleLeft
//           className="absolute left-0 z-10 cursor-pointer select-none text-3xl text-gray-500 hover:text-red-600 transition duration-300 ease-in-out ml-6"
//           onClick={previousSlide}
//           aria-label="Previous Slide"
//         />
//         <FaArrowAltCircleRight
//           className="absolute right-0 z-10 cursor-pointer select-none text-3xl text-gray-500 hover:text-red-600 transition duration-300 ease-in-out mr-6"
//           onClick={nextSlide}
//           aria-label="Next Slide"
//         />
//         {SliderDataforConnectingBusinesses.map((slide, index) => {
//           return (
//             <div
//               className={`${
//                 index === current
//                   ? "opacity-100 scale-100"
//                   : "opacity-0 scale-95"
//               } transition-opacity duration-1000 ease-in-out transform`}
//               key={index}
//             >
//               {index === current && (
//                 <img
//                   src={slide.image}
//                   alt={slide.title}
//                   className="w-full max-w-[600px] h-[100px] object-contain block rounded-lg shadow-lg"
//                 />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default ConnectingBusinessImageSlides;

// import React from "react";
// import { SliderDataforConnectingBusinesses } from "./SliderData";

// const ConnectingBusinessImageSlides = () => {
//   return (
//     <section className="bg-gray-100 py-12">
//       <h2 className="text-3xl font-bold text-center mb-10 text-red-600">
//         We Connect Your Business With Potential Buyers!
//       </h2>
//       <div className="relative flex justify-center items-center overflow-hidden w-full">
//         <div className="flex gap-8 animate-marquee">
//           {/* First loop of slides */}
//           {SliderDataforConnectingBusinesses.map((slide, index) => (
//             <div
//               className="min-w-[300px] sm:min-w-[400px] lg:min-w-[500px] h-[200px] object-contain flex-shrink-0"
//               key={index}
//             >
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-cover rounded-lg shadow-lg"
//               />
//             </div>
//           ))}

//           {/* Duplicate loop of slides to create seamless transition */}
//           {SliderDataforConnectingBusinesses.map((slide, index) => (
//             <div
//               className="min-w-[300px] sm:min-w-[400px] lg:min-w-[500px] h-[200px] object-contain flex-shrink-0"
//               key={`duplicate-${index}`}
//             >
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-cover rounded-lg shadow-lg"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConnectingBusinessImageSlides;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SliderDataforConnectingBusinesses } from "./SliderData";

const ConnectingBusinessImageSlides = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gray-100 py-12">
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
