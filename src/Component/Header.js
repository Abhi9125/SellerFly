import React from "react";
import logo_Img from "../Images/logo-main.png";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo_Img} alt="Logo" className="h-12" />
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#home"
                className="text-gray-700 hover:text-gray-900 font-semibold"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 font-semibold"
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-700 hover:text-gray-900 font-semibold"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 font-semibold"
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
