// import React, { useEffect } from "react";
// import {
//   FaBullhorn,
//   FaCog,
//   FaCamera,
//   FaDesktop,
//   FaShoppingCart,
//   FaTag,
//   FaLightbulb,
// } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import OurServices from "./OurServies";
// import AchievementComponent from "./AchivementComponent";

// // Importing images
// import Image1 from "../Images/new_img.png"; // Image 1
// import Image2 from "../Images/new_img.png"; // Image 2
// import Image3 from "../Images/new_img.png"; // Image 3

// const Rout_Services = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration
//       once: true, // Whether animation should happen only once
//     });
//   }, []);

//   return (
//     <div className="font-body">
//       {/* Hero Section */}
//       <div
//         className="h-80 bg-cover bg-center relative"
//         style={{ backgroundImage: `url(/Rout_Banner/services.png)` }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//           <h1 className="text-white text-4xl font-heading font-bold animate-fadeIn">
//             E-Commerce Seller Account Management
//           </h1>
//         </div>
//       </div>

//       {/* Services and Achievements */}
//       <section className="bg-gray-100 py-16">
//         <div className="max-w-full mx-auto">
//           {/* Image 1 Content */}
//           <section
//             className="py-16 px-8 bg-white rounded-lg shadow-md mb-16"
//             data-aos="fade-up"
//           >
//             <div className="flex flex-col lg:flex-row items-center">
//               <img
//                 src={Image1}
//                 alt="Technologies"
//                 className="w-full lg:w-1/2 h-auto object-cover rounded-md mb-8 lg:mb-0"
//               />
//               <div className="lg:ml-12 text-lg">
//                 <h2 className="text-3xl font-heading font-bold mb-4 text-vibrantRed">
//                   Technologies
//                 </h2>
//                 <p className="text-gray-700 mb-4">
//                   CSS, HTML, Java, Magento, WordPress, Wix, .NET, Laravel, PHP,
//                   Shopify, and more. With over 30+ e-commerce websites and 1000+
//                   campaigns, we are experienced to launch your website and grow
//                   sales regardless of the technologies involved.
//                 </p>
//                 {/* <div className="flex space-x-4">
//                   <button className="bg-vibrantRed text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300">
//                     Learn More
//                   </button>
//                   <button className="bg-gray-200 text-vibrantRed py-2 px-6 rounded-lg hover:bg-gray-300 transition duration-300">
//                     Get in Touch
//                   </button>
//                 </div> */}
//               </div>
//             </div>
//           </section>

//           {/* Image 2 Content */}
//           <section
//             className="py-16 px-8 bg-gray-100 rounded-lg shadow-md mb-16"
//             data-aos="fade-up"
//           >
//             <div className="flex flex-col lg:flex-row items-center">
//               <div className="lg:mr-12 text-lg">
//                 <h2 className="text-3xl font-heading font-bold mb-4 text-vibrantRed">
//                   Marketplaces
//                 </h2>
//                 <p className="text-gray-700 mb-4">
//                   We handle operations on Amazon, Flipkart, Meesho, AJIO, Udaan,
//                   Nykaa, and Limeroad. Grow your sales with a comprehensive
//                   omni-channel strategy across multiple platforms.
//                 </p>
//                 {/* <div className="flex space-x-4">
//                   <button className="bg-vibrantRed text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300">
//                     Learn More
//                   </button>
//                   <button className="bg-gray-200 text-vibrantRed py-2 px-6 rounded-lg hover:bg-gray-300 transition duration-300">
//                     Get in Touch
//                   </button>
//                 </div> */}
//               </div>
//               <img
//                 src={Image2}
//                 alt="Marketplaces"
//                 className="w-full lg:w-1/2 h-auto object-cover rounded-md mb-8 lg:mb-0"
//               />
//             </div>
//           </section>

//           {/* Image 3 Content */}
//           <section
//             className="py-16 px-8 bg-white rounded-lg shadow-md mb-16"
//             data-aos="fade-up"
//           >
//             <div className="flex flex-col lg:flex-row items-center">
//               <img
//                 src={Image3}
//                 alt="Expertise"
//                 className="w-full lg:w-1/2 h-auto object-cover rounded-md mb-8 lg:mb-0"
//               />
//               <div className="lg:ml-12 text-lg">
//                 <h2 className="text-3xl font-heading font-bold mb-4 text-vibrantRed">
//                   Expertise
//                 </h2>
//                 <p className="text-gray-700 mb-4">
//                   Seller Rocket is a team of experienced professionals with more
//                   than a decade of industry experience in e-commerce. Our
//                   expertise helps businesses stay competitive in the
//                   ever-evolving digital marketplace.
//                 </p>
//                 {/* <div className="flex space-x-4">
//                   <button className="bg-vibrantRed text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300">
//                     Learn More
//                   </button>
//                   <button className="bg-gray-200 text-vibrantRed py-2 px-6 rounded-lg hover:bg-gray-300 transition duration-300">
//                     Get in Touch
//                   </button>
//                 </div> */}
//               </div>
//             </div>
//           </section>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <div
//         className="py-16 bg-vibrantRed text-center text-white"
//         data-aos="fade-up"
//       >
//         <h4 className="text-2xl font-heading font-bold mb-4">
//           Did You Get it Yet?
//         </h4>
//         <p className="mb-6">Alrighty, Hit The Button Already!</p>
//         <button className="bg-white text-vibrantRed font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
//           SPEAK TO US
//         </button>
//       </div>

