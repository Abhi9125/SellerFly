import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS animation styles
import Aboutus from "../Images/Rout_Banner/About-us.png";
import ModalComponent from "./ModalComponent";
const AboutUs = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Aboutus})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1
            className="text-white text-5xl font-bold tracking-wide"
            data-aos="fade-up"
          >
            Welcome to SellerFly
          </h1>
        </div>
      </div>

      {/* Main Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-red-600 mb-6"
            data-aos="fade-up"
          >
            Innovate. Build. Grow.
          </h2>
          <p
            className="text-lg text-gray-700 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At SellerFly, we empower SMEs and brands to expand their online
            presence through comprehensive e-commerce services and tailored
            solutions.
          </p>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-white p-6 rounded-lg shadow-lg"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700">
                To enable brands and SMEs to achieve significant growth and
                success in the digital marketplace.
              </p>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-lg"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700">
                To deliver state-of-the-art e-commerce technologies and
                solutions that simplify and accelerate the online growth of
                businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-red-600 mb-12"
            data-aos="fade-up"
          >
            Why Choose SellerFly
          </h2>
          <p
            className="text-lg text-gray-700 leading-relaxed mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            When you partner with SellerFly, you gain a dedicated business ally,
            not just a service provider. Our team is passionate and committed to
            adding value to your business through years of experience.
          </p>
          <p
            className="text-lg text-gray-700 leading-relaxed mb-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            We pride ourselves on executing projects swiftly and efficiently,
            transforming your ideas into market-ready solutions with speed and
            precision.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-red-600 text-center mb-12"
            data-aos="fade-up"
          >
            About Us
          </h2>
          <p
            className="text-lg text-gray-700 leading-relaxed mb-12 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            SellerFly is an innovative e-commerce technology company focused on
            helping SMEs and brands establish and grow their online businesses.
            Founded in 2020, our leadership team comprises former employees from
            industry giants.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2" data-aos="fade-right">
              <img
                src="logo-main.png"
                alt="SellerFly Team"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2" data-aos="fade-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                With offices located in Coimbatore, Chennai, and Tiruppur, we
                operate on the pillars of innovation, excellence,
                entrepreneurship, and creativity to drive your business forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-16 bg-red-600 text-center text-white"
        data-aos="fade-up"
      >
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Scale Your E-Commerce Business?
          </h2>
          <p className="text-lg mb-6">
            Join forces with SellerFly and unlock the full potential of major
            e-commerce platforms.
          </p>
          <button
            className="bg-white text-red-600 font-bold py-2 px-8 rounded-lg hover:bg-gray-100 hover:text-red-700 transition duration-300"
            onClick={openModal} // Update with actual contact section ID or link
          >
            Contact Us Today
          </button>
          {isModalOpen && <ModalComponent closeModal={closeModal} />}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
