// import React from "react";

// const OurSuccessStory = () => {
//   const successStories = [
//     {
//       image1: `${process.env.PUBLIC_URL}/SuccessStory/glowroad.png`,
//       image2: `${process.env.PUBLIC_URL}/SuccessStory/GlowRoad_Business.png`,
//       description: "GENERATED 6.7+ SALES ORGANICALLY IN JUST 3 MONTHS",
//     },
//     {
//       image1: `${process.env.PUBLIC_URL}/SuccessStory/GlowRoad_Business.png`,
//       image2: `${process.env.PUBLIC_URL}/SuccessStory/Shop101_Business.png`,
//       description: "GENERATED 1.5 CRORE+ SALES ORGANICALLY IN JUST 1 MONTH",
//     },
//     {
//       image1: `${process.env.PUBLIC_URL}/SuccessStory/meesho.png`,
//       image2: `${process.env.PUBLIC_URL}/SuccessStory/Meesho_Business.png`,
//       description: "GENERATED 30+ LAKHS SALES ORGANICALLY IN JUST 3 MONTHS",
//     },
//     {
//       image1: `${process.env.PUBLIC_URL}/SuccessStory/flipkart.png`,
//       image2: `${process.env.PUBLIC_URL}/SuccessStory/Flipkart_Business.png`,
//       description: "GENERATED 27.7+ LAKHS SALES ORGANICALLY IN JUST 5 MONTHS",
//     },
//   ];

//   return (
//     <section className="bg-white text-gray-800 py-12">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h3 className="text-3xl sm:text-4xl font-bold text-red-600 uppercase">
//             Our Success Story
//           </h3>
//         </div>

//         {/* Success Stories Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {successStories.map((story, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               {/* Large Image */}
//               <div className="mb-4">
//                 <img
//                   src={story.image2}
//                   alt={`Success Story ${index + 1} - 1`}
//                   className="w-full h-48 object-cover rounded-lg mb-2"
//                 />
//               </div>

//               {/* Small Logo */}
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={story.image1}
//                   alt={`Success Story ${index + 1} - 2`}
//                   className="w-24 h-24 object-contain"
//                 />
//               </div>

//               {/* Description */}
//               <p className="text-center font-semibold text-gray-700">
//                 {story.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurSuccessStory;

// import React from "react";

// const OurSuccessStory = () => {
//   const successStories = [
//     {
//       image1: `${process.env.PUBLIC_URL}/SuccessStory/glowroad.png`,
//       image2: `${process.env.PUBLIC_URL}/SuccessStory/GlowRoad_Business.png`,
//       description: "GENERATED 6.7+ SALES ORGANICALLY IN JUST 3 MONTHS",
//     },
//     {
//       image1: `${process.env.PUBLIC_URL}/SuccessStory/GlowRoad_Business.png`,
//       image2: `${process.env.PUBLIC_URL}/SuccessStory/Shop101_Business.png`,
//       description: "GENERATED 1.5 CRORE+ SALES ORGANICALLY IN JUST 1 MONTH",
//     },
//     {
//       image1: `${process.env.PUBLIC_URL}/SuccessStory/meesho.png`,
//       image2: `${process.env.PUBLIC_URL}/SuccessStory/Meesho_Business.png`,
//       description: "GENERATED 30+ LAKHS SALES ORGANICALLY IN JUST 3 MONTHS",
//     },
//     {
//       image1: `${process.env.PUBLIC_URL}/SuccessStory/flipkart.png`,
//       image2: `${process.env.PUBLIC_URL}/SuccessStory/Flipkart_Business.png`,
//       description: "GENERATED 27.7+ LAKHS SALES ORGANICALLY IN JUST 5 MONTHS",
//     },
//   ];

//   return (
//     <section className="bg-white text-gray-800 py-12">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h3 className="text-3xl sm:text-4xl font-bold text-red-600 uppercase">
//             Our Success Story
//           </h3>
//         </div>

//         {/* Success Stories Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {successStories.map((story, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               {/* Large Image */}
//               <div className="mb-4">
//                 <img
//                   src={story.image2}
//                   alt={`Success Story ${index + 1} - 1`}
//                   className="w-full h-48 object-cover rounded-lg mb-2"
//                 />
//               </div>

//               {/* Small Logo */}
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={story.image1}
//                   alt={`Success Story ${index + 1} - 2`}
//                   className="w-24 h-24 object-contain"
//                 />
//               </div>

//               {/* Description */}
//               <p className="text-center font-semibold text-gray-700">
//                 {story.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurSuccessStory;

