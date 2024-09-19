import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import HeroBanner from "./HeroBanner";

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
      // console.error("Error adding document: ", e);
      setFormStatus("Error submitting form, please try again later");
    }
  };

  return (
    <>
      {/* Display the Hero Banner */}
      <HeroBanner />
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-12 px-8 md:px-12 shadow-xl">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="md:w-1/2 flex flex-col justify-center items-start text-left mb-6 md:mb-0">
            <h1 className="text-4xl font-extrabold mb-6">
              Is your online store a success or struggle?
            </h1>
            <p className="mb-6 text-lg">
              Get your free Seller account audit today.
            </p>
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
