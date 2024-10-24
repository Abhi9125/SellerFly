import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ModalComponent from "./ModalComponent";
import MainBannerimageforWebdevelopment from "../Images/webDevelopment1.png";
import ZerotoOneSampleWebsite from "../Images/our_clients_Website_Images/0to1website.png";
import PallavanoilSampleWebsite from "../Images/our_clients_Website_Images/PallavanOil_Website.png";
import DerkleySampleWebsite from "../Images/our_clients_Website_Images/derkley_Website.png";
import SmileyButtonsSampleWebsite from "../Images/our_clients_Website_Images/smileybuttons_Website.png";
import SellerflySampleWebsite from "../Images/our_clients_Website_Images/Sellerfly_Website.png";
import Heading_Banner from "../Images/Rout_Banner/Web_development.png";
const WebsiteDevelopmentServices = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Heading_Banner})` }}
        data-aos="fade-in"
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          data-aos="fade-zoom-in"
        >
          <h1
            className="text-white text-5xl font-extrabold tracking-wide"
            data-aos="fade-down"
          >
            Website Development Services
          </h1>
        </div>
      </section>

      {/* Why Your Business Needs a Professional Website Section */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
          {/* Image */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img
              src={MainBannerimageforWebdevelopment}
              alt="Professional Website Development"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          {/* Content */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Why Your Business Needs a Professional Website
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In today's digital age, a website serves as the online face of
              your business. Customers increasingly expect every business to
              have a robust online presence, often researching brands online
              before making a purchase or visiting a physical store. A
              well-crafted website not only enhances your credibility but also
              acts as a 24/7 sales agent, driving growth and expanding your
              reach.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100" data-aos="fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-red-600 mb-6 text-center"
            data-aos="flip-left"
          >
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-2xl font-bold mb-4">
                High-Performing, Custom-Designed Websites
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We create websites that are visually appealing and
                high-performing, adhering to the latest standards in design,
                development, and SEO.
              </p>
            </div>
            {/* Feature 2 */}
            <div
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-bold mb-4">
                User Experience & Quality
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We prioritize seamless user experiences and top-notch quality
                while offering cost-effective solutions.
              </p>
            </div>
            {/* Feature 3 */}
            <div
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-2xl font-bold mb-4">24/7 Sales Agent</h3>
              <p className="text-gray-700 leading-relaxed">
                Your website works around the clock, pitching your products and
                services to potential customers anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-red-600 mb-6 text-center"
            data-aos="zoom-in"
          >
            Key Website Features
          </h2>
          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-4">
            <li data-aos="fade-up" data-aos-delay="100">
              Mobile Compatibility: Fully responsive websites across all
              devices.
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              Faster Load Times: Optimized for speed and user satisfaction.
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              Browser Consistency: Looks and functions flawlessly on all
              browsers.
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              Exceptional Design: Engaging design crafted with purpose.
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
              Usable Forms: Efficiently collect data from users with
              well-designed forms.
            </li>
            <li data-aos="fade-up" data-aos-delay="600">
              Competitive Differentiation: Highlight your unique selling points
              and stand out in the market.
            </li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100" data-aos="fade-up">
        {/* Client Website Image */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-red-600 mb-6 text-center"
            data-aos="flip-up"
          >
            Our Successful Projects
          </h2>
          <div
            className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8"
            data-aos="fade-up"
          >
            <a
              href="https://0to1store.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={ZerotoOneSampleWebsite}
                alt="Client Website Demo"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </a>
          </div>
          <div
            className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8"
            data-aos="fade-up"
          >
            <a
              href="https://pallavanoil.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={PallavanoilSampleWebsite}
                alt="Client Website Demo"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </a>
          </div>
          <div
            className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8"
            data-aos="fade-up"
          >
            <a
              href="https://derkley.in/?srsltid=AfmBOoobi1ea-C7AYxFOW9aHeIKZXNIQfKfpkmMvIOf8xRu5JN2p_J9T"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={DerkleySampleWebsite}
                alt="Client Website Demo"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </a>
          </div>
          <div
            className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8"
            data-aos="fade-up"
          >
            <a
              href="https://www.smileybuttons.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={SmileyButtonsSampleWebsite}
                alt="Client Website Demo"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </a>
          </div>
          <div
            className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8"
            data-aos="fade-up"
          >
            <a
              href="https://sellerfly.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={SellerflySampleWebsite}
                alt="Client Website Demo"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </a>
          </div>
        </div>
        <div className="mt-7 container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-red-600 mb-6 text-center"
            data-aos="flip-up"
          >
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-2xl font-bold mb-4">
                E-Commerce Seller Account Management
              </h3>
              <p className="text-gray-700">
                Drive sustained growth with our end-to-end management of your
                e-commerce seller accounts across major platforms.
              </p>
            </div>
            {/* Service 2 */}
            <div
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-bold mb-4">
                Website Design & Development
              </h3>
              <p className="text-gray-700">
                We build custom websites with reliable performance, scalability,
                and exceptional user experience.
              </p>
            </div>
            {/* Service 3 */}
            <div
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-2xl font-bold mb-4">
                Search Engine Optimization (SEO)
              </h3>
              <p className="text-gray-700">
                Improve your search engine rankings and reach more potential
                customers with our SEO services.
              </p>
            </div>
            {/* Service 4 */}
            <div
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
              <p className="text-gray-700">
                Engage your target audience and drive conversions with our
                comprehensive digital marketing services.
              </p>
            </div>
            {/* Service 5 */}
            <div
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h3 className="text-2xl font-bold mb-4">
                Pay-Per-Click (PPC) Advertising
              </h3>
              <p className="text-gray-700">
                Reach your ideal customers with precision using our expertly
                managed PPC campaigns.
              </p>
            </div>
            {/* Service 6 */}
            <div
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h3 className="text-2xl font-bold mb-4">
                Social Media Marketing
              </h3>
              <p className="text-gray-700">
                Retain existing customers and attract new ones with our
                strategic social media marketing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SellerFly Section */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-red-600 mb-8"
            data-aos="fade-up"
          >
            Why Choose SellerFly?
          </h2>
          <p className="text-lg text-gray-700 mb-12" data-aos="fade-right">
            At SellerFly, we are committed to providing tailored solutions to
            help you achieve your business goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div
              className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-2xl font-bold mb-4">Experienced Team</h3>
              <p className="text-gray-700">
                Our team comprises industry veterans with years of e-commerce
                and digital marketing expertise.
              </p>
            </div>
            {/* Reason 2 */}
            <div
              className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-bold mb-4">Customized Solutions</h3>
              <p className="text-gray-700">
                We understand every business is unique. Our services are
                tailored to meet your specific needs.
              </p>
            </div>
            {/* Reason 3 */}
            <div
              className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-2xl font-bold mb-4">Proven Track Record</h3>
              <p className="text-gray-700">
                With a history of successful projects, our strategies drive
                growth and revenue consistently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-16 bg-red-600 text-white text-center"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-lg mb-6">
            Partner with SellerFly to take your business to new heights.
          </p>
          <button
            onClick={openModal}
            className="bg-white text-red-600 font-bold py-2 px-8 rounded-lg hover:bg-gray-100 hover:text-red-700 transition duration-300 transform hover:scale-105"
            aria-label="Contact Us Today"
          >
            Contact Us Today
          </button>
          {isModalOpen && <ModalComponent closeModal={closeModal} />}
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopmentServices;
