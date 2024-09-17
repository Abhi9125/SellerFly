// tranprent header

// import React, { useState, useEffect, useRef } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import ModalComponent from "./ModalComponent";
// import logo_Img from "../Images/logo-main.png"; // Replace with your logo path

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
//   const [isModalOpen, setModalOpen] = useState(false);
//   const dropdownTimeout = useRef(null); // Reference for delay

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   // Handle scrolling effect for the header background
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Function to open dropdown
//   const handleMouseEnter = () => {
//     clearTimeout(dropdownTimeout.current);
//     setIsDropdownOpen(true);
//   };

//   // Function to close dropdown with delay
//   const handleMouseLeave = () => {
//     dropdownTimeout.current = setTimeout(() => {
//       setIsDropdownOpen(false);
//     }, 200); // Delay of 200ms before closing the dropdown
//   };

//   const scrollToSectionWithOffset = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     const yOffset = -80; // Adjust this value based on your header height
//     const y =
//       element.getBoundingClientRect().top + window.pageYOffset + yOffset;

//     window.scrollTo({ top: y, behavior: "smooth" });
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-white shadow-lg text-black"
//           : "bg-transparent text-slate-400"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
//         <Link to="/">
//           <img
//             src={logo_Img}
//             alt="Logo"
//             className="h-12 sm:h-10 lg:w-28 lg:h-10 rounded-sm"
//           />
//         </Link>

//         {/* Mobile Menu Toggle Button */}
//         <button
//           onClick={toggleMenu}
//           className={`text-3xl sm:hidden focus:outline-none relative z-50 ${
//             isScrolled ? "text-black" : "text-white"
//           }`}
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? <FiX /> : <FiMenu />}
//         </button>

//         {/* Navigation Links */}
//         <nav
//           className={`fixed top-0 left-0 w-full h-full bg-white sm:bg-transparent sm:static sm:flex justify-center items-center sm:w-auto z-40 transition-all duration-300 ease-in-out ${
//             isOpen ? "translate-x-0" : "-translate-x-full"
//           } sm:translate-x-0`}
//         >
//           <ul className="flex flex-col sm:flex-row sm:space-x-8 lg:space-x-12 space-y-6 sm:space-y-0 mt-20 sm:mt-0 text-lg">
//             <li>
//               <Link
//                 to="/"
//                 onClick={toggleMenu}
//                 className={`${
//                   isScrolled ? "text-black" : "text-white"
//                 } hover:text-red-600 font-bold transition duration-300`}
//               >
//                 HOME
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about-us"
//                 onClick={toggleMenu}
//                 className={`${
//                   isScrolled ? "text-black" : "text-white"
//                 } hover:text-red-600 font-semibold transition duration-300`}
//               >
//                 ABOUT US
//               </Link>
//             </li>

//             {/* Dropdown for Services */}
//             <li
//               className="relative"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <Link
//                 to="/SERVICES"
//                 onClick={toggleMenu}
//                 className={`${
//                   isScrolled ? "text-black" : "text-white"
//                 } hover:text-red-600 font-semibold transition duration-300`}
//               >
//                 SERVICES
//               </Link>

//               {/* Dropdown menu */}
//               {isDropdownOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg p-4">
//                   <ul>
//                     <li className="hover:bg-gray-100 hover:text-red-600 p-2 rounded">
//                       <Link to="/service1">E-commerce Management</Link>
//                     </li>
//                     <li className="hover:bg-gray-100 hover:text-red-600 p-2 rounded">
//                       <Link to="/service2">Website Development</Link>
//                     </li>
//                     <li className="hover:bg-gray-100 hover:text-red-600 p-2 rounded">
//                       <Link to="/service3">Digital Marketing</Link>
//                     </li>
//                     <li className="hover:bg-gray-100 hover:text-red-600 p-2 rounded">
//                       <Link to="/service4">Other Services</Link>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </li>

