import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ModalComponent from "./ModalComponent";
import aboutBg from "../Images/Rout_Banner/About-us.png";
import AboutSection_logo from "../Images/Logo.jpg";
import certificates from "../Images/Certificates.jpg";
import introImage from "../Images/IntroImage.jpg";
import AchievementComponent from "./AchivementComponent";
import { Link } from "react-router-dom";

const Aboutus = () => {
  const [currentText, setCurrentText] = useState("Create");
  const [isModalOpen, setModalOpen] = useState(false);

  const textArray = ["Create", "Develop", "Build"];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((prev) => {
        const currentIndex = textArray.indexOf(prev);
        const nextIndex = (currentIndex + 1) % textArray.length;
        return textArray[nextIndex];
      });
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div
        className="relative h-40 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Hero content */}
        <div className="relative z-10 text-center text-white">
          <p className="text-sm uppercase tracking-wider mb-2">
            <Link to="/" className="hover:underline">
              HOME
            </Link>
            <span className="mx-2">{">"}</span>
            PAGES
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold">About Us</h1>
        </div>
      </div>

      {/* Who We Are */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            We are SellerFly, We{" "}
            <span className="bg-[#ab5836] text-white px-2 py-1 rounded-md">
              {currentText}
            </span>{" "}
            Grow Your Business Online
          </h1>
          <p className="text-lg text-gray-700 max-w-7xl mx-auto">
            At <strong>SKSY SellerFly Online Solutions LLP</strong>, we empower
            businesses with comprehensive e-commerce solutions. As a trusted
            partner, we help brands establish and scale their presence on
            leading online marketplaces such as Amazon, Flipkart, Meesho,
            JioMart, Ajio, Shopify, Shop 101, Limeroad and more. With 15 years
            of expertise, we have assisted manufacturers, wholesalers, and
            entrepreneurs in optimizing their digital storefronts and maximizing
            their sales potential.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#ab5836] mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="flex flex-col items-center text-center"
              data-aos="fade-right"
            >
              {/* Placeholder for related image */}
              <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <span className="text-xl text-[#ab5836]">Img</span>
              </div>
              <h5 className="text-xl font-semibold mb-2">
                Expertise & Experience
              </h5>
              <p className="text-gray-700">
                With extensive e-commerce expertise, we know what it takes to
                grow your business.
              </p>
            </div>
            <div
              className="flex flex-col items-center text-center"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <span className="text-xl text-[#ab5836]">Img</span>
              </div>
              <h5 className="text-xl font-semibold mb-2">Dedicated Support</h5>
              <p className="text-gray-700">
                Our team provides personalized solutions tailored to your
                business needs.
              </p>
            </div>
            <div
              className="flex flex-col items-center text-center"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <span className="text-xl text-[#ab5836]">Img</span>
              </div>
              <h5 className="text-xl font-semibold mb-2">
                Data-Driven Approach
              </h5>
              <p className="text-gray-700">
                We leverage analytics and market insights to drive growth and
                efficiency.
              </p>
            </div>
            <div
              className="flex flex-col items-center text-center"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <span className="text-xl text-[#ab5836]">Img</span>
              </div>
              <h5 className="text-xl font-semibold mb-2">
                Scalability & Growth
              </h5>
              <p className="text-gray-700">
                Our scalable solutions ensure your business can expand
                seamlessly.
              </p>
            </div>
          </div>
          <div className="mt-12" data-aos="fade-up" data-aos-delay="400">
            <AchievementComponent />
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#ab5836] mb-4">
            Our Certificates
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            LLP, GST, MSME &amp; more
          </p>
          <img
            src={certificates}
            alt="Certificates"
            className="w-full max-w-md rounded-lg shadow-lg mx-auto object-cover"
          />
        </div>
      </section>

      {/* Meet Our Founder */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center text-[#ab5836] mb-4">
            Meet Our Founder
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-12">
            <div className="flex-shrink-0" data-aos="zoom-in">
              <img
                src={introImage}
                alt="Founder"
                className="w-56 h-48 lg:w-80 lg:h-72 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
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
                Digital Experts with a vision to grow your business from 10X to
                100X. Our mission is to provide top-notch services that help you
                thrive in a competitive digital marketplace.
              </p>
              <p className="text-lg font-bold text-gray-800">
                Let’s take your business to new heights—faster and smarter.
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
        className="py-16 bg-gradient-to-r from-black to-blue-950 text-white text-center"
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
            onClick={() => setModalOpen(true)}
            className="bg-white text-[#ab5836] font-bold py-2 px-8 rounded-lg hover:bg-gray-100 hover:text-[#ab5836] transition duration-300"
            aria-label="Contact Us Today"
          >
            Contact Us Today
          </button>
          {isModalOpen && (
            <ModalComponent closeModal={() => setModalOpen(false)} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
