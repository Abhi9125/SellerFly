import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      {/* Error Icon */}
      <div className="text-red-600 mb-4">
        <FaExclamationTriangle className="text-6xl" />
      </div>

      {/* Error Title */}
      <h1 className="text-4xl font-bold mb-2">Oops! Something went wrong...</h1>

      {/* Error Description */}
      <p className="text-lg text-gray-600 mb-6">
        We encountered an unexpected issue. Please try again later or contact
        support.
      </p>

      {/* Button to go back or retry */}
      <div className="space-x-4">
        <Link
          to="/"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
        >
          Go to Homepage
        </Link>

        <button
          onClick={() => window.location.reload()}
          className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default Error;
