import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

// Import images for each platform
import AmazonImage from "../Images/E-commerece platform_logo/gif_amazon.gif"; // Replace with actual image path
import FlipkartImage from "../Images/E-commerece platform_logo/gif_flipkart.gif"; // Replace with actual image path
import MeeshoImage from "../Images/E-commerece platform_logo/gif_meesho.gif"; // Replace with actual image path
import MyntraImage from "../Images/E-commerece platform_logo/gif_myntra.gif"; // Replace with actual image path
import AjioImage from "../Images/E-commerece platform_logo/gif_ajio.gif"; // Replace with actual image path
import GlowroadImage from "../Images/E-commerece platform_logo/gif_glowroad.gif"; // Replace with actual image path
import JioMartImage from "../Images/E-commerece platform_logo/gif_jiomart.gif"; // Replace with actual image path
import BigBasketImage from "../Images/E-commerece platform_logo/gif_bigbasket.gif"; // Replace with actual image path
import UdaanImage from "../Images/E-commerece platform_logo/gif_udaan.gif"; // Replace with actual image path
import Rout_Banner_AccountManagement from "../Images/Rout_Banner/ACCOUNT-MANAGMENT-HEADER.png";
import ModalComponent from "./ModalComponent";
import OurSuccessStory from "./OurSucessStory";

const successStories = [
  {
    image1: `${process.env.PUBLIC_URL}/SuccessStory/glowroad.png`,
    image2: `${process.env.PUBLIC_URL}/SuccessStory/GlowRoad_Business.png`,
    description: "GENERATED 6.7+ SALES ORGANICALLY IN JUST 3 MONTHS",
  },
  {
    image1: `${process.env.PUBLIC_URL}/SuccessStory/GlowRoad_Business.png`,
    image2: `${process.env.PUBLIC_URL}/SuccessStory/Shop101_Business.png`,
    description: "GENERATED 1.5 CRORE+ SALES ORGANICALLY IN JUST 1 MONTH",
  },
  {
    image1: `${process.env.PUBLIC_URL}/SuccessStory/meesho.png`,
    image2: `${process.env.PUBLIC_URL}/SuccessStory/Meesho_Business.png`,
    description: "GENERATED 30+ LAKHS SALES ORGANICALLY IN JUST 3 MONTHS",
  },
  {
    image1: `${process.env.PUBLIC_URL}/SuccessStory/flipkart.png`,
    image2: `${process.env.PUBLIC_URL}/SuccessStory/Flipkart_Business.png`,
    description: "GENERATED 27.7+ LAKHS SALES ORGANICALLY IN JUST 5 MONTHS",
  },
];

const platforms = [
  {
    name: "Amazon",
    description:
      "Maximize your visibility and sales with SellerFly’s Amazon Optimization Services. We offer expert ad management, content optimization, inventory logistics, and keyword & SEO advancements tailored for your brand.",
    image: AmazonImage,
  },
  {
    name: "Flipkart",
    description:
      "Founded by former Flipkart employees, SellerFly offers over a decade of expertise to help you succeed on Flipkart. Let us handle your account management so you can focus on growth.",
    image: FlipkartImage,
  },
  {
    name: "Meesho",
    description:
      "As India’s largest social commerce platform, Meesho allows for higher profits with lower commission rates. SellerFly offers hassle-free growth management on this platform.",
    image: MeeshoImage,
  },
  {
    name: "Myntra",
    description:
      "Led by former Myntra employees, SellerFly specializes in building and expanding your presence on Myntra, India’s premier fashion e-commerce destination.",
    image: MyntraImage,
  },
  {
    name: "Ajio",
    description:
      "A Reliance enterprise, Ajio has captured a significant portion of the trendy fashion market. SellerFly has managed Ajio accounts generating over ₹3 Crores in monthly revenue for clients.",
    image: AjioImage,
  },
  {
    name: "Glowroad",
    description:
      "Glowroad is a leading e-commerce platform with over 2 million daily shoppers. Let SellerFly manage your Glowroad accounts for optimal sales performance.",
    image: GlowroadImage,
  },
  {
    name: "Jio Mart",
    description:
      "Jio Mart attracts over 2 million daily shoppers, and SellerFly’s experienced team provides end-to-end management services to grow your revenue on this platform.",
    image: JioMartImage,
  },
  {
    name: "BigBasket",
    description:
      "SellerFly’s expertise in BigBasket, India’s leading online grocery giant, ensures effective account management and helps you expand your business.",
    image: BigBasketImage,
  },
  {
    name: "Udaan",
    description:
      "With over a decade of e-commerce experience, SellerFly helps you scale your B2B business on Udaan with efficient and specialized account management.",
    image: UdaanImage,
  },
];

const EcommerceSellerAccountManagement = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = successStories.length;
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

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
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

      {/* Platforms Section */}
      <section className="py-16 bg-gray-100" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
            Unlock the Potential of Major E-Commerce Platforms
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center">
            Our team comprises former employees from leading e-commerce
            companies like Flipkart, Amazon, and Myntra. We offer expert
            end-to-end account management services across the top e-commerce
            platforms, helping your business grow and succeed.
          </p>

          {/* Alternating Layout for Each Platform */}
          <div className="space-y-12">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-full lg:w-1/2">
                  <img
                    src={platform.image}
                    alt={`${platform.name} Logo`}
                    className="w-full h-60 object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <h3 className="text-xl font-bold text-red-600 mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-gray-700">{platform.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Slideshow */}

      {/* Success Stories Slideshow */}
      <OurSuccessStory />

      {/* Why Partner with SellerFly */}
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

export default EcommerceSellerAccountManagement;
