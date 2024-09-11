// import React from "react";

// const OurServices = () => {
//   return (
//     <section className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 py-12 rounded-lg">
//       <div className="container mx-auto p-8 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
//           Our Services
//         </h2>
//         <p className="text-center mb-10 text-lg">
//           Personalized solutions and services to boost your online business.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Service Cards */}
//           {[
//             {
//               title: "E-COMMERCE SELLER ACCOUNT MANAGEMENT",
//               description:
//                 "End to End ecommerce seller account management with a focus on sustained sales growth.",
//             },
//             {
//               title: "GLOBAL SELLER ACCOUNT MANAGEMENT",
//               description:
//                 " Optimize your global e-commerce presence. We manage your seller accounts for seamless international expansion and increased sales.",
//             },
//             {
//               title: "WEBSITE DESIGN & DEVELOPMENT",
//               description:
//                 " We create websites that are entirely tailored to ensure excellent performance, adaptability, and an optimal user experience.",
//             },
//             {
//               title: "DIGITAL MARKETING",
//               description:
//                 "We aim to connect with the appropriate audience, boost brand recognition, establish a strong brand identity, and drive conversions.",
//             },
//             {
//               title: "SHOPIFY DEVELOPMENT AND MAINTENANCE",
//               description:
//                 "Build your online store with expert Shopify development and maintenance. Seamless, secure, and tailored for success.",
//             },
//             {
//               title: "PRODUCT PHOTOSHOOT",
//               description:
//                 "We provide top-tier photography services for your products, which include model photoshoots to cater to your business growth.",
//             },
//             {
//               title: "TRADEMART CERTIFICATE (BRAND REGISTRATION)",
//               description:
//                 "We provide trademark & brand registration services for your brand.",
//             },
//             {
//               title: "LEAD GENERATION",
//               description:
//                 "We design a branding strategy to enhance your brand’s recognition and identity by proficiently conveying its fundamental values through social media and digital marketing initiatives.",
//             },
//             {
//               title: "BRANDING",
//               description:
//                 " A branding strategy aims to develop an organization’s brand awareness and identity by effectively communicating its core values through social media and digital marketing campaigns..",
//             },
//           ].map((service, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
//             >
//               <h3 className="font-semibold text-base mb-2">{service.title}</h3>
//               <p>{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurServices;

// import React from "react";

// const OurServices = () => {
//   return (
//     <section className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 py-12 rounded-lg">
//       <div>
//         <h3>OUR SERVICES</h3>

//         <div>
//           <div>
//             <img src={`${process.env.PUBLIC_URL}/OurServies.jpg`} alt="Logo" />
//             <h4>E-COMMERCE SELLER ACCOUNT MANAGEMENT</h4>
//           </div>
//           <div>
//             <img src={`${process.env.PUBLIC_URL}/OurServies.jpg`} alt="Logo" />
//             <h4>E-COMMERCE SELLER ACCOUNT MANAGEMENT</h4>
//           </div>
//           <div>
//             <img src={`${process.env.PUBLIC_URL}/OurServies.jpg`} alt="Logo" />
//             <h4>E-COMMERCE WEBSITE DESIGN & DEVELOPMENT</h4>
//           </div>
//           <div>
//             <img src={`${process.env.PUBLIC_URL}/OurServies.jpg`} alt="Logo" />
//             <h4>E-COMMERCE PRODUCTS PHOTOSHOOT</h4>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurServices;

// import React from "react";

// const OurServices = () => {
//   return (
//     <section className="bg-white text-gray-800 py-12 rounded-lg">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h3 className="text-2xl sm:text-3xl font-bold text-red-600 uppercase">
//             Our Services
//           </h3>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Service 1 */}
//           <div className="text-center p-6 bg-black shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
//             <img
//               src={`${process.env.PUBLIC_URL}/OurServies.jpg`}
//               alt="E-COMMERCE SELLER ACCOUNT MANAGEMENT"
//               className="w-full h-40 object-cover mb-4 rounded-lg"
//             />
//             <h4 className="text-lg font-bold text-white">
//               E-COMMERCE SELLER ACCOUNT MANAGEMENT
//             </h4>
//           </div>

