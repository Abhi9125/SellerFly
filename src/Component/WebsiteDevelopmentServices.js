// // import React, { useEffect } from "react";
// // import AOS from "aos";
// // import "aos/dist/aos.css";

// // const WebsiteDevelopmentServices = () => {
// //   useEffect(() => {
// //     AOS.init({ duration: 1000, once: true });
// //   }, []);

// //   return (
// //     <div>
// //       {/* Hero Section */}
// //       <div
// //         className="h-80 bg-cover bg-center relative"
// //         style={{ backgroundImage: `url(/Rout_Banner/services.png)` }}
// //       >
// //         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// //           <h1 className="text-white text-4xl font-bold">
// //             Website Development Services
// //           </h1>
// //         </div>
// //       </div>

// //       {/* Why Your Business Needs a Professional Website Section */}
// //       <section className="py-16 bg-white" data-aos="fade-up">
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //           <h2 className="text-3xl font-bold text-gray-800 mb-6">
// //             Why Your Business Needs a Professional Website
// //           </h2>
// //           <p className="text-lg text-gray-700 leading-relaxed mb-4">
// //             In today's digital age, a website serves as the online face of your
// //             business. Customers increasingly expect every business to have a
// //             robust online presence, often researching brands online before
// //             making a purchase or visiting a physical store. A well-crafted
// //             website not only enhances your credibility but also acts as a 24/7
// //             sales agent, driving growth and expanding your reach.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Features Section */}
// //       <section className="py-16 bg-gray-100" data-aos="fade-up">
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //           <h2 className="text-3xl font-bold text-red-600 mb-6">Our Features</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             <div className="p-6 bg-white rounded-lg shadow-lg">
// //               <h3 className="text-2xl font-bold mb-4">
// //                 High-Performing, Custom-Designed Websites
// //               </h3>
// //               <p className="text-gray-700 leading-relaxed">
// //                 We create websites that are visually appealing and
// //                 high-performing, adhering to the latest standards in design,
// //                 development, and SEO.
// //               </p>
// //             </div>
// //             <div className="p-6 bg-white rounded-lg shadow-lg">
// //               <h3 className="text-2xl font-bold mb-4">
// //                 User Experience & Quality
// //               </h3>
// //               <p className="text-gray-700 leading-relaxed">
// //                 We prioritize seamless user experiences and top-notch quality
// //                 while offering cost-effective solutions.
// //               </p>
// //             </div>
// //             <div className="p-6 bg-white rounded-lg shadow-lg">
// //               <h3 className="text-2xl font-bold mb-4">24/7 Sales Agent</h3>
// //               <p className="text-gray-700 leading-relaxed">
// //                 Your website works around the clock, pitching your products and
// //                 services to potential customers anytime, anywhere.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Key Features Section */}
// //       <section className="py-16 bg-white" data-aos="fade-up">
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //           <h2 className="text-3xl font-bold text-red-600 mb-6">
// //             Key Website Features
// //           </h2>
// //           <ul className="list-disc pl-5 text-lg text-gray-700 space-y-4">
// //             <li>
// //               Mobile Compatibility: Fully responsive websites across all
// //               devices.
// //             </li>
// //             <li>
// //               Faster Load Times: Optimized for speed and user satisfaction.
// //             </li>
// //             <li>
// //               Browser Consistency: Looks and functions flawlessly on all
// //               browsers.
// //             </li>
// //             <li>Exceptional Design: Engaging design crafted with purpose.</li>
// //             <li>
// //               Usable Forms: Efficiently collect data from users with
// //               well-designed forms.
// //             </li>
// //             <li>
// //               Competitive Differentiation: Highlight your unique selling points
// //               and stand out in the market.
// //             </li>
// //           </ul>
// //         </div>
// //       </section>

