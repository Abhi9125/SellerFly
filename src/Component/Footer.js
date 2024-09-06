import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Sellerfly</h2>
          <p className="text-gray-400 mb-4">
            Grow your business with Sellerfly's tailored solutions and expert
            services.
          </p>
          <p className="text-gray-400">
            © 2024 Sellerfly. All Rights Reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/services"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/careers"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400 mb-4">+91-6381780309</p>
          <p className="text-gray-400 mb-4">sellerflyonline@gmail.com</p>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.twitter.com"
              className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
