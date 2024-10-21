import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserCheck, FaFileAlt, FaStore, FaChartLine } from "react-icons/fa";

// Import images for each platform
import AmazonImage from "../Images/E-commerece platform_logo/gif_amazon.gif";
import FlipkartImage from "../Images/E-commerece platform_logo/gif_flipkart.gif";
import MeeshoImage from "../Images/E-commerece platform_logo/gif_meesho.gif";
import MyntraImage from "../Images/E-commerece platform_logo/gif_myntra.gif";
import AjioImage from "../Images/E-commerece platform_logo/gif_ajio.gif";
import GlowroadImage from "../Images/E-commerece platform_logo/gif_glowroad.gif";
import JioMartImage from "../Images/E-commerece platform_logo/gif_jiomart.gif";
import BigBasketImage from "../Images/E-commerece platform_logo/gif_bigbasket.gif";
import UdaanImage from "../Images/E-commerece platform_logo/gif_udaan.gif";
import Rout_Banner_AccountManagement from "../Images/Rout_Banner/ACCOUNT-MANAGMENT-HEADER.png";
import ModalComponent from "./ModalComponent";
import OurSuccessStory from "./OurSucessStory";

const platforms = [
  { name: "Amazon", image: AmazonImage },
  { name: "Flipkart", image: FlipkartImage },
  { name: "Meesho", image: MeeshoImage },
  { name: "Myntra", image: MyntraImage },
  { name: "Ajio", image: AjioImage },
  { name: "Glowroad", image: GlowroadImage },
  { name: "Jio Mart", image: JioMartImage },
  { name: "BigBasket", image: BigBasketImage },
  { name: "Udaan", image: UdaanImage },
];

const phases = [
  {
    title: "PHASE - 1",
    description:
      "Seller Onboarding, Document Checking, Registration, Product Details Collection, Catalogue Preparation, Product Listing, QC Checking, Daily Order Monitoring, and Order Growth.",
    details:
      "Registration portals: Amazon, Flipkart, Glowroad, Meesho, Shop101, Ajio, Solv, Limeroad. TAT: 2 days for some platforms, and 7-14 days for others. GST verification, E-signature, and brand approval start immediately after registration.",
    icon: <FaUserCheck />,
    color: "#f56565", // Red
  },
  {
    title: "PHASE - 2",
    description:
      "Post-registration, catalogue creation begins, requiring product details, images, and TP from the seller. TAT: 5-10 days.",
    details:
      "Catalogue preparation, image handling, and master sheet creation are the primary tasks in this phase.",
    icon: <FaFileAlt />,
    color: "#4299e1", // Blue
  },
  {
    title: "PHASE - 3",
    description:
      "Post-live listing, the team works on brand store setup and A+ content development for better visibility. TAT: 14 days.",
    details:
      "Brand store creation and A+ content work are key to improved branding and product performance.",
    icon: <FaStore />,
    color: "#48bb78", // Green
  },
  {
    title: "PHASE - 4",
    description:
      "Post-listing completion, focus shifts to ad campaigns, order growth, and product reviews. Regular reports and meetings are conducted.",
    details:
      "Ad campaigns, order growth, product ratings, and reviews are followed by regular reporting and meetings.",
    icon: <FaChartLine />,
    color: "#9f7aea", // Purple
  },
];

const RoadmapTimeline = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Initialize AOS for animation
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation runs once when the element comes into view
    });
  }, []);

  return (
    <div className="mb-6 bg-gray-50">
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Rout_Banner_AccountManagement})` }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            E-Commerce Account Management Services
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4">
        {/* Top GIF Images Section */}
        <section className="py-8 bg-gray-100" data-aos="fade-up">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="flex justify-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <img
                  src={platform.image}
                  alt={`${platform.name} Logo`}
                  className="w-24 h-24 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Title for the Roadmap */}
        <h2
          className="text-3xl font-bold text-center mb-12 text-red-600"
          data-aos="fade-up"
        >
          SELLERFLY WORKING PROCESS AND PROGRESS
        </h2>

        {/* Vertical Timeline with Animation */}
        <VerticalTimeline>
          {phases.map((phase, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: phase.color, color: "#fff" }}
              contentArrowStyle={{ borderRight: `7px solid ${phase.color}` }}
              date={phase.title}
              iconStyle={{ background: phase.color, color: "#fff" }}
              icon={phase.icon}
              // AOS animation for each phase
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h3 className="vertical-timeline-element-title">{phase.title}</h3>
              <p className="text-white">{phase.description}</p>
              <p className="text-white">{phase.details}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      {/* Success Stories Slideshow */}
      <OurSuccessStory />
      // {/* Why Partner with SellerFly */}
      <section className="py-16 bg-white text-center" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            Why Partner with SellerFly?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Experienced Team</h3>
              <p className="text-gray-700">
                Founded by industry veterans from top e-commerce companies, our
                team brings unparalleled expertise to your business.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Comprehensive Services</h3>
              <p className="text-gray-700">
                From account setup to strategic growth, we handle every aspect
                of your online presence.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Proven Results</h3>
              <p className="text-gray-700">
                Our strategies have consistently generated significant revenue
                growth for our clients across various platforms.
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

export default RoadmapTimeline;
