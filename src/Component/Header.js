import React from "react";
import logo_Img from "../Images/logo-main.png";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-lg py-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo_Img} alt="Logo" className="h-16" />
        <nav>
          <ul className="flex space-x-10">
            <li>
              <a
                href="#home"
                className="text-gray-800 hover:text-blue-600 font-semibold transition duration-300"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-800 hover:text-blue-600 font-semibold transition duration-300"
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-800 hover:text-blue-600 font-semibold transition duration-300"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-800 hover:text-blue-600 font-semibold transition duration-300"
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
