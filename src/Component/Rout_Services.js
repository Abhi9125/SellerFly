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
        style={{ backgroundImage: `url(/Rout_Banner/services.png)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Services</h1>
        </div>
      </div>
      <section className="bg-gray-100 py-16">
        <OurServices />
      </section>
    </div>
  );
};

export default Rout_Services;
