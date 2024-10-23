// import React, { useState } from "react";
// import { db } from "../firebaseConfig";
// import { collection, addDoc } from "firebase/firestore";
// import HeroBanner from "./HeroBanner";

// const ContactPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [number, setNumber] = useState("");
//   const [requirements, setRequirements] = useState(""); // New state for requirements
//   const [language, setLanguage] = useState(""); // New state for language
//   const [formStatus, setFormStatus] = useState(null); // Added status for form submission
//   const [errors, setErrors] = useState({}); // State for input errors

//   const validate = () => {
//     const newErrors = {};

//     // Name validation
//     if (!name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     // Email validation using regex
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!emailPattern.test(email)) {
//       newErrors.email = "Please enter a valid email address";
//     }

//     // Phone number validation
//     if (!number.trim()) {
//       newErrors.number = "Phone number is required";
//     } else if (!/^\d{10}$/.test(number)) {
//       newErrors.number = "Phone number must be 10 digits";
//     }

//     // Language validation
//     if (!language) {
//       newErrors.language = "Please select a preferred language";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!validate()) {
//       return;
//     }

//     try {
//       await addDoc(collection(db, "contactData"), {
//         name,
//         email,
//         number,
//         requirements, // Include new fields in the submission
//         language,
//       });
//       setFormStatus("Enquiry form submitted successfully");
//       setName("");
//       setEmail("");
//       setNumber("");
//       setRequirements(""); // Reset requirements
//       setLanguage(""); // Reset language
//       setErrors({});
//     } catch (e) {
//       // console.error("Error adding document: ", e);
//       setFormStatus("Error submitting form, please try again later");
//     }
//   };

//   return (
//     <>
//       {/* Display the Hero Banner */}
//       <HeroBanner />
//       <section className="bg-gradient-to-r from-black to-gray-800 text-white py-12 px-8 md:px-12 shadow-xl">
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
//           <div className="md:w-1/2 flex flex-col justify-center items-start text-left mb-6 md:mb-0">
//             <h1 className="text-4xl font-extrabold mb-6">
//               Is your online store a success or struggle?
//             </h1>
//             <p className="mb-6 text-lg">
//               Get your free Seller account audit today.
//             </p>
//           </div>
//           <div className="md:w-1/2 bg-white text-gray-800 rounded-lg p-6 shadow-lg">
//             <h2 className="text-2xl font-bold mb-6">Let's Talk</h2>
//             <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
//               <div>
//                 <input
//                   className="appearance-none block w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
//                   type="text"
//                   placeholder="Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 {errors.name && (
//                   <p className="text-red-600 text-sm">{errors.name}</p>
//                 )}
//               </div>

//               <div>
//                 <input
//                   className="appearance-none block w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
//                   type="number"
//                   placeholder="Phone no"
//                   value={number}
//                   onChange={(e) => setNumber(e.target.value)}
//                 />
//                 {errors.number && (
//                   <p className="text-red-600 text-sm">{errors.number}</p>
//                 )}
//               </div>

//               <div>
//                 <input
//                   className="appearance-none block w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 {errors.email && (
//                   <p className="text-red-600 text-sm">{errors.email}</p>
//                 )}
//               </div>

//               {/* Requirements field */}
//               <textarea
//                 className="appearance-none block w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
//                 placeholder="Requirements"
//                 value={requirements}
//                 onChange={(e) => setRequirements(e.target.value)}
//               />

//               {/* Preferred Language */}
//               <div className="space-y-2">
//                 <p className="text-gray-700 font-semibold">
//                   Preferred Language *
//                 </p>
//                 <div className="flex space-x-4">
//                   <label>
//                     <input
//                       type="radio"
//                       name="language"
//                       value="English"
//                       onChange={(e) => setLanguage(e.target.value)}
//                     />{" "}
//                     English
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       name="language"
//                       value="Hindi"
//                       onChange={(e) => setLanguage(e.target.value)}
//                     />{" "}
//                     Hindi
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       name="language"
//                       value="Tamil"
//                       onChange={(e) => setLanguage(e.target.value)}
//                     />{" "}
//                     Tamil
//                   </label>
//                 </div>
//                 {errors.language && (
//                   <p className="text-red-600 text-sm">{errors.language}</p>
//                 )}
//               </div>

//               <button
//                 className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
//                 type="submit"
//               >
//                 Submit
//               </button>
//             </form>

//             {/* Show form status after submission */}
//             {formStatus && (
//               <p className="mt-4 text-sm text-red-600">{formStatus}</p>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ContactPage;

import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import HeroBanner from "./HeroBanner";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [requirements, setRequirements] = useState(""); // New state for requirements
  const [language, setLanguage] = useState(""); // New state for language
  const [formStatus, setFormStatus] = useState(null); // Added status for form submission
  const [errors, setErrors] = useState({}); // State for input errors

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone number validation
    if (!number.trim()) {
      newErrors.number = "Phone number is required";
    } else if (!/^\d{10}$/.test(number)) {
      newErrors.number = "Phone number must be 10 digits";
    }

    // Language validation
    if (!language) {
      newErrors.language = "Please select a preferred language";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    try {
      await addDoc(collection(db, "contactData"), {
        name,
        email,
        number,
        requirements, // Include new fields in the submission
        language,
      });
      setFormStatus("Enquiry form submitted successfully");
      setName("");
      setEmail("");
      setNumber("");
      setRequirements(""); // Reset requirements
      setLanguage(""); // Reset language
      setErrors({});
    } catch (e) {
      setFormStatus("Error submitting form, please try again later");
    }
  };

  return (
    <>
      {/* Display the Hero Banner */}
      <HeroBanner />
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-12 px-8 md:px-12 shadow-xl">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Contact Info */}
          <div className="md:w-1/2 flex flex-col justify-center items-start text-left mb-6 md:mb-0 space-y-4">
            <h2 className="text-3xl font-bold text-white mb-4">
              Launch & Grow Your Ecommerce Business 10X Faster
            </h2>
            <p className="mb-6 text-lg text-white">
              Let's discuss potential opportunities for your Business! Apply
              Now!
            </p>

            <div className="text-left text-lg space-y-2">
              <h3 className="font-semibold text-red-600">Expertise Support:</h3>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-2 text-red-500" />
                <p className="text-white">Phone: +91-6381780309</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-red-500" />
                <p className="text-white">Email: sellerflyonline@gmail.com</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-4 space-x-4 flex">
              <a
                href="https://www.facebook.com/profile.php?id=61562528217228"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/_sellerfly_/"
                target="_blank"
                className="text-white text-lg hover:text-red-600 transition duration-300"
              >
                <FaInstagram />
              </a>
              {/* <a
                href="#"
                className="text-white text-lg hover:text-red-600 transition duration-300"
              >
                <FaLinkedin />
              </a> */}
            </div>
          </div>

          <div className="md:w-1/2 bg-white text-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Let's Talk</h2>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  className="appearance-none block w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  className="appearance-none block w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
                  type="number"
                  placeholder="Phone no"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                {errors.number && (
                  <p className="text-red-600 text-sm">{errors.number}</p>
                )}
              </div>

              <div>
                <input
                  className="appearance-none block w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Requirements field */}
              <textarea
                className="appearance-none block w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
                placeholder="Requirements"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
              />

              {/* Preferred Language */}
              <div className="space-y-2">
                <p className="text-gray-700 font-semibold">
                  Preferred Language *
                </p>
                <div className="flex space-x-4">
                  <label>
                    <input
                      type="radio"
                      name="language"
                      value="English"
                      onChange={(e) => setLanguage(e.target.value)}
                    />{" "}
                    English
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="language"
                      value="Hindi"
                      onChange={(e) => setLanguage(e.target.value)}
                    />{" "}
                    Hindi
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="language"
                      value="Tamil"
                      onChange={(e) => setLanguage(e.target.value)}
                    />{" "}
                    Tamil
                  </label>
                </div>
                {errors.language && (
                  <p className="text-red-600 text-sm">{errors.language}</p>
                )}
              </div>

              <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                type="submit"
              >
                Submit
              </button>
            </form>

            {/* Show form status after submission */}
            {formStatus && (
              <p className="mt-4 text-sm text-red-600">{formStatus}</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
