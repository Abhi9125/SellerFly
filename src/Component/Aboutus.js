// import React from "react";
// import Intro from "./Intro";

// const Aboutus = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="h-80 bg-cover bg-center relative"
//         style={{ backgroundImage: `url(/Rout_Banner/About-us.png)` }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <h1 className="text-white text-4xl font-bold">About Us</h1>
//         </div>
//       </div>

//       {/* About Us Introduction Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row items-center gap-8">
//             <div className="w-full md:w-1/2">
//               <img
//                 src="logo-main.png"
//                 alt="Team"
//                 className="rounded-lg shadow-lg w-full object-cover"
//               />
//             </div>
//             <div className="w-full md:w-1/2">
//               <h2 className="text-3xl font-bold text-gray-800 mb-6">
//                 Who We Are
//               </h2>
//               <p className="text-lg text-gray-600 leading-relaxed mb-4">
//                 SellerFly is a team of internationally certified E-Commerce &
//                 Digital Experts with a vision to grow your e-commerce business
//                 from 10X to 100X in a short time.
//               </p>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 Our mission is to provide top-notch services to help businesses
//                 thrive in the competitive digital marketplace.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-12">
//             Why Choose Us
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="p-6 bg-white rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold text-red-600 mb-4">100+</h3>
//               <p className="text-lg text-gray-600">Happy Clients</p>
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold text-red-600 mb-4">91%</h3>
//               <p className="text-lg text-gray-600">Client Retention</p>
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold text-red-600 mb-4">14+</h3>
//               <p className="text-lg text-gray-600">Years of Experience</p>
//             </div>
//           </div>
//         </div>
//         <Intro />
//       </section>
//     </div>
//   );
// };

// export default Aboutus;

// import React from "react";
// import Intro from "./Intro";

// const Aboutus = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="h-80 bg-cover bg-center relative"
//         style={{ backgroundImage: `url(/Rout_Banner/About-us.png)` }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
//           <h1 className="text-white text-5xl font-bold tracking-wide">
//             About Us
//           </h1>
//         </div>
//       </div>

//       {/* About Us Introduction Section */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="w-full md:w-1/2">
//               <img
//                 src="logo-main.png"
//                 alt="Our Team"
//                 className="rounded-lg shadow-md w-full object-cover transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//             <div className="w-full md:w-1/2">
//               <h2 className="text-4xl font-semibold text-gray-900 mb-6">
//                 Who We Are
//               </h2>
//               <p className="text-lg text-gray-700 leading-relaxed mb-4">
//                 SellerFly is a team of internationally certified E-Commerce &
//                 Digital Experts with a vision to grow your e-commerce business
//                 from 10X to 100X in a short time.
//               </p>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Our mission is to provide top-notch services to help businesses
//                 thrive in the competitive digital marketplace.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-semibold text-gray-900 mb-12">
//             Why Choose Us
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <h3 className="text-4xl font-bold text-red-600 mb-4">100+</h3>
//               <p className="text-lg text-gray-600">Happy Clients</p>
//             </div>
//             <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <h3 className="text-4xl font-bold text-red-600 mb-4">91%</h3>
//               <p className="text-lg text-gray-600">Client Retention</p>
//             </div>
//             <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <h3 className="text-4xl font-bold text-red-600 mb-4">14+</h3>
//               <p className="text-lg text-gray-600">Years of Experience</p>
//             </div>
//           </div>
//         </div>
//         <Intro />
//       </section>
//     </div>
//   );
// };

// export default Aboutus;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS animation styles

const AboutUs = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(/Rout_Banner/About-us.png)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1
            className="text-white text-5xl font-bold tracking-wide"
            data-aos="fade-up"
          >
            Welcome to SellerFly
          </h1>
        </div>
      </div>

      {/* Main Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-red-600 mb-6"
            data-aos="fade-up"
          >
            Innovate. Build. Grow.
          </h2>
          <p
            className="text-lg text-gray-700 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At SellerFly, we empower SMEs and brands to expand their online
            presence through comprehensive e-commerce services and tailored
            solutions.
          </p>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-white p-6 rounded-lg shadow-lg"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700">
                To enable brands and SMEs to achieve significant growth and
                success in the digital marketplace.
              </p>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-lg"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700">
                To deliver state-of-the-art e-commerce technologies and
                solutions that simplify and accelerate the online growth of
                businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-red-600 mb-12"
            data-aos="fade-up"
          >
            Why Choose SellerFly
          </h2>
          <p
            className="text-lg text-gray-700 leading-relaxed mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            When you partner with SellerFly, you gain a dedicated business ally,
            not just a service provider. Our team is passionate and committed to
            adding value to your business through years of experience.
          </p>
          <p
            className="text-lg text-gray-700 leading-relaxed mb-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            We pride ourselves on executing projects swiftly and efficiently,
            transforming your ideas into market-ready solutions with speed and
            precision.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-red-600 text-center mb-12"
            data-aos="fade-up"
          >
            About Us
          </h2>
          <p
            className="text-lg text-gray-700 leading-relaxed mb-12 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            SellerFly is an innovative e-commerce technology company focused on
            helping SMEs and brands establish and grow their online businesses.
            Founded in 2017, our leadership team comprises former employees from
            industry giants.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2" data-aos="fade-right">
              <img
                src="logo-main.png"
                alt="SellerFly Team"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2" data-aos="fade-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                With offices located in Bangalore, Thanjavur, and Tiruppur, we
                operate on the pillars of innovation, excellence,
                entrepreneurship, and creativity to drive your business forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-red-600 text-center mb-12"
            data-aos="fade-up"
          >
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="p-6 bg-white rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-bold text-black mb-2">
                E-Commerce Setup & Management
              </h3>
              <p className="text-gray-700">
                From setting up your online store to managing daily operations,
                we ensure your e-commerce platform runs smoothly.
              </p>
            </div>
            <div
              className="p-6 bg-white rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-bold text-black mb-2">
                Digital Marketing
              </h3>
              <p className="text-gray-700">
                Enhance your online visibility and reach your target audience
                with our expert digital marketing strategies.
              </p>
            </div>
            <div
              className="p-6 bg-white rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-bold text-black mb-2">
                Inventory & Logistics Solutions
              </h3>
              <p className="text-gray-700">
                Streamline your inventory management and logistics to maintain
                optimal stock levels and efficient delivery.
              </p>
            </div>
            <div
              className="p-6 bg-white rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <h3 className="text-xl font-bold text-black mb-2">
                SEO & Content Optimization
              </h3>
              <p className="text-gray-700">
                Improve your search engine rankings and engage customers with
                optimized content tailored to your brand.
              </p>
            </div>
            <div
              className="p-6 bg-white rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <h3 className="text-xl font-bold text-black mb-2">
                Brand Development
              </h3>
              <p className="text-gray-700">
                Build a strong and memorable brand identity with our creative
                design and branding services.
              </p>
            </div>
            <div
              className="p-6 bg-white rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <h3 className="text-xl font-bold text-black mb-2">
                Revenue Growth Strategies
              </h3>
              <p className="text-gray-700">
                Implement strategic plans to boost your sales and profitability
                across various e-commerce platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
