import React from "react";

const services = [
  {
    name: "Incorporation",
    description: "Company formation and registration services.",
  },
  {
    name: "Trademark",
    description: "Protect your brand with trademark registration.",
  },
  {
    name: "Accounting",
    description: "Manage your finances with professional accounting services.",
  },
  {
    name: "Income Tax",
    description: "Comprehensive tax filing and planning services.",
  },
  {
    name: "GST Services",
    description: "Get help with GST registration and compliance.",
  },
  {
    name: "Payroll",
    description: "Reliable payroll services for your business.",
  },
];

const DigitalServices = () => {
  return (
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
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {service.name}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalServices;
