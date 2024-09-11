// import React, { useState } from "react";
// import { db } from "../firebaseConfig";
// import { collection, addDoc } from "firebase/firestore";

// const ContactPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [number, setNumber] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const docRef = await addDoc(collection(db, "contactData"), {
//         name: name,
//         email: email,
//         number: number,
//       });
//       alert("Enquiry form submitted");
//       setName("");
//       setEmail("");
//       setNumber("");
//       // alert("Enquiry form submitted", docRef.id);
//       // console.log("submited1");
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   };

//   return (
//     <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-8 md:px-12 rounded-3xl shadow-xl">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//         <div className="md:w-1/2 flex flex-col justify-center items-start text-left mb-6 md:mb-0">
//           <h1 className="text-4xl font-extrabold mb-6">
//             Is your online store a success or struggle?
//           </h1>
//           <p className="mb-6 text-lg">
//             Get your free Seller account audit today.
//           </p>
//         </div>
//         <div className="md:w-1/2 bg-white text-gray-800 rounded-lg p-6">
//           <h2 className="text-2xl font-bold mb-6">Let's Talk</h2>
//           <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
//             <input
//               className="appearance-none block w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               className="appearance-none block w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
//               type="number"
//               placeholder="Phone no"
//               value={number}
//               onChange={(e) => setNumber(e.target.value)}
//             />
//             <input
//               className="appearance-none block w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <button
//               className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;

// import React, { useState } from "react";
// import { db } from "../firebaseConfig";
// import { collection, addDoc } from "firebase/firestore";

// const ContactPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [number, setNumber] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!name || !email || !number) {
//       alert("Please fill out all fields");
//       return;
//     }
//     try {
//       await addDoc(collection(db, "contactData"), {
//         name,
//         email,
//         number,
//       });
//       alert("Enquiry form submitted");
//       setName("");
//       setEmail("");
//       setNumber("");
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   };

//   return (
//     <section className="bg-gradient-to-r from-black to-gray-800 text-white py-12 px-8 md:px-12  shadow-xl">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//         <div className="md:w-1/2 flex flex-col justify-center items-start text-left mb-6 md:mb-0">
//           <h1 className="text-4xl font-extrabold mb-6">
//             Is your online store a success or struggle?
//           </h1>
//           <p className="mb-6 text-lg">
//             Get your free Seller account audit today.
//           </p>
//         </div>
//         <div className="md:w-1/2 bg-white text-gray-800 rounded-lg p-6">
//           <h2 className="text-2xl font-bold mb-6">Let's Talk</h2>
//           <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
//             <input
//               className="appearance-none block w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//             <input
//               className="appearance-none block w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
//               type="number"
//               placeholder="Phone no"
//               value={number}
//               onChange={(e) => setNumber(e.target.value)}
//               required
//             />
//             <input
//               className="appearance-none block w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <button
//               className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;

import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [requirements, setRequirements] = useState(""); // New state for requirements
  const [language, setLanguage] = useState(""); // New state for language
  const [formStatus, setFormStatus] = useState(null); // Added status for form submission

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !email || !number || !language) {
      setFormStatus("Please fill out all required fields");
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
    } catch (e) {
      console.error("Error adding document: ", e);
      setFormStatus("Error submitting form, please try again later");
    }
  };

  return (
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
            <input
              className="appearance-none block w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="appearance-none block w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
              type="number"
              placeholder="Phone no"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <input
              className="appearance-none block w-full bg-gray-100 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

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
                    required
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
                <label>
                  <input
                    type="radio"
                    name="language"
                    value="Kannada"
                    onChange={(e) => setLanguage(e.target.value)}
                  />{" "}
                  Kannada
                </label>
              </div>
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
  );
};

export default ContactPage;
