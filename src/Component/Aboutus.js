import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS animation styles
import Aboutus from "../Images/Rout_Banner/About-us.png";
import ModalComponent from "./ModalComponent";
import AboutSection_logo from "../Images/Logo.jpg";
import certificates from "../Images/Certificates.jpg";
import introImage from "../Images/IntroImage.jpg";

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
            className="text-3xl font-bold text-[#ab5836] mb-6"
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
            solutions. SellerFly is an innovative e-commerce technology company
            focused on helping SMEs and brands establish and grow their online
            businesses. Founded in 2020, our leadership team comprises former
            employees from industry giants.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-2 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-[#ab5836] mb-12"
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

      {/* Vision and Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-white p-6 rounded-lg shadow-lg"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-bold text-[#ab5836] mb-4">
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
              <h3 className="text-2xl font-bold text-[#ab5836] mb-4">
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

      {/* Certification Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Certificates Section */}
          <h2
            className="text-3xl font-bold text-[#ab5836] text-center mb-4"
            data-aos="fade-up"
          >
            Our Certificates
          </h2>
          <p
            className="text-lg text-gray-700 text-center mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At SellerFly, we take pride in our commitment to quality,
            compliance, and excellence in the e-commerce industry. We are a
            government-registered entity, ensuring reliability and
            trustworthiness in all our business operations. We are officially
            certified under the Limited Liability Partnership Act, 2008,
            reinforcing our credibility as a legally recognized and compliant
            business.
          </p>
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src={certificates}
              alt="Certificates"
              className="w-full max-w-md rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Spacing between the two parts */}
          <div className="mt-10"></div>

          {/* Additional Image & Paragraph Section */}
          <h3
            className="text-2xl font-bold text-[#ab5836] text-center mb-4"
            data-aos="fade-up"
          >
            Meet Our Founder
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-12">
            {/* Image Section */}
            <div className="flex-shrink-0" data-aos="zoom-in">
              <img
                src={introImage}
                alt="Intro"
                className="w-56 h-56 lg:w-80 lg:h-80 rounded-lg object-cover shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>

            {/* Text Section */}
            <div
              className="text-lg text-gray-800 max-w-3xl text-center lg:text-left"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold text-black mb-2">
                Mr. Senthilkumar
              </h3>
              <p className="text-md font-semibold text-[#ab5836] mb-4">
                Founder &amp; CEO
              </p>
              <p className="mb-4 leading-relaxed text-gray-700">
                We are a team of internationally certified E-Commerce &amp;
                Digital Experts with a vision to grow your e-commerce business
                from 10X to 100X in a short time. Our mission is to provide
                top-notch services to help businesses thrive in the competitive
                digital marketplace.
              </p>
            </div>
          </div>

          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src={AboutSection_logo}
              alt="SellerFly Team"
              className="w-full max-w-md rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-16 my-4 bg-[#ab5836] text-center text-white"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Scale Your E-Commerce Business?
          </h2>
          <p className="text-lg mb-6">
            Join forces with SellerFly and unlock the full potential of major
            e-commerce platforms.
          </p>
          <button
            className="bg-white text-[#ab5836] font-bold py-2 px-8 rounded-lg hover:bg-gray-100 hover:text-[#ab5836] transition duration-300"
            onClick={openModal}
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