//           {/* Service 2 */}
//           <div className="text-center p-6 bg-black shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
//             <img
//               src={`${process.env.PUBLIC_URL}/OurServies.jpg`}
//               alt="E-COMMERCE WEBSITE DESIGN & DEVELOPMENT"
//               className="w-full h-40 object-cover mb-4 rounded-lg"
//             />
//             <h4 className="text-lg font-bold text-white">
//               E-COMMERCE WEBSITE DESIGN & DEVELOPMENT
//             </h4>
//           </div>

//           {/* Service 3 */}
//           <div className="text-center p-6 bg-black shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
//             <img
//               src={`${process.env.PUBLIC_URL}/OurServies.jpg`}
//               alt="E-COMMERCE PRODUCTS PHOTOSHOOT"
//               className="w-full h-40 object-cover mb-4 rounded-lg"
//             />
//             <h4 className="text-lg font-bold text-white">
//               E-COMMERCE PRODUCTS PHOTOSHOOT
//             </h4>
//           </div>

//           {/* Service 4 */}
//           <div className="text-center p-6 bg-black shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
//             <img
//               src={`${process.env.PUBLIC_URL}/OurServies.jpg`}
//               alt="E-COMMERCE SEO & MARKETING"
//               className="w-full h-40 object-cover mb-4 rounded-lg"
//             />
//             <h4 className="text-lg font-bold text-white">
//               E-COMMERCE SEO & MARKETING
//             </h4>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurServices;
// import React from "react";
// import StrategySection from "./StrategySection";

// const OurServices = () => {
//   return (
//     <section className="bg-white text-gray-800 py-12 rounded-lg">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h3 className="text-2xl sm:text-3xl font-bold text-red-600 uppercase">
//             Our Services
//           </h3>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Service 1 */}
//           <div className="text-center p-6 bg-gradient-to-r from-red-500 to-red-700 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
//             <img
//               src={`${process.env.PUBLIC_URL}/OurServies.jpg`}
//               alt="E-COMMERCE SELLER ACCOUNT MANAGEMENT"
//               className="w-full h-40 object-cover mb-4 rounded-lg"
//             />
//             <h4 className="text-lg font-bold text-white">
//               E-COMMERCE SELLER ACCOUNT MANAGEMENT
//             </h4>
//           </div>

//           {/* Service 2 */}
//           <div className="text-center p-6 bg-gradient-to-r from-gray-600 to-gray-800 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
//             <img
//               src={`${process.env.PUBLIC_URL}/OurServies.jpg`}
//               alt="E-COMMERCE WEBSITE DESIGN & DEVELOPMENT"
//               className="w-full h-40 object-cover mb-4 rounded-lg"
//             />
//             <h4 className="text-lg font-bold text-white">
//               E-COMMERCE WEBSITE DESIGN & DEVELOPMENT
//             </h4>
//           </div>

//           {/* Service 3 */}
//           <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
//             <img
//               src={`${process.env.PUBLIC_URL}/OurServies.jpg`}
//               alt="E-COMMERCE PRODUCTS PHOTOSHOOT"
//               className="w-full h-40 object-cover mb-4 rounded-lg"
//             />
//             <h4 className="text-lg font-bold text-white">
//               E-COMMERCE PRODUCTS PHOTOSHOOT
//             </h4>
//           </div>

