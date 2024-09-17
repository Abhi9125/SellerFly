// import React, { useState, useEffect } from "react";
// import whatsapp from "../Images/whatsapp.png"; // Replace with the actual path to your WhatsApp icon image

// const MainBanner = () => {
//   const [currentText, setCurrentText] = useState("E-Commerce Marketing");

//   const textArray = [
//     "E-Commerce Marketing",
//     "Digital Marketing",
//     "Website Development",
//   ];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentText((currentText) => {
//         const currentIndex = textArray.indexOf(currentText);
//         const nextIndex = (currentIndex + 1) % textArray.length;
//         return textArray[nextIndex];
//       });
//     }, 3000); // Change text every 3 seconds

//     return () => clearInterval(intervalId); // Cleanup on unmount
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background Image */}
//       <img
//         src="/Header/new_img.png" // Replace with your banner image path
//         alt="Banner"
//         className="absolute inset-0 w-full h-full object-cover transform scale-105 animate-slow-zoom"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-70"></div>

//       {/* Text Content */}
//       <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4 animate-fade-in">
//         <h1 className="text-2xl pt-32 sm:text-3xl lg:text-5xl font-bold mb-6 leading-tight">
//           END-TO-END{" "}
//           <span className="bg-red-600 px-2 py-1 rounded-md animate-pulse">
//             {currentText.toUpperCase()}
//           </span>{" "}
//           SERVICES
//         </h1>
//         <p className="text-sm sm:text-lg lg:text-4xl py-10 max-w-xl mb-6 leading-relaxed animate-slide-up">
//           GROW YOUR BUSINESS 10X WITH INDIA’S BEST{" "}
//           <span className="whitespace-nowrap">E-COMMERCE</span> MARKETING AGENCY
//         </p>

//         {/* Call to Action */}
//         <a
//           href="#client-speak"
//           className="bg-red-600 hover:bg-red-700 text-white py-2 px-8 rounded-lg font-bold transition-transform duration-300 transform hover:scale-110 animate-bounce"
//         >
//           Client Speak
//         </a>

//         {/* Stats Section */}
//         <div className="flex justify-center space-x-4 sm:space-x-8 lg:space-x-12 mt-8 text-white text-sm sm:text-lg lg:text-xl animate-slide-up-delayed">
//           <div className="text-center">
//             <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold animate-fade-in">
//               14+
//             </h2>
//             <p className="animate-slide-up-delayed">Years in Business</p>
//           </div>
//           <div className="text-center">
//             <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold animate-fade-in">
//               20 Cr+
//             </h2>
//             <p className="animate-slide-up-delayed">Revenue Generated</p>
//           </div>
//           <div className="text-center">
//             <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold animate-fade-in">
//               100+
//             </h2>
//             <p className="animate-slide-up-delayed">Businesses Transformed</p>
//           </div>
//           <div className="text-center">
//             <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold animate-fade-in">
//               10+
//             </h2>
//             <p className="animate-slide-up-delayed">Websites Launched</p>
//           </div>
//         </div>
//       </div>

//       {/* WhatsApp Floating Button */}
//       <a
//         href="https://wa.me/+918438080309?text=urlencodedtext"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-4 right-4 md:bottom-10 md:right-10 w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-125 duration-300 animate-bounce"
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

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import whatsapp from "../Images/whatsapp.png"; // Replace with the actual path to your WhatsApp icon image
import banner1 from "../Images/Main-Banner/banner sellerfly-1.png";
import banner2 from "../Images/Main-Banner/banner sellerfly-2.png";
import banner3 from "../Images/Main-Banner/banner sellerfly-3.png";

const MainBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: false,
  };

  // Example banners, replace with your actual banner images and content
  const banners = [
    {
      title: "Banner 1 Title",
      description: "This is a short description for banner 1.",
      imageUrl: banner1,
    },
    {
      title: "Banner 2 Title",
      description: "This is a short description for banner 2.",
      imageUrl: banner2,
    },
    {
      title: "Banner 3 Title",
      description: "This is a short description for banner 3.",
      imageUrl: banner3,
    },
  ];

  return (
    <div className="main-banner">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="relative">
            {/* Image */}
            <img
              src={banner.imageUrl}
              alt={banner.title}
              className="w-full h-screen"
              style={{
                width: "100vw", // Full width of viewport
                height: "100vh", // Full height of viewport
                objectFit: "contain", // Ensures the entire image is visible, but may leave empty space
              }}
            />

            {/* Overlay Content */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
              <h2 className="text-white text-4xl font-bold mb-4">
                {banner.title}
              </h2>
              <p className="text-white text-lg">{banner.description}</p>
            </div> */}
          </div>
        ))}
      </Slider>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+918438080309?text=urlencodedtext"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-10 md:right-10 w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-125 duration-300 animate-bounce"
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

// This code also fix with mode

// import React, { useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import whatsappIcon from "../Images/whatsapp.png"; // Ensure the correct path to your WhatsApp icon

// // Import banner images
// import banner1 from "../Images/Main-Banner/banner sellerfly-1.png";
// import banner2 from "../Images/Main-Banner/banner sellerfly-2.png";
// import banner3 from "../Images/Main-Banner/banner sellerfly-3.png";

