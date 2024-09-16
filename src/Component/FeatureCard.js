// FeatureCard.jsx
import React from "react";

const FeatureCard = ({
  title,
  description,
  image,
  reverse = false,
  delay = 100,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="w-full lg:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
          loading="lazy"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h3 className="text-2xl font-bold text-red-600 mb-4">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
