// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import logo_Img from "../Images/logo-main.png"; // Replace with your logo path
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

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

//   return (
//     <header
//       className={`sticky top-0 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
//         {/* Logo */}
//         <Link to="/">
//           <img src={logo_Img} alt="Logo" className="h-12 sm:h-16 lg:h-20" />
//         </Link>

//         {/* Mobile Menu Toggle Button */}
//         <button
//           onClick={toggleMenu}
//           className="text-3xl text-black sm:hidden focus:outline-none relative z-50"
//         >
//           {isOpen ? <FiX /> : <FiMenu />}
//         </button>

//         {/* Navigation Links */}
//         <nav
//           className={`${
//             isOpen ? "block" : "hidden"
//           } w-full sm:flex sm:items-center sm:w-auto absolute top-full left-0 sm:static sm:top-auto sm:left-auto bg-white sm:bg-transparent shadow-lg sm:shadow-none z-40`}
//         >
//           <ul className="flex flex-col sm:flex-row sm:space-x-8 lg:space-x-12 space-y-4 sm:space-y-0 mt-4 sm:mt-0 text-lg">
//             <li>
//               <Link
//                 to="/"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-red-600 font-bold transition duration-300"
//               >
//                 SERVICES
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about-us"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-red-600 font-semibold transition duration-300"
//               >
//                 SOLUTIONS
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/services"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-red-600 font-semibold transition duration-300"
//               >
//                 CLIENTS
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/career"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-red-600 font-semibold transition duration-300"
//               >
//                 RESOURCES
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact-us"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-red-600 font-semibold transition duration-300"
//               >
//                 COMPANY
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {/* CTA Button - Only show on desktop */}
//         <Link
//           to="/book-appointment"
//           className="hidden sm:block bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-bold transition duration-300"
//         >
//           Book an Appointment
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import logo_Img from "../Images/logo-main.png"; // Replace with your logo path
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

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

//   return (
//     <header
//       className={`sticky top-0 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
//         {/* Logo */}
//         <Link to="/">
//           <img src={logo_Img} alt="Logo" className="h-12 sm:h-16 lg:h-16" />
//         </Link>

//         {/* Mobile Menu Toggle Button */}
//         <button
//           onClick={toggleMenu}
//           className="text-3xl text-black sm:hidden focus:outline-none relative z-50"
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? <FiX /> : <FiMenu />}
//         </button>

//         {/* Navigation Links */}
//         <nav
//           className={`${
//             isOpen ? "block" : "hidden"
//           } w-full sm:flex sm:items-center sm:w-auto absolute top-full left-0 sm:static sm:top-auto sm:left-auto bg-white sm:bg-transparent shadow-lg sm:shadow-none z-40`}
//         >
//           <ul className="flex flex-col sm:flex-row sm:space-x-8 lg:space-x-12 space-y-4 sm:space-y-0 mt-4 sm:mt-0 text-lg">
//             <li>
//               <Link
//                 to="/"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-red-600 font-bold transition duration-300"
//               >
//                 SERVICES
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about-us"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-red-600 font-semibold transition duration-300"
//               >
//                 SOLUTIONS
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/clients"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-red-600 font-semibold transition duration-300"
//               >
//                 CLIENTS
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/resources"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-red-600 font-semibold transition duration-300"
//               >
//                 RESOURCES
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/company"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-red-600 font-semibold transition duration-300"
//               >
//                 COMPANY
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {/* CTA Button - Only show on desktop */}
//         <Link
//           to="/book-appointment"
//           className="hidden sm:block bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-bold transition duration-300"
//         >
//           Book an Appointment
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import logo_Img from "../Images/logo-main.png"; // Replace with your logo path
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

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

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
//         {/* Logo */}
//         <Link to="/">
//           <img src={logo_Img} alt="Logo" className="h-12 sm:h-16 lg:h-16" />
//         </Link>

//         {/* Mobile Menu Toggle Button */}
//         <button
//           onClick={toggleMenu}
//           className="text-3xl text-black sm:hidden focus:outline-none relative z-50"
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? <FiX /> : <FiMenu />}
//         </button>

