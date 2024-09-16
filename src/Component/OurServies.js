// import React from "react";
// import {
//   FaShoppingCart,
//   FaGlobe,
//   FaDesktop,
//   FaBullhorn,
//   FaCamera,
//   FaCloud,
//   FaCog,
//   FaLightbulb,
//   FaTag,
// } from "react-icons/fa";

// const services = [
//   {
//     icon: <FaShoppingCart className="text-3xl text-white" />,
//     title: "E-Commerce Seller Account Management",
//     description:
//       "Comprehensive end-to-end management of e-commerce seller accounts, dedicated to driving consistent sales growth.",
//   },
//   {
//     icon: <FaGlobe className="text-3xl text-white" />,
//     title: "Global Seller Account Management",
//     description:
//       "Enhance your global e-commerce operations with seamless international seller account management for better sales and business expansion.",
//   },
//   {
//     icon: <FaDesktop className="text-3xl text-white" />,
//     title: "Website Design & Development",
//     description:
//       "We develop fully customized websites focused on delivering high performance, adaptability, and exceptional user experience.",
//   },
//   {
//     icon: <FaBullhorn className="text-3xl text-white" />,
//     title: "Digital Marketing",
//     description:
//       "Our goal is to engage the right audience, enhance brand recognition, establish a strong identity, and boost conversion rates.",
//   },
//   {
//     icon: <FaCog className="text-3xl text-white" />,
//     title: "Shopify Development and Maintenance",
//     description:
//       "Create and maintain your online store with expert Shopify development services, ensuring a smooth, secure, and customized experience.",
//   },
//   {
//     icon: <FaCamera className="text-3xl text-white" />,
//     title: "Product Photoshoot",
//     description:
//       "We offer professional photography services tailored to your products, including model photoshoots to support your business growth.",
//   },
//   {
//     icon: <FaCloud className="text-3xl text-white" />,
//     title: "Cloud Hosting",
//     description:
//       "Our reliable hosting services ensure that your website remains secure, fast, and optimized for peak performance. Your online presence is our top priority.",
//   },
//   {
//     icon: <FaLightbulb className="text-3xl text-white" />,
//     title: "Lead Generation",
//     description:
//       "We craft targeted strategies to elevate your brand’s visibility and identity through strategic digital marketing and social media efforts.",
//   },
//   {
//     icon: <FaTag className="text-3xl text-white" />,
//     title: "Branding",
//     description:
//       "Our branding services help businesses develop a distinctive identity, effectively conveying their core values through strategic marketing and digital outreach.",
//   },
// ];

// const OurServices = () => {
//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="container mx-auto px-4">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold mb-4 text-red-600">
//             Our Services
//           </h2>
//           <p className="text-lg text-gray-600">
//             Personalized solutions and services to boost your online business.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-red-600 p-6 rounded-lg shadow-lg h-64 flex flex-col items-center justify-center transition-shadow duration-300 hover:bg-red-700"
//             >
//               <div className="flex items-center justify-center w-12 h-12 mb-4 bg-red-800 rounded-full">
//                 {service.icon}
//               </div>
//               <h3 className="text-lg font-semibold text-white mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-white text-sm text-center">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurServices;

// import React from "react";
// import {
//   FaShoppingCart,
//   FaGlobe,
//   FaDesktop,
//   FaBullhorn,
//   FaCamera,
//   FaCloud,
//   FaCog,
//   FaLightbulb,
//   FaTag,
// } from "react-icons/fa";

