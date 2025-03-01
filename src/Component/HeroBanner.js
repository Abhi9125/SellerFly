import React from "react";
import { Link, useLocation } from "react-router-dom";
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
    <div>
      {/* Hero Section */}
      <div
        className="relative h-40 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${contact_banner})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Hero content */}
        <div className="relative z-10 text-center text-white">
          <p className="text-sm uppercase tracking-wider mb-2">
            <Link to="/" className="hover:underline">
              HOME
            </Link>
            <span className="mx-2">{">"}</span>
            PAGES
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold">Contact Us</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
