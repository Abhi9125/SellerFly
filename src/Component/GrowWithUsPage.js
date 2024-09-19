import React, { useState, useEffect } from "react";
import {
  FaChartLine,
  FaBullhorn,
  FaShoppingCart,
  FaRocket,
} from "react-icons/fa";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import AOS from "aos";
import "aos/dist/aos.css";
import bgImage from "../Images/new_img.png"; // Replace with your actual image
import ModalComponent from "./ModalComponent";
import OurSuccessStory from "./OurSucessStory";
import Grow_Banner from "../Images/Rout_Banner/grow.png";
import OurClients from "./OurClients";

// Stats Data
const stats = [
  {
    icon: <FaShoppingCart className="text-red-600 text-4xl" />,
    title: "E-Commerce Accounts Managed",
    count: 350,
  },
  {
    icon: <FaBullhorn className="text-red-600 text-4xl" />,
    title: "Websites Developed",
    count: 150,
  },
  {
    icon: <FaChartLine className="text-red-600 text-4xl" />,
    title: "Revenue Generated",
    count: 50,
    suffix: "M+",
  },
  {
    icon: <FaRocket className="text-red-600 text-4xl" />,
    title: "Years of Experience",
    count: 14,
  },
];

// Services Data
const services = [
  {
    icon: <FaRocket className="text-4xl text-red-600" />,
    title: "Grow Your Online Store",
    description:
      "We help you optimize your store, increase traffic, and maximize conversion rates.",
  },
  {
    icon: <FaBullhorn className="text-4xl text-red-600" />,
    title: "Targeted Digital Marketing",
    description:
      "Boost your sales with targeted marketing strategies tailored to your business goals.",
  },
  {
    icon: <FaShoppingCart className="text-4xl text-red-600" />,
    title: "E-Commerce Expertise",
    description:
      "Leverage our experience in managing online marketplaces to scale your business.",
  },
  {
    icon: <FaChartLine className="text-4xl text-red-600" />,
    title: "Lead Generation",
    description:
      "Our lead generation strategies drive growth and help you find potential buyers.",
  },
];

const GrowWithUsPage = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Grow_Banner})` }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Grow With Us</h1>
        </div>
      </div>

      <section className="bg-gray-50 py-16">
        {/* Header Section */}
        <div
          className="container mx-auto text-center mb-12 px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
        >
          <h1 className="text-4xl font-extrabold text-gray-800">
            Grow With Us
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Expand your online business with tailored e-commerce and marketing
            solutions.
          </p>
        </div>

        {/* Stats Section */}
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div
            className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
            data-aos="fade-up"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105"
              >
                <div className="mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold mt-4 text-gray-800">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={stat.count}
                      suffix={stat.suffix || "+"}
                      duration={3}
                    />
                  )}
                </h3>
                <p className="text-gray-600 mt-2">{stat.title}</p>
              </div>
            ))}
          </div>
        </ScrollTrigger>

        {/* Services Section */}
        <div className="container mx-auto mt-16 px-4" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            How We Help You Grow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <OurClients />
        <OurSuccessStory />

        {/* Call to Action Section */}
        <div className="text-center mt-16" data-aos="fade-up">
          <button
            onClick={openModal}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition duration-300 inline-block"
            aria-label="Start Growing with Us Today"
          >
            Start Growing with Us Today
          </button>
          {isModalOpen && <ModalComponent closeModal={closeModal} />}
        </div>
      </section>
    </div>
  );
};

export default GrowWithUsPage;
