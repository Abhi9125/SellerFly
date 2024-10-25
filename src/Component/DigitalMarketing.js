import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import marketingImage from "../Images/DigitalMarketing/Main_Banner.png"; // Replace with actual image paths
import seoImage from "../Images/DigitalMarketing/Seo.png";
import ppcImage from "../Images/DigitalMarketing/Pay-per-click.png";
import socialMediaImage from "../Images/DigitalMarketing/SocialMediaMarketing.png";
import linkedinImage from "../Images/DigitalMarketing/Linkedin.png";
import productPhotoImage from "../Images/DigitalMarketing/Photoshoot.png";
import leadGenImage from "../Images/DigitalMarketing/Leadgen.png";
import brandingImage from "../Images/DigitalMarketing/BrandingImg.png";
import Heading_Banner from "../Images/Rout_Banner/DiditalMarketing.png";
import ModalComponent from "./ModalComponent";

const DigitalMarketing = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      easing: "ease-in-out", // Easing function for smoother animations
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
          <h1 className="text-white text-4xl font-bold" data-aos="fade-down">
            Digital Marketing
          </h1>
        </div>
      </section>

      {/* Why Digital Marketing Section */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-red-700 mb-6"
            data-aos="fade-right"
          >
            Why Your Business Needs Professional Digital Marketing
          </h2>
          <p
            className="text-lg text-gray-700 leading-relaxed mb-4"
            data-aos="fade-left"
          >
            In today’s digital landscape, having a strong online presence is
            essential for business success. At SellerFly, we provide
            comprehensive digital marketing solutions tailored to your business
            goals, ensuring growth and visibility across all platforms.
          </p>
          {/* <img
            src={marketingImage}
            alt="Digital Marketing Overview"
            className="w-full h-auto mt-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
            data-aos="zoom-in"
            loading="lazy"
          /> */}
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-16 bg-gray-100" data-aos="fade-right">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
          {/* Content */}
          <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="100">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Search Engine Optimization (SEO)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our expert SEO services improve your website’s organic reach and
              keyword visibility, attracting more potential customers. With
              enhanced search engine rankings, your business can reach new
              heights.
            </p>
          </div>
          {/* Image */}
          <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
            <img
              src={seoImage}
              alt="SEO Services Illustration"
              className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* PPC Section */}
      <section className="py-16 bg-white" data-aos="fade-left">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
          {/* Image */}
          <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="100">
            <img
              src={ppcImage}
              alt="Pay-Per-Click Advertising"
              className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
              loading="lazy"
            />
          </div>
          {/* Content */}
          <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Pay-Per-Click (PPC) Advertising
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Reach your ideal customers with precision using our expertly
              managed PPC campaigns. We optimize your ads for maximum ROI,
              ensuring your products are shown to the right audience.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Marketing Section */}
      <section className="py-16 bg-gray-100" data-aos="fade-right">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
          {/* Content */}
          <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="100">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Social Media Marketing
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Stay in front of potential buyers and retain existing customers
              with our tailored social media strategies. We boost your brand’s
              visibility across platforms like Facebook, Instagram, and
              LinkedIn.
            </p>
          </div>
          {/* Image */}
          <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
            <img
              src={socialMediaImage}
              alt="Social Media Marketing Strategies"
              className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* LinkedIn Account Management Section */}
      <section className="py-16 bg-white" data-aos="fade-left">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
          {/* Image */}
          <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="100">
            <img
              src={linkedinImage}
              alt="LinkedIn Account Management"
              className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
              loading="lazy"
            />
          </div>
          {/* Content */}
          <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Social Media Account Management
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Social media account management helps grow a brand by creating,
              scheduling, and analyzing content to engage audiences and build a
              loyal community. It strengthens brand presence and supports
              business goals through consistent, strategic posts and
              audience interaction.
            </p>
          </div>
        </div>
      </section>

      {/* Product Photoshoot Section */}
      <section className="py-16 bg-gray-100" data-aos="fade-right">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
          {/* Content */}
          <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="100">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Product Photoshoot
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Showcase your products with high-quality photography services,
              including model photoshoots. Our professional images help attract
              and convert customers effectively, boosting your sales.
            </p>
          </div>
          {/* Image */}
          <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
            <img
              src={productPhotoImage}
              alt="Product Photoshoot Example"
              className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Lead Generation Section */}
      <section className="py-16 bg-white" data-aos="fade-left">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
          {/* Image */}
          <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="100">
            <img
              src={leadGenImage}
              alt="Lead Generation Services"
              className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
              loading="lazy"
            />
          </div>
          {/* Content */}
          <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Lead Generation
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Increase your customer base with our targeted lead generation
              services. We deliver qualified leads that boost your sales
              pipeline and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Branding Section */}
      <section className="py-16 bg-gray-100" data-aos="fade-right">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
          {/* Content */}
          <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="100">
            <h2 className="text-3xl font-bold text-red-600 mb-4">Branding</h2>
            <p className="text-gray-700 leading-relaxed">
              Develop a strong and memorable brand identity with our
              comprehensive branding strategies. We help enhance your brand
              awareness and communicate your core values effectively.
            </p>
          </div>
          {/* Image */}
          <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
            <img
              src={brandingImage}
              alt="Branding Services"
              className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
              loading="lazy"
            />
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
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-lg mb-6">
            Contact SellerFly today to start growing your online business with
            our expert digital marketing services.
          </p>
          <button
            onClick={openModal}
            className="bg-white text-red-600 font-bold py-2 px-8 rounded-lg hover:bg-gray-100 hover:text-red-700 transition duration-300 transform hover:scale-105"
            aria-label="Contact Us Now"
          >
            Contact Us Now
          </button>
          {isModalOpen && <ModalComponent closeModal={closeModal} />}
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
