import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServicesMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      >
        Services
      </button>
      {isOpen && (
        <div className="absolute left-0 w-48 bg-white shadow-md mt-2 rounded z-10">
          <ul className="text-left">
            <li>
              <Link
                to="/ecommerce-management"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                ECOMMERCE SELLER ACCOUNT MANAGEMENT
              </Link>
            </li>
            <li>
              <Link
                to="/website-development"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                WEBSITE DESIGN & DEVELOPMENT
              </Link>
            </li>
            <li>
              <Link
                to="/digital-marketing"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                DIGITAL MARKETING
              </Link>
            </li>
            <li>
              <Link
                to="/other-services"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Other Services
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServicesMenu;