//         {/* Navigation Links */}
//         <nav
//           className={`${
//             isOpen ? "block" : "hidden"
//           } w-full sm:flex sm:items-center sm:w-auto absolute top-full left-0 sm:static sm:top-auto sm:left-auto bg-white sm:bg-transparent shadow-lg sm:shadow-none z-40`}
//         >
//           <ul className="flex flex-col sm:flex-row sm:space-x-8 lg:space-x-12 space-y-4 sm:space-y-0 mt-4 sm:mt-0 text-lg">
//             <li>
//               <Link
//                 to="/"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-red-600 font-bold transition duration-300"
//               >
//                 SERVICES
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about-us"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-red-600 font-semibold transition duration-300"
//               >
//                 SOLUTIONS
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/clients"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-red-600 font-semibold transition duration-300"
//               >
//                 CLIENTS
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/resources"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-red-600 font-semibold transition duration-300"
//               >
//                 RESOURCES
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/company"
//                 onClick={toggleMenu}
//                 className="text-black hover:text-red-600 font-semibold transition duration-300"
//               >
//                 COMPANY
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {/* CTA Button - Only show on desktop */}
//         <Link
//           to="/book-appointment"
//           className="hidden sm:block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-bold transition duration-300"
//         >
//           Book an Appointment
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

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

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-white shadow-lg text-black"
//           : "bg-transparent text-white"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
//         {/* Company Name */}
//         <Link to="/">
//           <h1
//             className={`text-3xl font-bold tracking-wide ${
//               isScrolled ? "text-black" : "text-white"
//             }`}
//           >
//             SellerFly
//           </h1>
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
//           className={`${
//             isOpen ? "block" : "hidden"
//           } w-full sm:flex sm:items-center sm:w-auto absolute top-full left-0 sm:static sm:top-auto sm:left-auto bg-white sm:bg-transparent shadow-lg sm:shadow-none z-40`}
//         >
//           <ul className="flex flex-col sm:flex-row sm:space-x-8 lg:space-x-12 space-y-4 sm:space-y-0 mt-4 sm:mt-0 text-lg">
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
//             <li>
//               <Link
//                 to="/clients"
//                 onClick={toggleMenu}
//                 className={`${
//                   isScrolled ? "text-black" : "text-white"
//                 } hover:text-red-600 font-semibold transition duration-300`}
//               >
//                 SERVICES
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/resources"
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
//                 to="/company"
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
//         <Link
//           to="/book-appointment"
//           className="hidden sm:block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-bold transition duration-300"
//         >
//           Book an Appointment
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const scrollToSectionWithOffset = (sectionId) => {
    const element = document.getElementById(sectionId);
    const yOffset = -80; // Adjust this value based on your header height
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        {/* Company Name */}
        <Link to="/">
          <h1
            className={`text-3xl font-bold tracking-wide ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            SellerFly
          </h1>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`text-3xl sm:hidden focus:outline-none relative z-50 ${
            isScrolled ? "text-black" : "text-white"
          }`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`fixed top-0 left-0 w-full h-full bg-white sm:bg-transparent sm:static sm:flex justify-center items-center sm:w-auto z-40 transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0`}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-8 lg:space-x-12 space-y-6 sm:space-y-0 mt-20 sm:mt-0 text-lg">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className={`${
                  isScrolled ? "text-black" : "text-white"
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
                  isScrolled ? "text-black" : "text-white"
                } hover:text-red-600 font-semibold transition duration-300`}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/SERVICES"
                onClick={toggleMenu}
                className={`${
                  isScrolled ? "text-black" : "text-white"
                } hover:text-red-600 font-semibold transition duration-300`}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="/GROW WITH US"
                onClick={toggleMenu}
                className={`${
                  isScrolled ? "text-black" : "text-white"
                } hover:text-red-600 font-semibold transition duration-300`}
              >
                GROW WITH US
              </Link>
            </li>
            <li>
              <Link
                to="/CONTACT-US"
                onClick={toggleMenu}
                className={`${
                  isScrolled ? "text-black" : "text-white"
                } hover:text-red-600 font-semibold transition duration-300`}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button - Only show on desktop */}
        <Link
          to="/book-appointment"
          className="hidden sm:block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-bold transition duration-300"
        >
          Book an Appointment
        </Link>
      </div>
    </header>
  );
};

export default Header;
