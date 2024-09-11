import React from "react";
import {
  FaBullhorn,
  FaCog,
  FaCamera,
  FaDesktop,
  FaShoppingCart,
  FaTag,
  FaLightbulb,
} from "react-icons/fa";
import bgImage from "../Images/new_img.png"; // Replace with your actual image
import OurServices from "./OurServies";
const Rout_Services = () => {
  const services = [
    {
      icon: <FaShoppingCart className="text-5xl text-red-600" />,
      title: "E-Commerce Seller Account Management",
      description:
        "Comprehensive end-to-end management of e-commerce seller accounts, dedicated to driving consistent sales growth.",
    },
    {
      icon: <FaCog className="text-5xl text-red-600" />,
      title: "Shopify Development and Maintenance",
      description:
        "Create and maintain your online store with expert Shopify development services, ensuring a smooth, secure, and customized experience.",
    },
    {
      icon: <FaBullhorn className="text-5xl text-red-600" />,
      title: "Digital Marketing",
      description:
        "Our goal is to engage the right audience, enhance brand recognition, establish a strong identity, and boost conversion rates.",
    },
    {
      icon: <FaDesktop className="text-5xl text-red-600" />,
      title: "Website Design & Development",
      description:
        "We develop fully customized websites focused on delivering high performance, adaptability, and exceptional user experience.",
    },
    {
      icon: <FaCamera className="text-5xl text-red-600" />,
      title: "Product Photoshoot",
      description:
        "We offer professional photography services tailored to your products, including model photoshoots to support your business growth.",
    },
    {
      icon: <FaTag className="text-5xl text-red-600" />,
      title: "Branding",
      description:
        "Our branding services help businesses develop a distinctive identity, effectively conveying their core values through strategic marketing.",
    },
    {
      icon: <FaLightbulb className="text-5xl text-red-600" />,
      title: "Lead Generation",
      description:
        "We craft targeted strategies to elevate your brand’s visibility and identity through strategic digital marketing and social media efforts.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
      </div>
      <section className="bg-gray-100 py-16">
        {/* <div className="container mx-auto px-4"> */}
        {/* Section Title */}
        {/* <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Personalized solutions and services to boost your online business.
            </p>
          </div> */}

        {/* Services Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div> */}
        <OurServices />
      </section>
    </div>
  );
};

export default Rout_Services;
