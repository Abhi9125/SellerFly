import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import ModalComponent from "./ModalComponent";
import logo_Img from "../Images/Logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Desktop dropdown state
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // Mobile dropdown state

  const dropdownTimeout = useRef(null); // Reference for delay

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Handle scrolling effect for the header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Desktop dropdown handlers
  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Delay before closing the dropdown
  };

  // Toggle mobile dropdown
  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  // Optional: Smooth scroll function (if needed elsewhere)
  const scrollToSectionWithOffset = (sectionId) => {
    const element = document.getElementById(sectionId);
    const yOffset = -80;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header
      className={`transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 left-0 w-full z-50 bg-white shadow-lg"
          : "relative bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-6">
        <Link to="/">
          <img
            src={logo_Img}
            alt="Logo"
            className="h-20 w-44 sm:h-20 lg:w-44 lg:h-20 lg:py-2 rounded-sm"
          />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`text-3xl sm:hidden focus:outline-none relative z-50 ${
            isScrolled ? "text-black" : "text-black"
          }`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`fixed top-0 left-0 w-full h-full bg-white sm:ml-4 sm:bg-white sm:static sm:flex justify-center items-center sm:w-auto z-40 transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0`}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-8 lg:space-x-7 space-y-6 sm:space-y-0 mt-10 sm:mt-0 text-lg px-6">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className={`${
                  isScrolled ? "text-black" : "text-black"
                } hover:text-[#ab5836] font-medium transition duration-300`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                onClick={toggleMenu}
                className={`${
                  isScrolled ? "text-black" : "text-black"
                } hover:text-[#ab5836] font-medium transition duration-300`}
              >
                ABOUT US
              </Link>
            </li>
            <li
              className="relative sm:group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={toggleMobileDropdown}
                className={`${
                  isScrolled ? "text-black" : "text-black"
                } hover:text-[#ab5836] font-medium transition duration-300 sm:inline`}
              >
                SERVICES
              </button>

              {/* Desktop Dropdown */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg p-4 transform scale-95 sm:group-hover:scale-100 transition-transform duration-300 ease-in-out hidden sm:block">
                  <ul>
                    <li className="hover:bg-gray-100 hover:text-[#ab5836] p-2 rounded transition duration-300">
                      <Link to="/E-commerce-management">
                        E-commerce Account Management
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100 hover:text-[#ab5836] p-2 rounded transition duration-300">
                      <Link to="/WebsiteDevelopmentService">
                        Website Development
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100 hover:text-[#ab5836] p-2 rounded transition duration-300">
                      <Link to="/Digital-Marketing">Digital Marketing</Link>
                    </li>
                    <li className="hover:bg-gray-100 hover:text-[#ab5836] p-2 rounded transition duration-300">
                      <Link to="/Digital-services">Digital Services</Link>
                    </li>
                  </ul>
                </div>
              )}

              {/* Mobile Dropdown */}
              {isMobileDropdownOpen && (
                <div className="bg-white text-black mt-4 rounded-lg p-4 shadow-lg block sm:hidden">
                  <ul>
                    <li className="hover:bg-gray-100 hover:text-[#ab5836] p-2 rounded transition duration-300">
                      <Link to="/E-commerce-management" onClick={toggleMenu}>
                        E-commerce Account Management
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100 hover:text-[#ab5836] p-2 rounded transition duration-300">
                      <Link
                        to="/WebsiteDevelopmentService"
                        onClick={toggleMenu}
                      >
                        Website Development
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100 hover:text-[#ab5836] p-2 rounded transition duration-300">
                      <Link to="/Digital-Marketing" onClick={toggleMenu}>
                        Digital Marketing
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100 hover:text-[#ab5836] p-2 rounded transition duration-300">
                      <Link to="/Digital-services" onClick={toggleMenu}>
                        Digital Services
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link
                to="/blog"
                onClick={toggleMenu}
                className={`${
                  isScrolled ? "text-black" : "text-black"
                } hover:text-[#ab5836] font-medium transition duration-300`}
              >
                BLOGS
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                onClick={toggleMenu}
                className={`${
                  isScrolled ? "text-black" : "text-black"
                } hover:text-[#ab5836] font-medium transition duration-300`}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button - Desktop Only */}
        <button
          onClick={openModal}
          className="hidden sm:block bg-[#ab5836] hover:bg-blue-950 text-white py-2 px-6 rounded-lg font-medium transition duration-300"
        >
          GET FREE CONSULTATION!!
        </button>
        {isModalOpen && <ModalComponent closeModal={closeModal} />}
      </div>
    </header>
  );
};

export default Header;