// const MainBanner = () => {
//   useEffect(() => {
//     // Any additional side effects can be handled here
//   }, []);

//   const settings = {
//     dots: true, // Show navigation dots
//     infinite: true, // Enable infinite looping
//     speed: 500, // Transition speed in ms
//     slidesToShow: 1, // Number of slides to show at once
//     slidesToScroll: 1, // Number of slides to scroll on navigation
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 2000, // Autoplay speed in ms
//     arrows: true, // Show next and previous arrows
//     pauseOnHover: false, // Pause autoplay on hover
//     adaptiveHeight: true, // Adjust slide height based on content
//     accessibility: true, // Enable keyboard navigation
//     swipeToSlide: true, // Allow swiping to navigate
//     responsive: [
//       // Responsive settings
//       {
//         breakpoint: 1024,
//         settings: {
//           arrows: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           dots: true,
//         },
//       },
//     ],
//   };

//   // Example banners, replace with your actual banner images and content
//   const banners = [
//     {
//       title: "Empower Your Business",
//       description:
//         "Harness the power of digital marketing to reach new heights.",
//       imageUrl: banner1,
//     },
//     {
//       title: "Drive More Sales",
//       description:
//         "Optimize your online presence and boost your conversion rates.",
//       imageUrl: banner2,
//     },
//     {
//       title: "Expand Your Reach",
//       description:
//         "Connect with a global audience through strategic marketing.",
//       imageUrl: banner3,
//     },
//   ];

//   return (
//     <div className="main-banner relative">
//       <Slider {...settings}>
//         {banners.map((banner, index) => (
//           <div key={index} className="relative">
//             {/* Banner Image */}
//             <img
//               src={banner.imageUrl}
//               alt={banner.title}
//               className="w-full h-screen object-cover"
//               loading="lazy"
//             />

//             {/* Overlay Content */}
//             <div
//               className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8"
//               aria-hidden="true" // Hide from screen readers if purely decorative
//             >
//               <h2 className="text-white text-4xl font-extrabold mb-4">
//                 {banner.title}
//               </h2>
//               <p className="text-white text-lg max-w-xl">
//                 {banner.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </Slider>

//       {/* WhatsApp Floating Button */}
//       <a
//         href="https://wa.me/+918438080309?text=Hello%20SellerFly"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-4 right-4 md:bottom-10 md:right-10 w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-125 duration-300 animate-bounce z-50"
//         aria-label="Contact us on WhatsApp"
//       >
//         <img
//           className="w-6 h-6 md:w-8 md:h-8"
//           src={whatsappIcon}
//           alt="WhatsApp"
//         />
//       </a>
//     </div>
//   );
// };

// export default MainBanner;

// this code fix with mode mode

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import whatsapp from "../Images/whatsapp.png"; // Ensure the correct path to your WhatsApp icon
// import banner1 from "../Images/Header/banner sellerfly-1.png"; // Adjust paths as necessary
// import banner2 from "../Images/Header/banner sellerfly-2.png";
// import banner3 from "../Images/Header/banner sellerfly-3.png";

// const MainBanner = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000, // Increased autoplay speed for better UX
//     arrows: true,
//     pauseOnHover: true, // Pause on hover for better control
//     adaptiveHeight: true, // Adjust height based on content
//     responsive: [
//       {
//         breakpoint: 768, // Tablet and below
//         settings: {
//           arrows: false, // Hide arrows on smaller screens
//         },
//       },
//     ],
//   };

//   // Example banners, replace with your actual banner images and content
//   const banners = [
//     {
//       title: "Empower Your Business",
//       description:
//         "Harness the power of digital marketing to reach new heights.",
//       imageUrl: banner1,
//     },
//     {
//       title: "Drive More Sales",
//       description:
//         "Optimize your online presence and boost your conversion rates.",
//       imageUrl: banner2,
//     },
//     {
//       title: "Expand Your Reach",
//       description:
//         "Connect with a global audience through strategic marketing.",
//       imageUrl: banner3,
//     },
//   ];

//   return (
//     <div className="main-banner relative">
//       <Slider {...settings}>
//         {banners.map((banner, index) => (
//           <div key={index} className="relative">
//             {/* Banner Image */}
//             <img
//               src={banner.imageUrl}
//               alt={banner.title}
//               className="w-full object-cover"
//               style={{
//                 height: "70vh", // Adjusted height for better mobile fit
//               }}
//               loading="lazy"
//             />

//             {/* Overlay Content */}
//             <div
//               className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8"
//               aria-hidden="true" // Hide from screen readers if purely decorative
//             >
//               <h2 className="text-white text-4xl font-bold mb-4">
//                 {banner.title}
//               </h2>
//               <p className="text-white text-lg max-w-xl">
//                 {banner.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </Slider>

//       {/* WhatsApp Floating Button */}
//       <a
//         href="https://wa.me/+918438080309?text=Hello%20SellerFly"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-4 right-4 md:bottom-10 md:right-10 w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-125 duration-300 animate-bounce z-50"
//         aria-label="Contact us on WhatsApp"
//       >
//         <img className="w-6 h-6 md:w-8 md:h-8" src={whatsapp} alt="WhatsApp" />
//       </a>
//     </div>
//   );
// };

// export default MainBanner;
