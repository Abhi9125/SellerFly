import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row bg-blue-600 text-white p-8 md:p-12 rounded-3xl shadow-lg">
      <div className="md:w-1/2 flex flex-col justify-center items-start text-left mb-6 md:mb-0">
        <h1 className="text-3xl font-bold mb-4">
          Is your online store a success or struggle?
        </h1>
        <p className="mb-4">Get your free Seller account audit today</p>
        <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-100">
          Enquiry Now!!
        </button>
      </div>
      <div className="md:w-1/2 bg-white text-gray-700 rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Let's Talk</h2>
        <form className="flex flex-col space-y-4">
          <input
            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="number"
            placeholder="Phone no"
          />
          <input
            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="email"
            placeholder="Email"
          />
          <div className="flex justify-between items-center">
            {/* Add logos here */}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
