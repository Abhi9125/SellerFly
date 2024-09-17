// import React, { useState, useEffect } from "react";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

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
//     <section className="bg-white text-gray-800 py-12 relative">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h3 className="text-3xl sm:text-4xl font-bold text-red-600 uppercase">
//             Our Success Story
//           </h3>
//         </div>

//         {/* Success Stories Slideshow */}
//         <div className="relative flex justify-center items-center">
//           {/* Left Arrow */}
//           <FaArrowAltCircleLeft
//             onClick={prevSlide}
//             className="absolute left-8 text-4xl text-gray-600 cursor-pointer hover:text-red-600 z-10"
//           />

//           {successStories.map((story, index) => (
//             <div
//               key={index}
//               className={
//                 index === currentSlide
//                   ? "opacity-100 transition-opacity duration-1000 ease-in-out"
//                   : "opacity-0"
//               }
//             >
//               {index === currentSlide && (
//                 <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg w-full lg:w-full">
//                   {/* Large Image */}
//                   <div className="mb-4">
//                     <img
//                       src={story.image2}
//                       alt={`Success Story ${index + 1}`}
//                       className="w-full h-48 object-cover rounded-lg mb-2"
//                     />
//                   </div>

//                   {/* Small Logo */}
//                   <div className="flex justify-center mb-4">
//                     <img
//                       src={story.image1}
//                       alt={`Success Story Logo ${index + 1}`}
//                       className="w-24 h-24 object-contain"
//                     />
//                   </div>

//                   {/* Description */}
//                   <p className="text-center font-semibold text-gray-700">
//                     {story.description}
//                   </p>
//                 </div>
//               )}
//             </div>
//           ))}

//           {/* Right Arrow */}
//           <FaArrowAltCircleRight
//             onClick={nextSlide}
//             className="absolute right-8 text-4xl text-gray-600 cursor-pointer hover:text-red-600 z-10"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurSuccessStory;

// import React, { useState, useEffect } from "react";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

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
//     }, 4000); // Automatically change slide every 4 seconds
//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   return (
//     <section className="bg-white text-gray-800 py-12 relative">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h3 className="text-3xl sm:text-4xl font-bold text-red-600 uppercase">
//             Our Success Stories
//           </h3>
//         </div>

//         {/* Success Stories Slideshow */}
//         <div className="relative flex justify-center items-center">
//           {/* Left Arrow */}
//           <FaArrowAltCircleLeft
//             onClick={prevSlide}
//             className="absolute left-8 text-4xl text-gray-600 cursor-pointer hover:text-red-600 z-10 transition-transform transform hover:scale-110"
//           />

//           {successStories.map((story, index) => (
//             <div
//               key={index}
//               className={
//                 index === currentSlide
//                   ? "opacity-100 scale-100 transition-opacity duration-1000 ease-in-out transform"
//                   : "opacity-0 scale-95 transition-opacity duration-1000 ease-in-out transform"
//               }
//             >
//               {index === currentSlide && (
//                 <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg w-full lg:w-full">
//                   {/* Large Image */}
//                   <div className="mb-4">
//                     <img
//                       src={story.image2}
//                       alt={`Success Story ${index + 1}`}
//                       className="w-full h-48 object-cover rounded-lg mb-2"
//                     />
//                   </div>

//                   {/* Small Logo */}
//                   <div className="flex justify-center mb-4">
//                     <img
//                       src={story.image1}
//                       alt={`Success Story Logo ${index + 1}`}
//                       className="w-24 h-24 object-contain"
//                     />
//                   </div>

//                   {/* Description */}
//                   <p className="text-center font-semibold text-gray-700">
//                     {story.description}
//                   </p>
//                 </div>
//               )}
//             </div>
//           ))}

//           {/* Right Arrow */}
//           <FaArrowAltCircleRight
//             onClick={nextSlide}
//             className="absolute right-8 text-4xl text-gray-600 cursor-pointer hover:text-red-600 z-10 transition-transform transform hover:scale-110"
//           />

//           {/* Dots Navigation */}
//           <div className="absolute bottom-4 flex justify-center space-x-2">
//             {successStories.map((_, idx) => (
//               <div
//                 key={idx}
//                 className={`w-3 h-3 rounded-full ${
//                   idx === currentSlide ? "bg-red-600" : "bg-gray-400"
//                 }`}
//               ></div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurSuccessStory;

// import React, { useState, useEffect } from "react";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

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
//     setCurrentSlide((prev) => (prev === length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? length - 1 : prev - 1));
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 4000); // Automatically change slide every 4 seconds
//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   return (
//     <section className="bg-white text-gray-800 py-12 relative">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h3 className="text-3xl sm:text-4xl font-bold text-red-600 uppercase">
//             Our Success Stories
//           </h3>
//         </div>

//         {/* Success Stories Slideshow */}
//         <div className="relative flex justify-center items-center">
//           {/* Left Arrow */}
//           <FaArrowAltCircleLeft
//             onClick={prevSlide}
//             className="absolute left-8 text-4xl text-gray-600 cursor-pointer hover:text-red-600 z-10 transition-transform transform hover:scale-110"
//           />