//             <li>
//               <Link
//                 to="/GROW WITH US"
//                 onClick={toggleMenu}
//                 className={`${
//                   isScrolled ? "text-black" : "text-white"
//                 } hover:text-red-600 font-semibold transition duration-300`}
//               >
//                 GROW WITH US
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/CONTACT-US"
//                 onClick={toggleMenu}
//                 className={`${
//                   isScrolled ? "text-black" : "text-white"
//                 } hover:text-red-600 font-semibold transition duration-300`}
//               >
//                 CONTACT US
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {/* CTA Button - Only show on desktop */}
//         <button
//           onClick={openModal}
//           className="hidden sm:block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-bold transition duration-300"
//         >
//           Book an Appointment
//         </button>
//         {isModalOpen && <ModalComponent closeModal={closeModal} />}
//       </div>
//     </header>
//   );
// };

// export default Header;

// Fix white baground header

import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import ModalComponent from "./ModalComponent";
import logo_Img from "../Images/logo-main.png"; // Replace with your logo path

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const [isModalOpen, setModalOpen] = useState(false);
  const dropdownTimeout = useRef(null); // Reference for delay

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Handle scrolling effect for the header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to open dropdown
  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setIsDropdownOpen(true);
  };

  // Function to close dropdown with delay
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Delay of 200ms before closing the dropdown
  };

  const scrollToSectionWithOffset = (sectionId) => {
    const element = document.getElementById(sectionId);
    const yOffset = -80; // Adjust this value based on your header height
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
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/">
          <img
            src={logo_Img}
            alt="Logo"
            className="h-12 sm:h-10 lg:w-28 lg:h-10 rounded-sm"
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
          className={`fixed top-0 left-0 w-full h-full bg-white sm:ml-4 sm:hover:text-red-600 sm:bg-white sm:static sm:flex justify-center items-center sm:w-auto z-40 transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0`}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-8 lg:space-x-12 space-y-6 sm:space-y-0 mt-20 sm:mt-0 text-lg">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className={`${
                  isScrolled ? "text-black" : "text-black"
                } hover:text-red-600 font-bold transition duration-300`}
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
                } hover:text-red-600 font-bold transition duration-300`}
              >
                ABOUT US
              </Link>
            </li>

            {/* Dropdown for Services */}
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/SERVICES"
                onClick={toggleMenu}
                className={`${
                  isScrolled ? "text-black" : "text-black"
                } hover:text-red-600 font-bold transition duration-300`}
              >
                SERVICES
              </Link>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg p-4 transform scale-95 group-hover:scale-100 transition-transform duration-300 ease-in-out">
                  <ul>
                    <li className="hover:bg-gray-100 hover:text-red-600 p-2 rounded transition duration-300">
                      <Link to="/E-commerce-management">
                        E-commerce Account Management
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100 hover:text-red-600 p-2 rounded transition duration-300">
                      <Link to="/WebsiteDevelopmentService">
                        Website Development
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100 hover:text-red-600 p-2 rounded transition duration-300">
                      <Link to="/Digital-Marketing">Digital Marketing</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/grow-with-us"
                onClick={toggleMenu}
                className={`${
                  isScrolled ? "text-black" : "text-black"
                } hover:text-red-600 font-bold transition duration-300`}
              >
                GROW WITH US
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                onClick={toggleMenu}
                className={`${
                  isScrolled ? "text-black" : "text-black"
                } hover:text-red-600 font-bold transition duration-300`}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button - Only show on desktop */}
        <button
          onClick={openModal}
          className="hidden sm:block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-bold transition duration-300"
        >
          Book an Appointment
        </button>
        {isModalOpen && <ModalComponent closeModal={closeModal} />}
      </div>
    </header>
  );
};

export default Header;

// Tranceprent baground
// import React, { useState, useEffect, useRef } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import ModalComponent from "./ModalComponent";
// import logo_Img from "../Images/logo-main.png"; // Replace with your logo path
// // import logo_Img from "../Images/SELLERFLY NEW LOGO (1).png";
// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownTimeout = useRef(null);
//   const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleMouseEnter = () => {
//     clearTimeout(dropdownTimeout.current);
//     setIsDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     dropdownTimeout.current = setTimeout(() => {
//       setIsDropdownOpen(false);
//     }, 200);
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
//         <Link to="/">
//           <img
//             src={logo_Img}
//             alt="Logo"
//             className="h-12 sm:h-10 lg:w-28 lg:h-10 rounded-sm hover:scale-110 transform transition duration-300 ease-in-out"
//           />
//         </Link>

