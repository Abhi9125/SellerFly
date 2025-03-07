import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import e_commerceServices from "../Images/Our_Services/e_commerce.png";
import websiteDevelopmentImage from "../Images/Our_Services/website_1.png";
import digitalMarketingImage from "../Images/Our_Services/digital_marketing.png";
import digitalServicesImage from "../Images/Our_Services/digital_services.png";

const services = [
  {
    image: e_commerceServices,
    title: "E-Commerce Seller Account Management",
    description:
      "Comprehensive end-to-end management of e-commerce seller accounts, dedicated to driving consistent sales growth.",
    link: "/E-commerce-management", // Navigate to E-Commerce page
  },
  {
    image: websiteDevelopmentImage,
    title: "Website Design & Development",
    description:
      "Enhance your global e-commerce operations with seamless international seller account management for better sales and business expansion.",
    link: "/WebsiteDevelopmentService", // Navigate to Website Development page
  },
  {
    image: digitalMarketingImage,
    title: "Digital Marketing",
    description:
      "We develop fully customized websites focused on delivering high performance, adaptability, and exceptional user experience.",
    link: "/Digital-Marketing", // Navigate to Digital Marketing page
  },
  {
    image: digitalServicesImage,
    title: "Digital-services",
    description:
      "Our goal is to engage the right audience, enhance brand recognition, establish a strong identity, and boost conversion rates.",
    link: "/digital-services", // Navigate to Digital Services page
  },
];

const OurServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold mb-4 text-blue-950">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Personalized solutions and services to boost your online business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transform transition duration-500 hover:scale-105 hover:shadow-blue-950"
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              <div className="w-full h-full mb-4 flex justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-60 h-64 object-contain items-center"
                />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-black text-sm text-center">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
