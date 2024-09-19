import React, { useState } from "react";
import { db } from "../firebaseConfig"; // Ensure firebaseConfig is correctly imported
import { collection, addDoc } from "firebase/firestore";

const ModalComponent = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
    language: "",
    service: "",
  });
  const [formStatus, setFormStatus] = useState(null); // Status message for form submission
  const [errors, setErrors] = useState({}); // Track form field errors

  // Validation function to check all inputs
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone number validation
    const phonePattern = /^\d{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.language) {
      newErrors.language = "Please select a preferred language";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);

    // Returns true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validate()) return;

    try {
      await addDoc(collection(db, "ServicesRequirment"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        requirements: formData.requirements,
        language: formData.language,
        service: formData.service,
      });

      setFormStatus("Your form has been submitted successfully!");

      // Reset the form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        requirements: "",
        language: "",
        service: "",
      });

      // Close the modal after submission
      closeModal();
    } catch (error) {
      console.error("Error adding document: ", error);
      setFormStatus("Error submitting form, please try again later");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-0 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={closeModal}
        >
          &times;
        </button>

        <h2 className="text-xl font-bold text-red-600 text-center mb-6">
          GET FREE CONSULTATION!
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-700">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border text-gray-900 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Type your name"
            />
            {errors.name && (
              <p className="text-red-600 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Type your email"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Phone *</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Type your phone number"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold text-gray-700">
              Requirements
            </label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Type your message"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">
              Language *
            </label>
            <div className="flex space-x-4 text-gray-700">
              {["English", "Hindi", "Tamil"].map((lang) => (
                <label key={lang}>
                  <input
                    type="radio"
                    name="language"
                    value={lang}
                    onChange={handleChange}
                    required
                  />{" "}
                  {lang}
                </label>
              ))}
            </div>
            {errors.language && (
              <p className="text-red-600 text-sm">{errors.language}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold text-gray-700">
              Services *
            </label>
            <div className="space-y-2 text-gray-700">
              {[
                "Website Development",
                "Seller Account Management",
                "Social Media Marketing",
              ].map((service) => (
                <label key={service}>
                  <input
                    type="radio"
                    name="service"
                    value={service}
                    onChange={handleChange}
                    required
                  />{" "}
                  {service}
                </label>
              ))}
            </div>
            {errors.service && (
              <p className="text-red-600 text-sm">{errors.service}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-between items-center text-gray-700">
            <label>
              <input type="checkbox" required /> I'm not a robot
            </label>
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Form Status Message */}
        {formStatus && (
          <p className="mt-4 text-sm text-red-600">{formStatus}</p>
        )}
      </div>
    </div>
  );
};

export default ModalComponent;