//         <button
//           onClick={toggleMenu}
//           className={`text-3xl sm:hidden focus:outline-none relative z-50 ${
//             isScrolled ? "text-black" : "text-white"
//           } transition duration-300`}
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? <FiX /> : <FiMenu />}
//         </button>

//         <nav
//           className={`fixed top-0 left-0 w-full h-full bg-white sm:bg-transparent sm:static sm:flex justify-center items-center sm:w-auto z-40 transition-transform duration-500 ease-in-out ${
//             isOpen ? "translate-x-0" : "-translate-x-full"
//           } sm:translate-x-0`}
//         >
//           <ul className="flex flex-col sm:flex-row sm:space-x-8 lg:space-x-12 space-y-6 sm:space-y-0 mt-20 sm:mt-0 text-lg">
//             <li>
//               <Link
//                 to="/"
//                 onClick={toggleMenu}
//                 className={`${
//                   isScrolled ? "text-black" : "text-white"
//                 } hover:text-red-600 font-bold transition duration-300 hover:scale-105 transform`}
//               >
//                 HOME
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about-us"
//                 onClick={toggleMenu}
//                 className={`${
//                   isScrolled ? "text-black" : "text-white"
//                 } hover:text-red-600 font-semibold transition duration-300 hover:scale-105 transform`}
//               >
//                 ABOUT US
//               </Link>
//             </li>

//             <li
//               className="relative group"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <Link
//                 to="/services"
//                 className={`${
//                   isScrolled ? "text-black" : "text-white"
//                 } hover:text-red-600 font-semibold transition duration-300 hover:scale-105 transform`}
//               >
//                 SERVICES
//               </Link>

//               {isDropdownOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg p-4 transform scale-95 group-hover:scale-100 transition-transform duration-300 ease-in-out">
//                   <ul>
//                     <li className="hover:bg-gray-100 hover:text-red-600 p-2 rounded transition duration-300">
//                       <Link to="/E-commerce-management">
//                         E-commerce Management
//                       </Link>
//                     </li>
//                     <li className="hover:bg-gray-100 hover:text-red-600 p-2 rounded transition duration-300">
//                       <Link to="/WebsiteDevelopmentService">
//                         Website Development
//                       </Link>
//                     </li>
//                     <li className="hover:bg-gray-100 hover:text-red-600 p-2 rounded transition duration-300">
//                       <Link to="/Digital-Marketing">Digital Marketing</Link>
//                     </li>
//                     <li className="hover:bg-gray-100 hover:text-red-600 p-2 rounded transition duration-300">
//                       <Link to="/Other-Services">Other Services</Link>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </li>

//             <li>
//               <Link
//                 to="/grow-with-us"
//                 onClick={toggleMenu}
//                 className={`${
//                   isScrolled ? "text-black" : "text-white"
//                 } hover:text-red-600 font-semibold transition duration-300 hover:scale-105 transform`}
//               >
//                 GROW WITH US
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact-us"
//                 onClick={toggleMenu}
//                 className={`${
//                   isScrolled ? "text-black" : "text-white"
//                 } hover:text-red-600 font-semibold transition duration-300 hover:scale-105 transform`}
//               >
//                 CONTACT US
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         <button
//           onClick={openModal}
//           className="hidden sm:block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-bold transition-transform duration-300 hover:scale-105"
//         >
//           Book an Appointment
//         </button>
//         {isModalOpen && <ModalComponent closeModal={closeModal} />}
//       </div>
//     </header>
//   );
// };

// export default Header;

// Transprant white haeader with white backgraiund

// import React, { useState, useEffect, useRef } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import ModalComponent from "./ModalComponent";
// import logo_Img from "../Images/logo-main.png"; // Replace with your logo path

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
//   const [isModalOpen, setModalOpen] = useState(false);
//   const dropdownTimeout = useRef(null); // Reference for delay

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   // Handle scrolling effect for the header background
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Function to open dropdown
//   const handleMouseEnter = () => {
//     clearTimeout(dropdownTimeout.current);
//     setIsDropdownOpen(true);
//   };

//   // Function to close dropdown with delay
//   const handleMouseLeave = () => {
//     dropdownTimeout.current = setTimeout(() => {
//       setIsDropdownOpen(false);
//     }, 200); // Delay of 200ms before closing the dropdown
//   };

