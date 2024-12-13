import React from "react";
import Trademark from "../Images/Digital Services/trademark.png";
import Utensils from "../Images/Digital Services/FSSAI-CERFIVATE-ICON.png";
import gst from "../Images/Digital Services/gst.png";
import incorporation from "../Images/Digital Services/incorporation.png";
import MSME from "../Images/Digital Services/MSME.png";
import STARTup from "../Images/Digital Services/START-UP.png";
import TRADELICENCE from "../Images/Digital Services/TRADE-LICENCE.png";
import IMPORTNExport from "../Images/Digital Services/IMPORT-N-EXPORT.png";

import Grow_Banner from "../Images/Rout_Banner/services.png";

const services = [
  {
    name: "Trademark Certificate (Brand Certificate)",
    icon: Trademark,
    description: "Protect your brand with a trademark certificate.",
  },
  {
    name: "FSSAI Certificate",
    icon: Utensils,
    description: "Obtain FSSAI registration for food-related businesses.",
  },
  {
    name: "GST Registration",
    icon: gst,
    description: "Simplify GST registration and compliance.",
  },
  {
    name: "Incorporation Registration",
    icon: incorporation,
    description: "Register your company (Private Limited, Limited Company).",
  },
  {
    name: "MSME Certificate",
    icon: MSME,
    description: "Get MSME certification for small and medium enterprises.",
  },
  {
    name: "Startup India Registration",
    icon: STARTup,
    description: "Become a recognized startup with Startup India registration.",
  },
  {
    name: "Trade Licence",
    icon: TRADELICENCE,
    description: "Acquire a trade licence for your business operations.",
  },
  {
    name: "Import and Export Code Registration",
    icon: IMPORTNExport,
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
                {/* Correctly render image */}
                <img
                  src={service.icon}
                  alt={service.name}
                  className="h-12 w-12 mb-4"
                />
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