//           {successStories.map((story, index) => (
//             <div
//               key={index}
//               className={
//                 index === currentSlide
//                   ? "opacity-100 scale-100 transition-opacity duration-1000 ease-in-out transform"
//                   : "opacity-0 scale-95 transition-opacity duration-1000 ease-in-out transform"
//               }
//             >
//               {index === currentSlide && (
//                 <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg w-full lg:w-full">
//                   {/* Large Image */}
//                   <div className="mb-4">
//                     <img
//                       src={story.image2}
//                       alt={`Success Story ${index + 1}`}
//                       className="w-full h-48 object-cover rounded-lg mb-2"
//                     />
//                   </div>

//                   {/* Small Logo */}
//                   <div className="flex justify-center mb-4">
//                     <img
//                       src={story.image1}
//                       alt={`Success Story Logo ${index + 1}`}
//                       className="w-24 h-24 object-contain"
//                     />
//                   </div>

//                   {/* Description */}
//                   <p className="text-center font-semibold text-gray-700">
//                     {story.description}
//                   </p>
//                 </div>
//               )}
//             </div>
//           ))}

//           {/* Right Arrow */}
//           <FaArrowAltCircleRight
//             onClick={nextSlide}
//             className="absolute right-8 text-4xl text-gray-600 cursor-pointer hover:text-red-600 z-10 transition-transform transform hover:scale-110"
//           />

//           {/* Dots Navigation */}
//           <div className="absolute bottom-4 flex justify-center space-x-2">
//             {successStories.map((_, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => goToSlide(idx)}
//                 className={`w-3 h-3 rounded-full cursor-pointer ${
//                   idx === currentSlide ? "bg-red-600" : "bg-gray-400"
//                 }`}
//               ></div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurSuccessStory;

import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Flipkart_Business from "../Images/SuccessStory/Flipkart_Business.png";
import Flipkart_logo from "../Images/SuccessStory/flipkart.png";
import GlowRoad_Business from "../Images/SuccessStory/GlowRoad_Business.png";
import GrowRoad_logo from "../Images/SuccessStory/glowroad.png";
import Meesho_Business from "../Images/SuccessStory/Meesho_Business.png";
import Meesho_logo from "../Images/SuccessStory/meesho.png";
import Shop101_Business from "../Images/SuccessStory/Shop101_Business.png";

const successStories = [
  {
    image1: GrowRoad_logo,
    image2: GlowRoad_Business,
    description: "GENERATED 6.7+ SALES ORGANICALLY IN JUST 3 MONTHS",
  },
  {
    image1: Flipkart_logo,
    image2: Shop101_Business,
    description: "GENERATED 1.5 CRORE+ SALES ORGANICALLY IN JUST 1 MONTH",
  },
  {
    image1: Meesho_logo,
    image2: Meesho_Business,
    description: "GENERATED 30+ LAKHS SALES ORGANICALLY IN JUST 3 MONTHS",
  },
  {
    image1: Flipkart_logo,
    image2: Flipkart_Business,
    description: "GENERATED 27.7+ LAKHS SALES ORGANICALLY IN JUST 5 MONTHS",
  },
];

const OurSuccessStory = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = successStories.length;

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [length]);

  // Prevent unnecessary re-renders by not including currentSlide in dependency array

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      className="bg-white text-gray-800 py-12 relative"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h3 className="text-3xl sm:text-4xl font-bold text-red-600 uppercase mb-4">
            Our Success Stories
          </h3>
          <p className="text-gray-700">
            Celebrating our clients' achievements and milestones.
          </p>
        </div>

        {/* Success Stories Slideshow */}
        <div className="relative flex justify-center items-center">
          {/* Left Arrow */}
          <FaArrowAltCircleLeft
            onClick={prevSlide}
            className="absolute left-2 sm:left-8 text-3xl sm:text-4xl text-gray-600 cursor-pointer hover:text-red-600 z-10 transition-transform transform hover:scale-110 focus:outline-none"
            aria-label="Previous Slide"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") prevSlide();
            }}
            data-aos="fade-right"
            data-aos-delay="500"
          />

          {/* Slides */}
          {successStories.map((story, index) => (
            <div
              key={index}
              className={
                index === currentSlide
                  ? "opacity-100 scale-100 transition-opacity duration-1000 ease-in-out transform"
                  : "opacity-0 scale-95 transition-opacity duration-1000 ease-in-out transform absolute"
              }
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {index === currentSlide && (
                <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg w-full lg:w-full xl:w-full">
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
            className="absolute right-2 sm:right-8 text-3xl sm:text-4xl text-gray-600 cursor-pointer hover:text-red-600 z-10 transition-transform transform hover:scale-110 focus:outline-none"
            aria-label="Next Slide"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") nextSlide();
            }}
            data-aos="fade-left"
            data-aos-delay="500"
          />

          {/* Dots Navigation */}
          <div className="absolute bottom-4 flex justify-center space-x-2">
            {successStories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === currentSlide ? "bg-red-600" : "bg-gray-400"
                } transition-colors duration-300 focus:outline-none`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSuccessStory;