//       {/* Achievements and Our Services */}
//       <div className="mt-10">
//         <AchievementComponent />
//         <OurServices />
//       </div>
//     </div>
//   );
// };

// export default Rout_Services;

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Animation on Scroll
import ModalComponent from "./ModalComponent";

const Rout_Services = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="our-services">
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(/Rout_Banner/services.png)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold" data-aos="fade-up">
            Our Services
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            Customized Solutions to Propel Your Online Business
          </h2>
          <p className="text-lg text-gray-700">
            At SellerFly, we offer a comprehensive range of e-commerce services
            designed to accelerate your business growth and enhance your online
            presence. Our tailored solutions ensure that your unique business
            needs are met with precision and expertise.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center text-red-600 mb-12"
            data-aos="fade-up"
          >
            Our Key Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Item */}
            <div
              className="p-6 bg-gray-50 rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-bold mb-2 text-black">
                E-Commerce Seller Account Management
              </h3>
              <p className="text-gray-700">
                Comprehensive Management for Sustained Growth. From account
                setup to daily operations, our end-to-end management services
                focus on driving consistent sales growth across all major
                e-commerce platforms.
              </p>
            </div>

            <div
              className="p-6 bg-gray-50 rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-bold mb-2 text-black">
                Website Design & Development
              </h3>
              <p className="text-gray-700">
                Custom-Built Websites for Optimal Performance. We create fully
                customized websites that offer reliability, scalability, and an
                exceptional user experience.
              </p>
            </div>

            <div
              className="p-6 bg-gray-50 rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-bold mb-2 text-black">
                App Design and Development
              </h3>
              <p className="text-gray-700">
                Leading App Development Services. We deliver expertly crafted
                mobile applications with a dedicated team, timely delivery, and
                competitive pricing.
              </p>
            </div>

            <div
              className="p-6 bg-gray-50 rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-bold mb-2 text-black">
                Digital Marketing
              </h3>
              <p className="text-gray-700">
                Engage your target audience effectively with our 360° digital
                marketing strategies. We enhance brand awareness and drive
                conversions through strategic campaigns.
              </p>
            </div>

            <div
              className="p-6 bg-gray-50 rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-bold mb-2 text-black">
                Social Media Marketing
              </h3>
              <p className="text-gray-700">
                Strategic Social Media Engagement. Connect with potential buyers
                and retain customers through customized social media strategies.
              </p>
            </div>

            <div
              className="p-6 bg-gray-50 rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-bold mb-2 text-black">
                Product Photoshoot
              </h3>
              <p className="text-gray-700">
                High-Quality Product Photography. Our professional photography
                services showcase your products in the best light, attracting
                more customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplaces Expertise */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            Marketplaces Expertise
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Maximize your sales with our omni-channel strategy. We manage your
            operations on top marketplaces including Amazon, Flipkart, Meesho,
            Ajio, Udaan, Nykaa, and Limeroad, ensuring consistent growth and
            visibility.
          </p>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            Our Expertise
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our team comprises former employees of Flipkart, Amazon, and Myntra,
            bringing over a decade of e-commerce industry experience. Trust us
            to manage your sales operations efficiently, allowing your business
            to run smoothly on autopilot.
          </p>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center text-red-600 mb-12"
            data-aos="fade-up"
          >
            Specialized Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="p-6 bg-white rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-bold mb-2 text-black">Boost Sales</h3>
              <p className="text-gray-700">
                Strategic growth roadmaps designed to expand your business and
                increase sales effectively.
              </p>
            </div>

            <div
              className="p-6 bg-white rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-bold mb-2 text-black">
                Brand Building
              </h3>
              <p className="text-gray-700">
                Protect and enhance your brand image with our comprehensive
                brand-building services.
              </p>
            </div>

            <div
              className="p-6 bg-white rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-bold mb-2 text-black">Consulting</h3>
              <p className="text-gray-700">
                Expert consulting to help you navigate the e-commerce landscape
                and improve sales.
              </p>
            </div>

            <div
              className="p-6 bg-white rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-bold mb-2 text-black">
                Inventory Management
              </h3>
              <p className="text-gray-700">
                Efficient inventory operations including replenishment
                suggestions, FBA shipments, and returns management.
              </p>
            </div>

            <div
              className="p-6 bg-white rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-bold mb-2 text-black">
                SEO for Marketplaces
              </h3>
              <p className="text-gray-700">
                Boost organic visibility with optimized product listings and
                SEO-friendly strategies.
              </p>
            </div>

            <div
              className="p-6 bg-white rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-bold mb-2 text-black">
                Product Photography
              </h3>
              <p className="text-gray-700">
                High-quality product images that build trust and increase sales
                on e-commerce platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-16 mb-5 bg-red-600 text-center text-white"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-bold mb-4">
          Ready to Transform Your E-Commerce Business?
        </h2>
        <p className="text-lg mb-6">
          Partner with SellerFly and unlock the full potential of your online
          ventures.
        </p>
        <button
          onClick={openModal}
          className="bg-white text-red-600 font-bold py-2 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          Contact Us Today
        </button>
        {isModalOpen && <ModalComponent closeModal={closeModal} />}
      </section>
    </div>
  );
};

export default Rout_Services;