//   const scrollToSectionWithOffset = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     const yOffset = -80; // Adjust this value based on your header height
//     const y =
//       element.getBoundingClientRect().top + window.pageYOffset + yOffset;

//     window.scrollTo({ top: y, behavior: "smooth" });
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-lg" : "bg-white"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
//         <Link to="/">
//           <img
//             src={logo_Img}
//             alt="Logo"
//             className="h-12 sm:h-10 lg:w-28 lg:h-10 rounded-sm"
//           />
//         </Link>

//         {/* Mobile Menu Toggle Button */}
//         <button
//           onClick={toggleMenu}
//           className={`text-3xl sm:hidden focus:outline-none relative z-50 ${
//             isScrolled ? "text-black" : "text-black"
//           }`}
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? <FiX /> : <FiMenu />}
//         </button>

//         {/* Navigation Links */}
//         <nav
//           className={`fixed top-0 left-0 w-full h-full bg-white sm:bg-white sm:static sm:flex justify-center items-center sm:w-auto z-40 transition-all duration-300 ease-in-out ${
//             isOpen ? "translate-x-0" : "-translate-x-full"
//           } sm:translate-x-0`}
//         >
//           <ul className="flex flex-col sm:flex-row sm:space-x-8 lg:space-x-12 space-y-6 sm:space-y-0 mt-20 sm:mt-0 text-lg">
//             <li>
//               <Link
//                 to="/"
//                 onClick={toggleMenu}
//                 className={`${
//                   isScrolled ? "text-black" : "text-black"
//                 } hover:text-red-600 font-bold transition duration-300`}
//               >
//                 HOME
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about-us"
//                 onClick={toggleMenu}
//                 className={`${
//                   isScrolled ? "text-black" : "text-black"
//                 } hover:text-red-600 font-semibold transition duration-300`}
//               >
//                 ABOUT US
//               </Link>
//             </li>

//             {/* Dropdown for Services */}
//             <li
//               className="relative"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <Link
//                 to="/SERVICES"
//                 onClick={toggleMenu}
//                 className={`${
//                   isScrolled ? "text-black" : "text-black"
//                 } hover:text-red-600 font-semibold transition duration-300`}
//               >
//                 SERVICES
//               </Link>

//               {/* Dropdown menu */}
//               {isDropdownOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg p-4 transform scale-95 group-hover:scale-100 transition-transform duration-300 ease-in-out">
//                   <ul>
//                     <li className="hover:bg-gray-100 hover:text-red-600 p-2 rounded transition duration-300">
//                       <Link to="/E-commerce-management">
//                         E-commerce Management
//                       </Link>
//                     </li>
//                     <li className="hover:bg-gray-100 hover:text-red-600 p-2 rounded transition duration-300">
//                       <Link to="/WebsiteDevelopmentService">
//                         Website Development
//                       </Link>
//                     </li>
//                     <li className="hover:bg-gray-100 hover:text-red-600 p-2 rounded transition duration-300">
//                       <Link to="/Digital-Marketing">Digital Marketing</Link>
//                     </li>
//                     {/* <li className="hover:bg-gray-100 hover:text-red-600 p-2 rounded transition duration-300">
//                       <Link to="/Other-Services">Other Services</Link>
//                     </li> */}
//                   </ul>
//                 </div>
//               )}
//             </li>

//             <li>
//               <Link
//                 to="/grow-with-us"
//                 onClick={toggleMenu}
//                 className={`${
//                   isScrolled ? "text-black" : "text-black"
//                 } hover:text-red-600 font-semibold transition duration-300`}
//               >
//                 GROW WITH US
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact-us"
//                 onClick={toggleMenu}
//                 className={`${
//                   isScrolled ? "text-black" : "text-black"
//                 } hover:text-red-600 font-semibold transition duration-300`}
//               >
//                 CONTACT US
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {/* CTA Button - Only show on desktop */}
//         <button
//           onClick={openModal}
//           className="hidden sm:block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-bold transition duration-300"
//         >
//           Book an Appointment
//         </button>
//         {isModalOpen && <ModalComponent closeModal={closeModal} />}
//       </div>
//     </header>
//   );
// };

// export default Header;
