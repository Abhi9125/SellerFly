import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import locationIcon from "../Images/Semi Header_Logo/location.png";
import telephoneIcon from "../Images/Semi Header_Logo/telephone.png";
import emailIcon from "../Images/Semi Header_Logo/email.png";
import instagram from "../Images/Semi Header_Logo/instagram.png";
import linkedIn from "../Images/Semi Header_Logo/linkedIn.png";

const SemiHeader = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-black py-3 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Location, Telephone, and Email */}
        <div
          className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8"
          data-aos="fade-down"
        >
          <div className="flex items-center space-x-3">
            <img src={locationIcon} alt="Location" className="h-5 w-5" />
            <span className="text-sm text-white font-medium hover:text-red-500 transition-colors duration-200">
              Chennai | Tirupur | Coimbatore
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <img src={telephoneIcon} alt="Telephone" className="h-5 w-5" />
            <span className="text-sm text-white font-medium hover:text-red-500 transition-colors duration-200">
              +91-6381780309
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <img src={emailIcon} alt="Email" className="h-5 w-5" />
            <span className="text-sm text-white font-medium hover:text-red-500 transition-colors duration-200">
              sellerflyonline@gmail.com
            </span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div
          className="flex items-center space-x-6 mt-3 sm:mt-0"
          data-aos="fade-up"
        >
          <a
            href="https://www.instagram.com/sellerfly_business_solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-300"
            aria-label="Visit our Instagram"
          >
            <img
              src={instagram}
              alt="Instagram"
              className="h-5 w-5 md:h-6 md:w-6"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/99096996/admin/feed/posts/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-300"
            aria-label="Visit our LinkedIn"
          >
            <img
              src={linkedIn}
              alt="LinkedIn"
              className="h-5 w-5 md:h-6 md:w-6"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SemiHeader;
