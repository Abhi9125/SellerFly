// import React, { useState } from "react";

// const ModalComponent = ({ closeModal }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     requirements: "",
//     language: "",
//     service: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic
//     console.log(formData);
//     closeModal(); // Close the modal after submission
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
//         {/* Close Button */}
//         <button
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
//           onClick={closeModal}
//         >
//           &times;
//         </button>

//         <h2 className="text-xl font-bold text-blue-600 text-center mb-6">
//           GET FREE CONSULTATION!!
//         </h2>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block font-semibold">Name *</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Type your name"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold">Email *</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Type your email"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold">Phone *</label>
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Type your phone no"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold">Requirements</label>
//             <textarea
//               name="requirements"
//               value={formData.requirements}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Type your message"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold">Language *</label>
//             <div className="flex space-x-4">
//               <label>
//                 <input
//                   type="radio"
//                   name="language"
//                   value="English"
//                   onChange={handleChange}
//                   required
//                 />{" "}
//                 English
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="language"
//                   value="Hindi"
//                   onChange={handleChange}
//                 />{" "}
//                 Hindi
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="language"
//                   value="Tamil"
//                   onChange={handleChange}
//                 />{" "}
//                 Tamil
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="language"
//                   value="Kannada"
//                   onChange={handleChange}
//                 />{" "}
//                 Kannada
//               </label>
//             </div>
//           </div>

//           <div>
//             <label className="block font-semibold">Services *</label>
//             <div className="space-y-2">
//               <label>
//                 <input
//                   type="radio"
//                   name="service"
//                   value="Website Development"
//                   onChange={handleChange}
//                   required
//                 />{" "}
//                 Website Development
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="service"
//                   value="Seller Account Management"
//                   onChange={handleChange}
//                 />{" "}
//                 Seller Account Management
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="service"
//                   value="Social Media Marketing"
//                   onChange={handleChange}
//                 />{" "}
//                 Social Media Marketing
//               </label>
//             </div>
//           </div>

//           {/* Google reCAPTCHA Placeholder */}
//           <div className="flex justify-between items-center">
//             <label>
//               <input type="checkbox" required /> I'm not a robot
//             </label>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ModalComponent;

import React, { useState } from "react";

const ModalComponent = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
    language: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
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
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Type your name"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Type your email"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Phone *</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Type your phone no"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">
              Requirements
            </label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Type your message"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">
              Language *
            </label>
            <div className="flex space-x-4">
              {["English", "Hindi", "Tamil", "Kannada"].map((lang) => (
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
          </div>

          <div>
            <label className="block font-semibold text-gray-700">
              Services *
            </label>
            <div className="space-y-2">
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
          </div>

          {/* Submit Button */}
          <div className="flex justify-between items-center">
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
      </div>
    </div>
  );
};

export default ModalComponent;
