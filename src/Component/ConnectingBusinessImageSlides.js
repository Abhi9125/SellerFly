// // export default ConnectingBusinessImageSlides;

// import React, { useState, useEffect } from "react";
// import { SliderDataforConnectingBusinesses } from "./SliderData";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

// const ConnectingBusinessImageSlides = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((current) => (current === length - 1 ? 0 : current + 1));
//     }, 2500); // Change image every 3 seconds

//     return () => clearInterval(interval);
//   }, [length]);

//   if (!Array.isArray(slides) || length === 0) return null;

//   const previousSlide = () =>
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);

//   return (
//     <section className="bg-gray-100 py-12">
//       <h2 className="text-3xl font-bold text-center mb-10">
//         We Connect Your Business With Potential Buyers!
//       </h2>
//       <div className="relative flex justify-center items-center overflow-hidden">
//         <FaArrowAltCircleLeft
//           className="absolute left-0 z-10 cursor-pointer select-none text-3xl text-gray-500 hover:text-blue-400 transition duration-300 ease-in-out ml-6"
//           onClick={previousSlide}
//         />
//         <FaArrowAltCircleRight
//           className="absolute right-0 z-10 cursor-pointer select-none text-3xl text-gray-500 hover:text-blue-400 transition duration-300 ease-in-out mr-6"
//           onClick={nextSlide}
//         />
//         {SliderDataforConnectingBusinesses.map((slide, index) => {
//           return (
//             <div
//               className={`${
//                 index === current? "opacity-100 scale-100"
//                   : "opacity-0 scale-95"
//               } transition duration-1000 ease-in-out transform`}
//               key={index}
//             >
//               {index === current && (
//                 <img
//                   src={slide.image}
//                   alt={slide.title}
//                   className="w-50 h-24 block"
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
//       <h2 className="text-3xl font-bold text-center mb-10">
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
//                   className="max-w-full max-h-72 block rounded-lg shadow-lg"
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

import React, { useState, useEffect } from "react";
import { SliderDataforConnectingBusinesses } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ConnectingBusinessImageSlides = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [length]);

  if (!Array.isArray(slides) || length === 0) return null;

  const previousSlide = () =>
    setCurrent(current === 0 ? length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);

  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        We Connect Your Business With Potential Buyers!
      </h2>
      <div className="relative flex justify-center items-center overflow-hidden">
        <FaArrowAltCircleLeft
          className="absolute left-0 z-10 cursor-pointer select-none text-3xl text-gray-500 hover:text-red-600 transition duration-300 ease-in-out ml-6"
          onClick={previousSlide}
          aria-label="Previous Slide"
        />
        <FaArrowAltCircleRight
          className="absolute right-0 z-10 cursor-pointer select-none text-3xl text-gray-500 hover:text-red-600 transition duration-300 ease-in-out mr-6"
          onClick={nextSlide}
          aria-label="Next Slide"
        />
        {SliderDataforConnectingBusinesses.map((slide, index) => {
          return (
            <div
              className={`${
                index === current
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              } transition-opacity duration-1000 ease-in-out transform`}
              key={index}
            >
              {index === current && (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-[600px] h-[100px] object-contain block rounded-lg shadow-lg"
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