//           {/* Service 4 */}
//           <div className="text-center p-6 bg-gradient-to-r from-purple-500 to-purple-700 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
//             <img
//               src={`${process.env.PUBLIC_URL}/OurServies.jpg`}
//               alt="E-COMMERCE SEO & MARKETING"
//               className="w-full h-40 object-cover mb-4 rounded-lg"
//             />
//             <h4 className="text-lg font-bold text-white">
//               E-COMMERCE SEO & MARKETING
//             </h4>
//           </div>
//         </div>
//         <StrategySection />
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
//     icon: <FaShoppingCart className="text-3xl text-red-600" />,
//     title: "E-Commerce Seller Account Management",
//     description:
//       "Comprehensive end-to-end management of e-commerce seller accounts, dedicated to driving consistent sales growth.",
//   },
//   {
//     icon: <FaGlobe className="text-3xl text-red-600" />,
//     title: "Global Seller Account Management",
//     description:
//       "Enhance your global e-commerce operations with seamless international seller account management for better sales and business expansion.",
//   },
//   {
//     icon: <FaDesktop className="text-3xl text-red-600" />,
//     title: "Website Design & Development",
//     description:
//       "We develop fully customized websites focused on delivering high performance, adaptability, and exceptional user experience.",
//   },
//   {
//     icon: <FaBullhorn className="text-3xl text-red-600" />,
//     title: "Digital Marketing",
//     description:
//       "Our goal is to engage the right audience, enhance brand recognition, establish a strong identity, and boost conversion rates.",
//   },
//   {
//     icon: <FaCog className="text-3xl text-red-600" />,
//     title: "Shopify Development and Maintenance",
//     description:
//       "Create and maintain your online store with expert Shopify development services, ensuring a smooth, secure, and customized experience.",
//   },
//   {
//     icon: <FaCamera className="text-3xl text-red-600" />,
//     title: "Product Photoshoot",
//     description:
//       "We offer professional photography services tailored to your products, including model photoshoots to support your business growth.",
//   },
//   {
//     icon: <FaCloud className="text-3xl text-red-600" />,
//     title: "Cloud Hosting",
//     description:
//       "Our reliable hosting services ensure that your website remains secure, fast, and optimized for peak performance. Your online presence is our top priority.",
//   },
//   {
//     icon: <FaLightbulb className="text-3xl text-red-600" />,
//     title: "Lead Generation",
//     description:
//       "We craft targeted strategies to elevate your brand’s visibility and identity through strategic digital marketing and social media efforts.",
//   },
//   {
//     icon: <FaTag className="text-3xl text-red-600" />,
//     title: "Branding",
//     description:
//       "Our branding services help businesses develop a distinctive identity, effectively conveying their core values through strategic marketing and digital outreach.",
//   },
// ];

// const Services = () => {
//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="container mx-auto px-4">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
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
//               className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-gray-100"
//             >
//               <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gray-200 rounded-full">
//                 {service.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

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
//     icon: <FaShoppingCart className="text-3xl text-red-600" />,
//     title: "E-Commerce Seller Account Management",
//     description:
//       "Comprehensive end-to-end management of e-commerce seller accounts, dedicated to driving consistent sales growth.",
//   },
//   {
//     icon: <FaGlobe className="text-3xl text-red-600" />,
//     title: "Global Seller Account Management",
//     description:
//       "Enhance your global e-commerce operations with seamless international seller account management for better sales and business expansion.",
//   },
//   {
//     icon: <FaDesktop className="text-3xl text-red-600" />,
//     title: "Website Design & Development",
//     description:
//       "We develop fully customized websites focused on delivering high performance, adaptability, and exceptional user experience.",
//   },
//   {
//     icon: <FaBullhorn className="text-3xl text-red-600" />,
//     title: "Digital Marketing",
//     description:
//       "Our goal is to engage the right audience, enhance brand recognition, establish a strong identity, and boost conversion rates.",
//   },
//   {
//     icon: <FaCog className="text-3xl text-red-600" />,
//     title: "Shopify Development and Maintenance",
//     description:
//       "Create and maintain your online store with expert Shopify development services, ensuring a smooth, secure, and customized experience.",
//   },
//   {
//     icon: <FaCamera className="text-3xl text-red-600" />,
//     title: "Product Photoshoot",
//     description:
//       "We offer professional photography services tailored to your products, including model photoshoots to support your business growth.",
//   },
//   {
//     icon: <FaCloud className="text-3xl text-red-600" />,
//     title: "Cloud Hosting",
//     description:
//       "Our reliable hosting services ensure that your website remains secure, fast, and optimized for peak performance. Your online presence is our top priority.",
//   },
//   {
//     icon: <FaLightbulb className="text-3xl text-red-600" />,
//     title: "Lead Generation",
//     description:
//       "We craft targeted strategies to elevate your brand’s visibility and identity through strategic digital marketing and social media efforts.",
//   },
//   {
//     icon: <FaTag className="text-3xl text-red-600" />,
//     title: "Branding",
//     description:
//       "Our branding services help businesses develop a distinctive identity, effectively conveying their core values through strategic marketing and digital outreach.",
//   },
// ];

// const Services = () => {
//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="container mx-auto px-4">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
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
//               className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-gray-100 h-auto"
//             >
//               <div className="flex items-center justify-center w-12 h-12 mb-3 bg-gray-200 rounded-full">
//                 {service.icon}
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 text-sm">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from "react";
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
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 text-red-600">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Personalized solutions and services to boost your online business.
          </p>
        </div>

        {/* Services Grid */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-red-600 p-6 rounded-lg shadow-lg h-64 flex flex-col items-center justify-center transition-shadow duration-300 hover:bg-red-700"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-red-800 rounded-full">
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
