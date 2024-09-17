import React from "react";
import { useLocation } from "react-router-dom";
import contact_banner from "../Images/Rout_Banner/contact-us.png";
import bgImage from "../Images/new_img.png";
const HeroBanner = () => {
  const location = useLocation();

  // Set title based on route
  let title = "";
  //   const bgImage = "https://example.com/your-banner-image.jpg"; // Replace with your banner image URL

  if (location.pathname === "/contact-us") {
    title = "Contact Us";
  } else if (location.pathname === "/book-appointment") {
    title = "Book an Appointment";
  }

  // Display banner only on specific routes
  const showBanner = title !== "";

  if (!showBanner) return null; // Return null if not on the correct route

  return (
    <div
      className="h-72 mb-2 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${contact_banner})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default HeroBanner;