// const services = [
//   {
//     icon: <FaShoppingCart className="text-3xl text-white" />,
//     title: "E-Commerce Seller Account Management",
//     description:
//       "Comprehensive end-to-end management of e-commerce seller accounts, dedicated to driving consistent sales growth.",
//   },
//   {
//     icon: <FaGlobe className="text-3xl text-white" />,
//     title: "Global Seller Account Management",
//     description:
//       "Enhance your global e-commerce operations with seamless international seller account management for better sales and business expansion.",
//   },
//   {
//     icon: <FaDesktop className="text-3xl text-white" />,
//     title: "Website Design & Development",
//     description:
//       "We develop fully customized websites focused on delivering high performance, adaptability, and exceptional user experience.",
//   },
//   {
//     icon: <FaBullhorn className="text-3xl text-white" />,
//     title: "Digital Marketing",
//     description:
//       "Our goal is to engage the right audience, enhance brand recognition, establish a strong identity, and boost conversion rates.",
//   },
//   {
//     icon: <FaCog className="text-3xl text-white" />,
//     title: "Shopify Development and Maintenance",
//     description:
//       "Create and maintain your online store with expert Shopify development services, ensuring a smooth, secure, and customized experience.",
//   },
//   {
//     icon: <FaCamera className="text-3xl text-white" />,
//     title: "Product Photoshoot",
//     description:
//       "We offer professional photography services tailored to your products, including model photoshoots to support your business growth.",
//   },
//   {
//     icon: <FaCloud className="text-3xl text-white" />,
//     title: "Cloud Hosting",
//     description:
//       "Our reliable hosting services ensure that your website remains secure, fast, and optimized for peak performance. Your online presence is our top priority.",
//   },
//   {
//     icon: <FaLightbulb className="text-3xl text-white" />,
//     title: "Lead Generation",
//     description:
//       "We craft targeted strategies to elevate your brand’s visibility and identity through strategic digital marketing and social media efforts.",
//   },
//   {
//     icon: <FaTag className="text-3xl text-white" />,
//     title: "Branding",
//     description:
//       "Our branding services help businesses develop a distinctive identity, effectively conveying their core values through strategic marketing and digital outreach.",
//   },
// ];

// const OurServices = () => {
//   return (
//     <section className="bg-gray-100 py-10">
//       <div className="container mx-auto px-4">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold mb-4 text-red-600">
//             Our Services
//           </h2>
//           <p className="text-lg text-gray-600">
//             Personalized solutions and services to boost your online business.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-red-600 p-6 rounded-lg shadow-lg h-60 flex flex-col items-center justify-center transform transition duration-500 hover:scale-105 hover:shadow-2xl"
//             >
//               <div className="flex items-center justify-center w-16 h-16 mb-4 bg-red-800 rounded-full animate-bounce">
//                 {service.icon}
//               </div>
//               <h3 className="text-lg font-semibold text-white mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-white text-sm text-center">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurServices;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaShoppingCart,
  FaGlobe,
  FaDesktop,
  FaBullhorn,
  FaCamera,
  FaCloud,
  FaCog,
  FaLightbulb,
  FaTag,
} from "react-icons/fa";

// Services data array
const services = [
  {
    icon: <FaShoppingCart className="text-3xl text-white" />,
    title: "E-Commerce Seller Account Management",
    description:
      "Comprehensive end-to-end management of e-commerce seller accounts, dedicated to driving consistent sales growth.",
  },
  {
    icon: <FaGlobe className="text-3xl text-white" />,
    title: "Global Seller Account Management",
    description:
      "Enhance your global e-commerce operations with seamless international seller account management for better sales and business expansion.",
  },
  {
    icon: <FaDesktop className="text-3xl text-white" />,
    title: "Website Design & Development",
    description:
      "We develop fully customized websites focused on delivering high performance, adaptability, and exceptional user experience.",
  },
  {
    icon: <FaBullhorn className="text-3xl text-white" />,
    title: "Digital Marketing",
    description:
      "Our goal is to engage the right audience, enhance brand recognition, establish a strong identity, and boost conversion rates.",
  },
  {
    icon: <FaCog className="text-3xl text-white" />,
    title: "Shopify Development and Maintenance",
    description:
      "Create and maintain your online store with expert Shopify development services, ensuring a smooth, secure, and customized experience.",
  },
  {
    icon: <FaCamera className="text-3xl text-white" />,
    title: "Product Photoshoot",
    description:
      "We offer professional photography services tailored to your products, including model photoshoots to support your business growth.",
  },
  {
    icon: <FaCloud className="text-3xl text-white" />,
    title: "Cloud Hosting",
    description:
      "Our reliable hosting services ensure that your website remains secure, fast, and optimized for peak performance. Your online presence is our top priority.",
  },
  {
    icon: <FaLightbulb className="text-3xl text-white" />,
    title: "Lead Generation",
    description:
      "We craft targeted strategies to elevate your brand’s visibility and identity through strategic digital marketing and social media efforts.",
  },
  {
    icon: <FaTag className="text-3xl text-white" />,
    title: "Branding",
    description:
      "Our branding services help businesses develop a distinctive identity, effectively conveying their core values through strategic marketing and digital outreach.",
  },
];

const OurServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animation
  }, []);

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold mb-4 text-red-600">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Personalized solutions and services to boost your online business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-red-600 p-6 rounded-lg shadow-lg h-60 flex flex-col items-center justify-center transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`} // Delay for staggered animation
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-red-800 rounded-full animate-bounce">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white text-sm text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