// //       {/* Services Section */}
// //       <section className="py-16 bg-gray-100" data-aos="fade-up">
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //           <h2 className="text-3xl font-bold text-red-600 mb-6">Our Services</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             <div className="p-6 bg-white rounded-lg shadow-lg">
// //               <h3 className="text-2xl font-bold mb-4">
// //                 E-Commerce Seller Account Management
// //               </h3>
// //               <p className="text-gray-700">
// //                 Drive sustained growth with our end-to-end management of your
// //                 e-commerce seller accounts across major platforms.
// //               </p>
// //             </div>
// //             <div className="p-6 bg-white rounded-lg shadow-lg">
// //               <h3 className="text-2xl font-bold mb-4">
// //                 Website Design & Development
// //               </h3>
// //               <p className="text-gray-700">
// //                 We build custom websites with reliable performance, scalability,
// //                 and exceptional user experience.
// //               </p>
// //             </div>
// //             <div className="p-6 bg-white rounded-lg shadow-lg">
// //               <h3 className="text-2xl font-bold mb-4">
// //                 Search Engine Optimization (SEO)
// //               </h3>
// //               <p className="text-gray-700">
// //                 Improve your search engine rankings and reach more potential
// //                 customers with our SEO services.
// //               </p>
// //             </div>
// //             <div className="p-6 bg-white rounded-lg shadow-lg">
// //               <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
// //               <p className="text-gray-700">
// //                 Engage your target audience and drive conversions with our
// //                 comprehensive digital marketing services.
// //               </p>
// //             </div>
// //             <div className="p-6 bg-white rounded-lg shadow-lg">
// //               <h3 className="text-2xl font-bold mb-4">
// //                 Pay-Per-Click (PPC) Advertising
// //               </h3>
// //               <p className="text-gray-700">
// //                 Reach your ideal customers with precision using our expertly
// //                 managed PPC campaigns.
// //               </p>
// //             </div>
// //             <div className="p-6 bg-white rounded-lg shadow-lg">
// //               <h3 className="text-2xl font-bold mb-4">
// //                 Social Media Marketing
// //               </h3>
// //               <p className="text-gray-700">
// //                 Retain existing customers and attract new ones with our
// //                 strategic social media marketing solutions.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Why Choose SellerFly Section */}
// //       <section className="py-16 bg-white" data-aos="fade-up">
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //           <h2 className="text-3xl font-bold text-red-600 mb-8">
// //             Why Choose SellerFly?
// //           </h2>
// //           <p className="text-lg text-gray-700 mb-12">
// //             At SellerFly, we are committed to providing tailored solutions to
// //             help you achieve your business goals.
// //           </p>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
// //               <h3 className="text-2xl font-bold mb-4">Experienced Team</h3>
// //               <p className="text-gray-700">
// //                 Our team comprises industry veterans with years of e-commerce
// //                 and digital marketing expertise.
// //               </p>
// //             </div>
// //             <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
// //               <h3 className="text-2xl font-bold mb-4">Customized Solutions</h3>
// //               <p className="text-gray-700">
// //                 We understand every business is unique. Our services are
// //                 tailored to meet your specific needs.
// //               </p>
// //             </div>
// //             <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
// //               <h3 className="text-2xl font-bold mb-4">Proven Track Record</h3>
// //               <p className="text-gray-700">
// //                 With a history of successful projects, our strategies drive
// //                 growth and revenue consistently.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Call to Action */}
// //       <section
// //         className="py-16 bg-red-600 text-white text-center"
// //         data-aos="fade-up"
// //       >
// //         <div className="container mx-auto px-4">
// //           <h2 className="text-2xl font-bold mb-4">
// //             Ready to Transform Your Online Presence?
// //           </h2>
// //           <p className="text-lg mb-6">
// //             Partner with SellerFly to take your business to new heights.
// //           </p>
// //           <button className="bg-white text-red-600 font-bold py-2 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
// //             Contact Us Today
// //           </button>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default WebsiteDevelopmentServices;

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const WebsiteDevelopmentServices = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="h-80 bg-cover bg-center relative"
//         style={{ backgroundImage: `url(/Rout_Banner/services.png)` }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <h1 className="text-white text-4xl font-bold">
//             Website Development Services
//           </h1>
//         </div>
//       </div>

