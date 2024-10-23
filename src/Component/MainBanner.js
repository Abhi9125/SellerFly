// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import whatsappIcon from "../Images/whatsapp.png"; // Ensure the correct path to your WhatsApp icon

// // Import banner images
// import banner1 from "../Images/Main-Banner/banner sellerfly-9.png";
// import banner2 from "../Images/Main-Banner/banner sellerfly-10.png";
// import banner3 from "../Images/Main-Banner/banner sellerfly-11.png";
// import { Link } from "react-router-dom";

// const MainBanner = () => {
//   React.useEffect(() => {
//     AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
//   }, []);

//   const settings = {
//     dots: true, // Show navigation dots
//     infinite: true, // Enable infinite looping
//     speed: 700, // Transition speed in ms
//     slidesToShow: 1, // Number of slides to show at once
//     slidesToScroll: 1, // Number of slides to scroll on navigation
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 7000, // Autoplay speed in ms
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
//           arrows: false, // Hide arrows on smaller screens for better UX
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

//   // Banner content
//   const banners = [
//     {
//       title: "Empower Your Business on India’s Leading E-Commerce Platforms",
//       description:
//         "Expand your reach and accelerate growth by selling your products across top marketplaces like Amazon, Flipkart, Meesho, and more with SellerFly.",
//       buttonText: "Get Started Today",
//       imageUrl: banner1,
//       animation: "fade-up", // AOS animation
//     },
//     {
//       title: "Drive More Sales with Custom Web Solutions",
//       description:
//         "Enhance your online presence and scale effortlessly with our tailored web development services designed to grow alongside your business.",
//       buttonText: "Get Started Today",
//       imageUrl: banner2,
//       animation: "fade-up",
//     },
//     {
//       title: "Expand Your Reach Through Strategic Social Media Marketing",
//       description:
//         "Grow your business and engage a wider audience using our expert social media strategies tailored to maximize your brand’s impact.",
//       buttonText: "Get Started Today",
//       imageUrl: banner3,
//       animation: "fade-up",
//     },
//   ];

//   return (
//     <div className="main-banner relative overflow-hidden">
//       <Slider {...settings}>
//         {banners.map((banner, index) => (
//           <div key={index} className="relative">
//             {/* Banner Image */}
//             <img
//               src={banner.imageUrl}
//               alt={banner.title}
//               className="w-full h-full md:h-full object-contain" // Changed to object-contain for proper scaling
//               loading="lazy"
//             />

//             {/* Overlay Content */}
//             <div
//               className="absolute inset-0 bg-black bg-opacity-0 flex flex-col justify-start items-center text-center px-4 sm:px-6 lg:px-8 pt-4 md:pt-20 sm:pt-4"
//               aria-hidden="true" // Hide from screen readers if purely decorative
//             >
//               {/* Title with AOS Animation */}
//               {/* <h2
//                 className="text-red-800 text-3xl md:text-7xl font-extrabold mb-4 drop-shadow-lg"
//                 data-aos={banner.animation}
//               >
//                 {banner.title}
//               </h2> */}

//               {/* Description with AOS Animation and Delay */}
//               {/* <p
//                 className="text-black font-bold text-2xl md:text-2xl max-w-2xl mb-6 drop-shadow-lg"
//                 data-aos="fade-up"
//                 data-aos-delay="200"
//               >
//                 {banner.description}
//               </p> */}

//               {/* CTA Button with AOS Animation and Hover Effect */}
//               {/* <button
//                 className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
//                 aria-label={banner.buttonText}
//                 data-aos="fade-up"
//                 data-aos-delay="400"
//               >
//                 <Link to="/contact-us">{banner.buttonText}</Link>
//               </button> */}
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

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import whatsappIcon from "../Images/whatsapp.png"; // Ensure the correct path to your WhatsApp icon

// Import banner images
import banner1 from "../Images/Main-Banner/banner sellerfly-9.png";
import banner2 from "../Images/Main-Banner/banner sellerfly-10.png";
import banner3 from "../Images/Main-Banner/banner sellerfly-11.png";
import { Link } from "react-router-dom";

// Custom Arrow Component
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl z-10 cursor-pointer text-red-700 hover:text-black"
      onClick={onClick}
    >
      &#60; {/* Represents '<' */}
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl z-10 cursor-pointer text-red-700 hover:text-black"
      onClick={onClick}
    >
      &#62; {/* Represents '>' */}
    </div>
  );
};

const MainBanner = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
  }, []);

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite looping
    speed: 700, // Transition speed in ms
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll on navigation
    autoplay: true, // Enable autoplay
    autoplaySpeed: 7000, // Autoplay speed in ms
    pauseOnHover: false, // Pause autoplay on hover
    adaptiveHeight: true, // Adjust slide height based on content
    accessibility: true, // Enable keyboard navigation
    swipeToSlide: true, // Allow swiping to navigate
    prevArrow: <CustomPrevArrow />, // Add custom previous arrow
    nextArrow: <CustomNextArrow />, // Add custom next arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  // Banner content
  const banners = [
    {
      title: "Empower Your Business on India’s Leading E-Commerce Platforms",
      description:
        "Expand your reach and accelerate growth by selling your products across top marketplaces like Amazon, Flipkart, Meesho, and more with SellerFly.",
      buttonText: "Get Started Today",
      imageUrl: banner1,
      animation: "fade-up",
    },
    {
      title: "Drive More Sales with Custom Web Solutions",
      description:
        "Enhance your online presence and scale effortlessly with our tailored web development services designed to grow alongside your business.",
      buttonText: "Get Started Today",
      imageUrl: banner2,
      animation: "fade-up",
    },
    {
      title: "Expand Your Reach Through Strategic Social Media Marketing",
      description:
        "Grow your business and engage a wider audience using our expert social media strategies tailored to maximize your brand’s impact.",
      buttonText: "Get Started Today",
      imageUrl: banner3,
      animation: "fade-up",
    },
  ];

  return (
    <div className="main-banner relative overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="relative">
            {/* Banner Image */}
            <img
              src={banner.imageUrl}
              alt={banner.title}
              className="w-full h-full md:h-full object-cover"
              loading="lazy"
            />

            {/* Overlay Content */}
            <div
              className="absolute inset-0 bg-black bg-opacity-0 flex flex-col justify-start items-center text-center px-4 sm:px-6 lg:px-8 pt-4 md:pt-20 sm:pt-4"
              aria-hidden="true" // Hide from screen readers if purely decorative
            >
              {/* Title with AOS Animation */}
              {/* Uncomment below lines to show title */}
              {/* <h2
                className="text-red-800 text-3xl md:text-7xl font-extrabold mb-4 drop-shadow-lg"
                data-aos={banner.animation}
              >
                {banner.title}
              </h2> */}

              {/* Description with AOS Animation and Delay */}
              {/* Uncomment below lines to show description */}
              {/* <p
                className="text-black font-bold text-2xl md:text-2xl max-w-2xl mb-6 drop-shadow-lg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {banner.description}
              </p> */}

              {/* CTA Button with AOS Animation and Hover Effect */}
              {/* Uncomment below lines to show button */}
              {/* <button
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                aria-label={banner.buttonText}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Link to="/contact-us">{banner.buttonText}</Link>
              </button> */}
            </div>
          </div>
        ))}
      </Slider>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+918438080309?text=Hello%20SellerFly"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-10 md:right-10 w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-125 duration-300 animate-bounce z-50"
        aria-label="Contact us on WhatsApp"
      >
        <img
          className="w-6 h-6 md:w-8 md:h-8"
          src={whatsappIcon}
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default MainBanner;
