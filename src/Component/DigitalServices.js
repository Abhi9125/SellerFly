import React from "react";
import {
  FaTrademark,
  FaUtensils,
  FaFileInvoiceDollar,
  FaBuilding,
  FaIndustry,
  FaRocket,
  FaCertificate,
  FaGlobe,
} from "react-icons/fa";
import Grow_Banner from "../Images/Rout_Banner/services.png";

const services = [
  {
    name: "Trademark Certificate (Brand Certificate)",
    icon: <FaTrademark />,
    description: "Protect your brand with a trademark certificate.",
  },
  {
    name: "FSSAI Certificate",
    icon: <FaUtensils />,
    description: "Obtain FSSAI registration for food-related businesses.",
  },
  {
    name: "GST Registration",
    icon: <FaFileInvoiceDollar />,
    description: "Simplify GST registration and compliance.",
  },
  {
    name: "Incorporation Registration",
    icon: <FaBuilding />,
    description: "Register your company (Private Limited, Limited Company).",
  },
  {
    name: "MSME Certificate",
    icon: <FaIndustry />,
    description: "Get MSME certification for small and medium enterprises.",
  },
  {
    name: "Startup India Registration",
    icon: <FaRocket />,
    description: "Become a recognized startup with Startup India registration.",
  },
  {
    name: "Trade Licence",
    icon: <FaCertificate />,
    description: "Acquire a trade licence for your business operations.",
  },
  {
    name: "Import and Export Code Registration",
    icon: <FaGlobe />,
    description: "Enable international trade with an IEC registration.",
  },
];

const DigitalServices = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Grow_Banner})` }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Digital Services</h1>
        </div>
      </div>

      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Our Digital Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-red-600 text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalServices;
