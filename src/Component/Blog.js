import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ECommerceCoimbatore from "../Images/Blog/E-Commerce Website Development.jpg";
import PremiumChennai from "../Images/Blog/Premium E-Commerce Solution.jpg";
import DigitalMarketingChennai from "../Images/Blog/Digital Marketing Srategies.jpg";
import LocalSEO from "../Images/Blog/Local Seo Optimization.jpg";
import BlogBanner from "../Images/Blog/Blog_Sub_banner.jpg";
import ModalComponent from "./ModalComponent";
import { Link } from "react-router-dom";

const Blog = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="mb-10">
      {/* Hero Section */}
      <div
        className="relative h-40 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${BlogBanner})` }}
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
          <h1 className="text-4xl sm:text-5xl font-bold">Blog</h1>
        </div>
      </div>

      {/* Header Component */}
      <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <section className="mb-6" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-center mb-6 text-[#ab5836]">
            Transforming Tamil Nadu’s Digital Landscape with Sellerfly
          </h1>
          <p
            className="text-lg text-gray-700 leading-relaxed text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Your Trusted Partner for E-Commerce and Digital Marketing
          </p>
        </section>

        {/* Introduction Component */}
        <section className="mb-16" data-aos="fade-up">
          <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
            In a world driven by digital innovation, businesses across Tamil
            Nadu – from Chennai to Coimbatore and Hosur – are embracing
            Sellerfly’s expertise to thrive online. Our e-commerce development
            and digital marketing solutions are designed to meet Google’s
            evolving standards, ensuring higher rankings, better visibility, and
            a seamless user experience.
          </p>
        </section>

        {/* Why Sellerfly Excels in E-Commerce Development Component */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold text-center mb-6 text-[#ab5836]"
            data-aos="fade-up"
          >
            Why Sellerfly Excels in E-Commerce Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <img
                src={ECommerceCoimbatore}
                alt="SEO-optimized e-commerce website for Coimbatore businesses"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                E-Commerce Website Development in Coimbatore
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sellerfly creates high-quality, user-friendly websites that
                align with Google’s Panda and Hummingbird updates, ensuring:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-4">
                <li>SEO-optimized content for visibility (Panda)</li>
                <li>Fast-loading, mobile-friendly websites (Mobile)</li>
                <li>
                  Intent-focused designs for user satisfaction (Hummingbird)
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Premium E-Commerce Services in Chennai
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Chennai’s competitive marketplace demands cutting-edge
                solutions. Sellerfly integrates advanced SEO features,
                structured data, and secure payment gateways to build trust and
                authority, aligning with Medic and RankBrain updates for better
                credibility and search performance.
              </p>
            </div>
            <div data-aos="fade-left">
              <img
                src={PremiumChennai}
                alt="Custom e-commerce solutions for Chennai businesses"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* E-Commerce Success Features Component */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold text-center mb-6 text-[#ab5836]"
            data-aos="fade-up"
          >
            E-Commerce Success Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <img
                src={DigitalMarketingChennai}
                alt="SEO-optimized e-commerce website for Coimbatore businesses"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div data-aos="fade-left">
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>
                  Custom Design & Development: Tailored websites to enhance your
                  brand’s identity.
                </li>
                <li>
                  SEO Optimization: Strategies designed to rank higher and align
                  with searcher intent.
                </li>
                <li>
                  Mobile Responsiveness: Fast, intuitive designs that meet
                  Google’s Mobile-first indexing.
                </li>
                <li>
                  Secure Payment Gateways: Builds trust and complies with
                  Google’s E-A-T principles.
                </li>
                <li>
                  Inventory Management: Streamlined operations for better user
                  experiences.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data-Driven Digital Marketing Component */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold text-center mb-6 text-[#ab5836]"
            data-aos="fade-up"
          >
            Data-Driven Digital Marketing for Tamil Nadu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Best Digital Marketing Companies in Chennai
              </h3>
              <ul className="list-disc list-inside text-gray-700 mt-4">
                <li>
                  Search Engine Optimization (SEO): Intent-driven keyword
                  strategies that align with user behavior.
                </li>
                <li>
                  Content Marketing: High-quality, engaging content for
                  authority (Medic, Panda).
                </li>
                <li>
                  Social Media Management: Multi-channel strategies to amplify
                  your online reach.
                </li>
                <li>
                  Pay-Per-Click Advertising (PPC): Optimized campaigns for
                  maximum ROI.
                </li>
              </ul>
            </div>
            <div data-aos="fade-right">
              <img
                src={LocalSEO}
                alt="Best digital marketing services for Tamil Nadu businesses"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Multi-Platform E-Commerce Management Component */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold text-center mb-6 text-[#ab5836]"
            data-aos="fade-up"
          >
            Simplifying Multi-Platform E-Commerce Management
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Sellerfly specializes in managing e-commerce businesses on platforms
            like Amazon, Flipkart, Ajio, and Meesho. Our solutions are tailored
            to enhance visibility, streamline operations, and improve
            conversions across platforms, aligning with Google’s Core Updates
            that prioritize quality and relevance.
          </p>
        </section>

        {/* SEO Strategies Component */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold text-center mb-6 text-[#ab5836]"
            data-aos="fade-up"
          >
            The Power of SEO with Sellerfly
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Keyword Optimization
              </h3>
              <ul className="list-disc list-inside text-gray-700 mt-4">
                <li>E-Commerce Website Development Company in Coimbatore</li>
                <li>Best Ecommerce Development Company Coimbatore</li>
                <li>Premium Ecommerce Company in Chennai</li>
                <li>Best Digital Marketing Companies in Chennai</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                These keywords are carefully aligned with Hummingbird and BERT
                updates, targeting user intent and long-tail search queries.
              </p>
            </div>
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Local SEO
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Focus on Tamil Nadu-specific searches. Optimization for local
                visibility using Google Medic and Core Updates ensures your
                business ranks high in local searches, driving foot traffic and
                online engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Analytics and Data Insights Component */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold text-center mb-6 text-[#ab5836]"
            data-aos="fade-up"
          >
            Advanced Analytics and Data-Driven Decisions
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            With RankBrain-enhanced analytics, we monitor website performance,
            track user behavior, and provide actionable insights. This ensures
            you stay ahead of the competition by adapting to changes in user
            intent and search trends.
          </p>
        </section>

        {/* Why Partner with Sellerfly Component */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold text-center mb-6 text-[#ab5836]"
            data-aos="fade-up"
          >
            Why Partner with Sellerfly?
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              Expertise in Google Algorithm Updates: Sellerfly optimizes
              websites to comply with Panda, Penguin, and BERT guidelines,
              ensuring content quality, keyword relevance, and natural language
              optimization.
            </li>
            <li>
              Mobile-First Approach: Fast-loading, responsive designs that
              prioritize mobile users.
            </li>
            <li>
              E-A-T Compliance: Builds trust through authoritative content,
              secure transactions, and user-first designs.
            </li>
          </ul>
        </section>

        {/* Call-to-Action Component */}
        {/* <section
          className="py-16 rounded-2xl bg-[#ab5836] text-white text-center mt-16"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold mb-4">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-lg mb-6">
            Contact Sellerfly today to explore how we can transform your
            e-commerce and digital marketing strategies.
          </p>
          <a
            href="https://sellerfly.in/"
            className="bg-white text-[#ab5836] font-bold py-2 px-8 rounded-lg hover:bg-gray-100 hover:text-[#ab5836] transition duration-300"
          >
            Visit Us
          </a>
          <p className="mt-4">Call us at +916381780309 / +917815879870</p>
        </section> */}
      </div>
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

export default Blog;