//       {/* Why Your Business Needs a Professional Website Section */}
//       <section className="py-16 bg-white" data-aos="fade-up">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-red-600 mb-6">
//             Why Your Business Needs a Professional Website
//           </h2>
//           <p className="text-lg text-gray-700 leading-relaxed mb-4">
//             In today's digital age, a website serves as the online face of your
//             business. Customers increasingly expect every business to have a
//             robust online presence, often researching brands online before
//             making a purchase or visiting a physical store. A well-crafted
//             website not only enhances your credibility but also acts as a 24/7
//             sales agent, driving growth and expanding your reach.
//           </p>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-gray-100" data-aos="fade-up">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-red-600 mb-6">Our Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-2xl font-bold mb-4">
//                 High-Performing, Custom-Designed Websites
//               </h3>
//               <p className="text-gray-700 leading-relaxed">
//                 We create websites that are visually appealing and
//                 high-performing, adhering to the latest standards in design,
//                 development, and SEO.
//               </p>
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-2xl font-bold mb-4">
//                 User Experience & Quality
//               </h3>
//               <p className="text-gray-700 leading-relaxed">
//                 We prioritize seamless user experiences and top-notch quality
//                 while offering cost-effective solutions.
//               </p>
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-2xl font-bold mb-4">24/7 Sales Agent</h3>
//               <p className="text-gray-700 leading-relaxed">
//                 Your website works around the clock, pitching your products and
//                 services to potential customers anytime, anywhere.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Key Features Section */}
//       <section className="py-16 bg-white" data-aos="fade-up">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-red-600 mb-6">
//             Key Website Features
//           </h2>
//           <ul className="list-disc pl-5 text-lg text-gray-700 space-y-4">
//             <li>
//               Mobile Compatibility: Fully responsive websites across all
//               devices.
//             </li>
//             <li>
//               Faster Load Times: Optimized for speed and user satisfaction.
//             </li>
//             <li>
//               Browser Consistency: Looks and functions flawlessly on all
//               browsers.
//             </li>
//             <li>Exceptional Design: Engaging design crafted with purpose.</li>
//             <li>
//               Usable Forms: Efficiently collect data from users with
//               well-designed forms.
//             </li>
//             <li>
//               Competitive Differentiation: Highlight your unique selling points
//               and stand out in the market.
//             </li>
//           </ul>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-16 bg-gray-100" data-aos="fade-up">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-red-600 mb-6">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-2xl font-bold mb-4">
//                 E-Commerce Seller Account Management
//               </h3>
//               <p className="text-gray-700">
//                 Drive sustained growth with our end-to-end management of your
//                 e-commerce seller accounts across major platforms.
//               </p>
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-2xl font-bold mb-4">
//                 Website Design & Development
//               </h3>
//               <p className="text-gray-700">
//                 We build custom websites with reliable performance, scalability,
//                 and exceptional user experience.
//               </p>
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-2xl font-bold mb-4">
//                 Search Engine Optimization (SEO)
//               </h3>
//               <p className="text-gray-700">
//                 Improve your search engine rankings and reach more potential
//                 customers with our SEO services.
//               </p>
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
//               <p className="text-gray-700">
//                 Engage your target audience and drive conversions with our
//                 comprehensive digital marketing services.
//               </p>
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-2xl font-bold mb-4">
//                 Pay-Per-Click (PPC) Advertising
//               </h3>
//               <p className="text-gray-700">
//                 Reach your ideal customers with precision using our expertly
//                 managed PPC campaigns.
//               </p>
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-2xl font-bold mb-4">
//                 Social Media Marketing
//               </h3>
//               <p className="text-gray-700">
//                 Retain existing customers and attract new ones with our
//                 strategic social media marketing solutions.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose SellerFly Section */}
//       <section className="py-16 bg-white" data-aos="fade-up">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-red-600 mb-8">
//             Why Choose SellerFly?
//           </h2>
//           <p className="text-lg text-gray-700 mb-12">
//             At SellerFly, we are committed to providing tailored solutions to
//             help you achieve your business goals.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold mb-4">Experienced Team</h3>
//               <p className="text-gray-700">
//                 Our team comprises industry veterans with years of e-commerce
//                 and digital marketing expertise.
//               </p>
//             </div>
//             <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold mb-4">Customized Solutions</h3>
//               <p className="text-gray-700">
//                 We understand every business is unique. Our services are
//                 tailored to meet your specific needs.
//               </p>
//             </div>
//             <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold mb-4">Proven Track Record</h3>
//               <p className="text-gray-700">
//                 With a history of successful projects, our strategies drive
//                 growth and revenue consistently.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section
//         className="py-16 bg-red-600 text-white text-center"
//         data-aos="fade-up"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl font-bold mb-4">
//             Ready to Transform Your Online Presence?
//           </h2>
//           <p className="text-lg mb-6">
//             Partner with SellerFly to take your business to new heights.
//           </p>
//           <button className="bg-white text-red-600 font-bold py-2 px-8 rounded-lg hover:bg-gray-100 hover:text-red-700 transition duration-300">
//             Contact Us Today
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WebsiteDevelopmentServices;

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ModalComponent from "./ModalComponent";

const WebsiteDevelopmentServices = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(/Rout_Banner/services.png)` }}
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
      </div>

      {/* Why Your Business Needs a Professional Website Section */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-red-600 mb-6"
            data-aos="fade-right"
          >
            Why Your Business Needs a Professional Website
          </h2>
          <p
            className="text-lg text-gray-700 leading-relaxed mb-4"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            In today's digital age, a website serves as the online face of your
            business. Customers increasingly expect every business to have a
            robust online presence, often researching brands online before
            making a purchase or visiting a physical store. A well-crafted
            website not only enhances your credibility but also acts as a 24/7
            sales agent, driving growth and expanding your reach.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100" data-aos="fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-red-600 mb-6"
            data-aos="flip-left"
          >
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            className="text-3xl font-bold text-red-600 mb-6"
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-red-600 mb-6"
            data-aos="flip-up"
          >
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
