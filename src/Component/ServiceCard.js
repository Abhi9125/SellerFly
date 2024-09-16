// ServiceCard.jsx
import React from "react";

const ServiceCard = ({ title, description, delay = 100 }) => {
  return (
    <div
      className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <h3 className="text-2xl font-bold mb-4 text-center text-red-600">
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
