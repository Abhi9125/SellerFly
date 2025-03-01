import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import whatsappIcon from "../Images/whatsapp.png"; // Ensure the correct path to your WhatsApp icon

// Import banner images
import banner1 from "../Images/Main-Banner/FontPage_Banner61.png";
import banner2 from "../Images/Main-Banner/FrontPage_banner12.png";
import banner3 from "../Images/Main-Banner/FrontPage_Banner43.png";
import banner4 from "../Images/Main-Banner/FrontPage_banner34.png";
import banner5 from "../Images/Main-Banner/FrontPage_Banner55.png";

// import banner1 from "../Images/Main-Banner/BannerImages/FontPage_Banner61.jpg";
// import banner2 from "../Images/Main-Banner/BannerImages/FrontPage_banner12.jpg";
// import banner3 from "../Images/Main-Banner/BannerImages/FrontPage_Banner43.jpg";
// import banner4 from "../Images/Main-Banner/BannerImages/FrontPage_banner34.jpg";
// import banner5 from "../Images/Main-Banner/BannerImages/FrontPage_Banner55.jpg";
import { Link } from "react-router-dom";

// Custom Arrow Components with updated color
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl z-10 cursor-pointer text-[#ab5836] hover:text-black"
      onClick={onClick}
    >
      &#60;
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl z-10 cursor-pointer text-[#ab5836] hover:text-black"
      onClick={onClick}
    >
      &#62;
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
      imageUrl: banner1,
      animation: "fade-up",
    },
    {
      imageUrl: banner2,
      animation: "fade-up",
    },
    {
      imageUrl: banner3,
      animation: "fade-up",
    },
    {
      imageUrl: banner4,
      animation: "fade-up",
    },
    {
      imageUrl: banner5,
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
            />
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
