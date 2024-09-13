import React from "react";
import Intro from "./Intro";

const Aboutus = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(/Rout_Banner/About-us.png)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
      </div>

      {/* About Us Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="logo-main.png"
                alt="Team"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                SellerFly is a team of internationally certified E-Commerce &
                Digital Experts with a vision to grow your e-commerce business
                from 10X to 100X in a short time.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to provide top-notch services to help businesses
                thrive in the competitive digital marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-4">100+</h3>
              <p className="text-lg text-gray-600">Happy Clients</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-4">91%</h3>
              <p className="text-lg text-gray-600">Client Retention</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-4">14+</h3>
              <p className="text-lg text-gray-600">Years of Experience</p>
            </div>
          </div>
        </div>
        <Intro />
      </section>
    </div>
  );
};

export default Aboutus;