import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const OurSuccessStory = () => {
  const successStories = [
    {
      image1: `${process.env.PUBLIC_URL}/SuccessStory/glowroad.png`,
      image2: `${process.env.PUBLIC_URL}/SuccessStory/GlowRoad_Business.png`,
      description: "GENERATED 6.7+ SALES ORGANICALLY IN JUST 3 MONTHS",
    },
    {
      image1: `${process.env.PUBLIC_URL}/SuccessStory/GlowRoad_Business.png`,
      image2: `${process.env.PUBLIC_URL}/SuccessStory/Shop101_Business.png`,
      description: "GENERATED 1.5 CRORE+ SALES ORGANICALLY IN JUST 1 MONTH",
    },
    {
      image1: `${process.env.PUBLIC_URL}/SuccessStory/meesho.png`,
      image2: `${process.env.PUBLIC_URL}/SuccessStory/Meesho_Business.png`,
      description: "GENERATED 30+ LAKHS SALES ORGANICALLY IN JUST 3 MONTHS",
    },
    {
      image1: `${process.env.PUBLIC_URL}/SuccessStory/flipkart.png`,
      image2: `${process.env.PUBLIC_URL}/SuccessStory/Flipkart_Business.png`,
      description: "GENERATED 27.7+ LAKHS SALES ORGANICALLY IN JUST 5 MONTHS",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const length = successStories.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Automatically change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="bg-white text-gray-800 py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-red-600 uppercase">
            Our Success Story
          </h3>
        </div>

        {/* Success Stories Slideshow */}
        <div className="relative flex justify-center items-center">
          {/* Left Arrow */}
          <FaArrowAltCircleLeft
            onClick={prevSlide}
            className="absolute left-8 text-4xl text-gray-600 cursor-pointer hover:text-red-600 z-10"
          />

          {successStories.map((story, index) => (
            <div
              key={index}
              className={
                index === currentSlide
                  ? "opacity-100 transition-opacity duration-1000 ease-in-out"
                  : "opacity-0"
              }
            >
              {index === currentSlide && (
                <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg w-full lg:w-full">
                  {/* Large Image */}
                  <div className="mb-4">
                    <img
                      src={story.image2}
                      alt={`Success Story ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg mb-2"
                    />
                  </div>

                  {/* Small Logo */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={story.image1}
                      alt={`Success Story Logo ${index + 1}`}
                      className="w-24 h-24 object-contain"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-center font-semibold text-gray-700">
                    {story.description}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Right Arrow */}
          <FaArrowAltCircleRight
            onClick={nextSlide}
            className="absolute right-8 text-4xl text-gray-600 cursor-pointer hover:text-red-600 z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default OurSuccessStory;

// import React, { useState, useEffect } from "react";

// const OurSuccessStory = () => {
//   const successStories = [
//     {
//       image1: `${process.env.PUBLIC_URL}/SuccessStory/glowroad.png`,
//       image2: `${process.env.PUBLIC_URL}/SuccessStory/GlowRoad_Business.png`,
//       description: "GENERATED 6.7+ SALES ORGANICALLY IN JUST 3 MONTHS",
//     },
//     {
//       image1: `${process.env.PUBLIC_URL}/SuccessStory/GlowRoad_Business.png`,
//       image2: `${process.env.PUBLIC_URL}/SuccessStory/Shop101_Business.png`,
//       description: "GENERATED 1.5 CRORE+ SALES ORGANICALLY IN JUST 1 MONTH",
//     },
//     {
//       image1: `${process.env.PUBLIC_URL}/SuccessStory/meesho.png`,
//       image2: `${process.env.PUBLIC_URL}/SuccessStory/Meesho_Business.png`,
//       description: "GENERATED 30+ LAKHS SALES ORGANICALLY IN JUST 3 MONTHS",
//     },
//     {
//       image1: `${process.env.PUBLIC_URL}/SuccessStory/flipkart.png`,
//       image2: `${process.env.PUBLIC_URL}/SuccessStory/Flipkart_Business.png`,
//       description: "GENERATED 27.7+ LAKHS SALES ORGANICALLY IN JUST 5 MONTHS",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const length = successStories.length;

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000); // Automatically change slide every 3 seconds
//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   return (
//     <section className="bg-red-100 text-gray-800 py-12 relative">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h3 className="text-4xl sm:text-5xl font-bold text-red-600 uppercase">
//             Our Success Stories
//           </h3>
//         </div>

//         {/* Success Stories Slideshow */}
//         <div className="relative flex justify-center items-center">
//           {/* Horizontal Card Scroll */}
//           <div className="flex overflow-hidden w-full justify-center">
//             {successStories.map((story, index) => (
//               <div
//                 key={index}
//                 className={
//                   index === currentSlide
//                     ? "flex-shrink-0 opacity-100 transition-opacity duration-1000 ease-in-out w-full lg:w-full mx-2"
//                     : "hidden"
//                 }
//               >
//                 {index === currentSlide && (
//                   <div className="flex flex-col items-center bg-red-200 p-6 rounded-lg shadow-lg w-full lg:w-full">
//                     {/* Large Image */}
//                     <div className="mb-4">
//                       <img
//                         src={story.image2}
//                         alt={`Success Story ${index + 1}`}
//                         className="w-full h-48 object-cover rounded-lg mb-2"
//                       />
//                     </div>

//                     {/* Small Logo */}
//                     <div className="flex justify-center mb-4">
//                       <img
//                         src={story.image1}
//                         alt={`Success Story Logo ${index + 1}`}
//                         className="w-20 h-20 object-contain rounded-full shadow-md"
//                       />
//                     </div>

//                     {/* Description */}
//                     <p className="text-center font-semibold text-gray-700 text-lg">
//                       {story.description}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Ellipsis for next/previous slides */}
//           <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-4 mt-4">
//             <button
//               onClick={prevSlide}
//               className="text-gray-500 text-3xl focus:outline-none"
//             >
//               ...
//             </button>
//             <button
//               onClick={nextSlide}
//               className="text-gray-500 text-3xl focus:outline-none"
//             >
//               ...
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurSuccessStory;
