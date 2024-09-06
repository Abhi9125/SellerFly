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
import React from "react";

const OurServices = () => {
  return (
    <section className="bg-white text-gray-800 py-12 rounded-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-red-600 uppercase">
            Our Services
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="text-center p-6 bg-gradient-to-r from-red-500 to-red-700 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img
              src={`${process.env.PUBLIC_URL}/OurServies.jpg`}
              alt="E-COMMERCE SELLER ACCOUNT MANAGEMENT"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h4 className="text-lg font-bold text-white">
              E-COMMERCE SELLER ACCOUNT MANAGEMENT
            </h4>
          </div>

          {/* Service 2 */}
          <div className="text-center p-6 bg-gradient-to-r from-gray-600 to-gray-800 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img
              src={`${process.env.PUBLIC_URL}/OurServies.jpg`}
              alt="E-COMMERCE WEBSITE DESIGN & DEVELOPMENT"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h4 className="text-lg font-bold text-white">
              E-COMMERCE WEBSITE DESIGN & DEVELOPMENT
            </h4>
          </div>

          {/* Service 3 */}
          <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img
              src={`${process.env.PUBLIC_URL}/OurServies.jpg`}
              alt="E-COMMERCE PRODUCTS PHOTOSHOOT"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h4 className="text-lg font-bold text-white">
              E-COMMERCE PRODUCTS PHOTOSHOOT
            </h4>
          </div>

          {/* Service 4 */}
          <div className="text-center p-6 bg-gradient-to-r from-purple-500 to-purple-700 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img
              src={`${process.env.PUBLIC_URL}/OurServies.jpg`}
              alt="E-COMMERCE SEO & MARKETING"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h4 className="text-lg font-bold text-white">
              E-COMMERCE SEO & MARKETING
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
