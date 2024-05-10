import React from "react";
import logo_Img from "../Images/logo-main.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-lg py-3 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo_Img} alt="Logo" className="h-16" />
        <nav>
          <ul className="flex space-x-10">
            <Link to="/">
              <li className="text-gray-800 hover:text-blue-600 font-semibold transition duration-300">
                HOME
              </li>
            </Link>

            <Link to="/about-us">
              <li className="text-gray-800 hover:text-blue-600 font-semibold transition duration-300">
                ABOUT US
              </li>
            </Link>
            <Link to="/services">
              <li className="text-gray-800 hover:text-blue-600 font-semibold transition duration-300">
                SERVICES
              </li>
            </Link>
            <Link to="/contact-us">
              <li className="text-gray-800 hover:text-blue-600 font-semibold transition duration-300">
                CONTACT US
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
