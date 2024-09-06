// // import React from "react";

// // const StrategySection = () => {
// //   return (
// //     <div className="bg-white p-6 rounded-lg shadow-lg">
// //       <h2 className="text-3xl font-bold text-center mb-4">OUR STRATEGY</h2>
// //       <p className="text-xl text-center mb-8">
// //         Boost Your Sales With Sellerfly
// //       </p>
// //       <div className="flex flex-col md:flex-row justify-around items-start mb-8">
// //         <div className="flex items-center mb-6 md:mb-0">
// //           <div className="flex items-center justify-center bg-blue-600 text-white font-bold rounded-full w-16 h-16 mr-4">
// //             1
// //           </div>
// //           <div>
// //             <h3 className="text-lg font-semibold mb-2">CREATE A SALES PLAN</h3>
// //             <ul className="list-disc ml-4">
// //               <li>Review Products</li>
// //               <li>Market analysis</li>
// //               <li>Leverage Opportunities & Set Goals</li>
// //               <li>Develop a customized action plan</li>
// //             </ul>
// //           </div>
// //         </div>
// //         <div className="flex items-center mb-6 md:mb-0">
// //           <div className="flex items-center justify-center bg-blue-600 text-white font-bold rounded-full w-16 h-16 mr-4">
// //             2
// //           </div>
// //           <div>
// //             <h3 className="text-lg font-semibold mb-2">
// //               DESIGN A MARKETING STRATEGY
// //             </h3>
// //             <ul className="list-disc ml-4">
// //               <li>Create a paid advertising strategy</li>
// //               <li>Optimize listings with a keyword strategy</li>
// //               <li>Improve high ROI ads</li>
// //             </ul>
// //           </div>
// //         </div>
// //         <div className="flex items-center">
// //           <div className="flex items-center justify-center bg-blue-600 text-white font-bold rounded-full w-16 h-16 mr-4">
// //             3
// //           </div>
// //           <div>
// //             <h3 className="text-lg font-semibold mb-2">
// //               EXPAND YOUR MARKETPLACE
// //             </h3>
// //             <ul className="list-disc ml-4">
// //               <li>Evaluate New Marketplaces</li>
// //               <li>Organize products' exposure</li>
// //               <li>Get customer reviews</li>
// //               <li>Optimize pricing strategies</li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="text-center">
// //         <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
// //           BOOK NOW
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StrategySection;

// // import React from "react";

// // const StrategySection = () => {
// //   return (
// //     <section className="bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 p-8 rounded-xl shadow-2xl">
// //       <h2 className="text-4xl font-extrabold text-center mb-6 text-purple-800">
// //         OUR STRATEGY
// //       </h2>
// //       <p className="text-xl text-center mb-10 font-medium text-purple-700">
// //         Boost Your Sales With Sellerfly
// //       </p>
// //       <div className="flex flex-col md:flex-row justify-around items-start mb-12">
// //         {/* Strategy Steps */}
// //         {[
// //           {
// //             number: "1",
// //             title: "CREATE A SALES PLAN",
// //             points: [
// //               "Review Products",
// //               "Market analysis",
// //               "Leverage Opportunities & Set Goals",
// //               "Develop a customized action plan",
// //             ],
// //           },
// //           {
// //             number: "1",
// //             title: "CREATE A SALES PLAN",
// //             points: [
// //               "Review Products",
// //               "Market analysis",
// //               "Leverage Opportunities & Set Goals",
// //               "Develop a customized action plan",
// //             ],
// //           },
// //           {
// //             number: "1",
// //             title: "CREATE A SALES PLAN",
// //             points: [
// //               "Review Products",
// //               "Market analysis",
// //               "Leverage Opportunities & Set Goals",
// //               "Develop a customized action plan",
// //             ],
// //           },
// //           // ... other strategy steps
// //         ].map((step, index) => (
// //           <div key={index} className="flex items-center mb-6 md:mb-0">
// //             <div className="flex items-center justify-center bg-purple-600 text-white font-bold rounded-full w-16 h-16 mr-4">
// //               {step.number}
// //             </div>
// //             <div>
// //               <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
// //               <ul className="list-disc ml-4 text-purple-700">
// //                 {step.points.map((point, index) => (
// //                   <li key={index}>{point}</li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="text-center">
// //         <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
// //           BOOK NOW
// //         </button>
// //       </div>
// //     </section>
// //   );
// // };

// // export default StrategySection;

// import React from "react";

// const StrategySection = () => {
//   return (
//     <section className="bg-gradient-to-r from-gray-100 to-gray-300 text-gray-800 py-12 px-8 rounded-xl shadow-2xl">
//       <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-800">
//         OUR STRATEGY
//       </h2>
//       <p className="text-xl text-center mb-10 font-medium text-gray-700">
//         Boost Your Sales With Sellerfly
//       </p>
//       <div className="flex flex-col md:flex-row justify-around items-start mb-12">
//         {/* Strategy Steps */}
//         {[
//           {
//             number: "1",
//             title: "CREATE A SALES PLAN",
//             points: [
//               "Review Products",
//               "Market analysis",
//               "Leverage Opportunities & Set Goals",
//               "Develop a customized action plan",
//             ],
//           },
//           {
//             number: "2",
//             title: "DESIGN A MARKETING STRATEGY",
//             points: [
//               "Create a paid advertising strategy",
//               "Optimize listings with a keyword strategy",
//               "Improve high ROI ads",
//             ],
//           },
//           {
//             number: "3",
//             title: "EXPAND YOUR MARKETPLACE",
//             points: [
//               "Evaluate New Marketplaces",
//               "Organize products' exposure",
//               "Get customer reviews",
//               "Optimize pricing strategies",
//             ],
//           },
//           // ... other strategy steps
//         ].map((step, index) => (
//           <div key={index} className="flex items-center mb-6 md:mb-0">
//             <div className="flex items-center justify-center bg-blue-600 text-white font-bold rounded-full w-16 h-16 mr-4">
//               {step.number}
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
//               <ul className="list-disc ml-4 text-gray-700">
//                 {step.points.map((point, index) => (
//                   <li key={index}>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="text-center">
//         <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
//           BOOK NOW
//         </button>
//       </div>
//     </section>
//   );
// };

// export default StrategySection;

// import React from "react";

// const StrategySection = () => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold text-center mb-4">OUR STRATEGY</h2>
//       <p className="text-xl text-center mb-8">
//         Boost Your Sales With Sellerfly
//       </p>
//       <div className="flex flex-col md:flex-row justify-around items-start mb-8">
//         <div className="flex items-center mb-6 md:mb-0">
//           <div className="flex items-center justify-center bg-blue-600 text-white font-bold rounded-full w-16 h-16 mr-4">
//             1
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-2">CREATE A SALES PLAN</h3>
//             <ul className="list-disc ml-4">
//               <li>Review Products</li>
//               <li>Market analysis</li>
//               <li>Leverage Opportunities & Set Goals</li>
//               <li>Develop a customized action plan</li>
//             </ul>
//           </div>
//         </div>
//         <div className="flex items-center mb-6 md:mb-0">
//           <div className="flex items-center justify-center bg-blue-600 text-white font-bold rounded-full w-16 h-16 mr-4">
//             2
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-2">
//               DESIGN A MARKETING STRATEGY
//             </h3>
//             <ul className="list-disc ml-4">
//               <li>Create a paid advertising strategy</li>
//               <li>Optimize listings with a keyword strategy</li>
//               <li>Improve high ROI ads</li>
//             </ul>
//           </div>
//         </div>
//         <div className="flex items-center">
//           <div className="flex items-center justify-center bg-blue-600 text-white font-bold rounded-full w-16 h-16 mr-4">
//             3
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-2">
//               EXPAND YOUR MARKETPLACE
//             </h3>
//             <ul className="list-disc ml-4">
//               <li>Evaluate New Marketplaces</li>
//               <li>Organize products' exposure</li>
//               <li>Get customer reviews</li>
//               <li>Optimize pricing strategies</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="text-center">
//         <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
//           BOOK NOW
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StrategySection;

// import React from "react";

// const StrategySection = () => {
//   return (
//     <section className="bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 p-8 rounded-xl shadow-2xl">
//       <h2 className="text-4xl font-extrabold text-center mb-6 text-purple-800">
//         OUR STRATEGY
//       </h2>
//       <p className="text-xl text-center mb-10 font-medium text-purple-700">
//         Boost Your Sales With Sellerfly
//       </p>
//       <div className="flex flex-col md:flex-row justify-around items-start mb-12">
//         {/* Strategy Steps */}
//         {[
//           {
//             number: "1",
//             title: "CREATE A SALES PLAN",
//             points: [
//               "Review Products",
//               "Market analysis",
//               "Leverage Opportunities & Set Goals",
//               "Develop a customized action plan",
//             ],
//           },
//           {
//             number: "1",
//             title: "CREATE A SALES PLAN",
//             points: [
//               "Review Products",
//               "Market analysis",
//               "Leverage Opportunities & Set Goals",
//               "Develop a customized action plan",
//             ],
//           },
//           {
//             number: "1",
//             title: "CREATE A SALES PLAN",
//             points: [
//               "Review Products",
//               "Market analysis",
//               "Leverage Opportunities & Set Goals",
//               "Develop a customized action plan",
//             ],
//           },
//           // ... other strategy steps
//         ].map((step, index) => (
//           <div key={index} className="flex items-center mb-6 md:mb-0">
//             <div className="flex items-center justify-center bg-purple-600 text-white font-bold rounded-full w-16 h-16 mr-4">
//               {step.number}
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
//               <ul className="list-disc ml-4 text-purple-700">
//                 {step.points.map((point, index) => (
//                   <li key={index}>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="text-center">
//         <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
//           BOOK NOW
//         </button>
//       </div>
//     </section>
//   );
// };

// export default StrategySection;

import React from "react";

const StrategySection = () => {
  const planA = [
    "Listing on All Major E-Commerce Platforms (12+ Platforms)",
    "Catalogue Creation",
    "Brand Store Creation",
    "A+ Content Creation",
    "Account Management",
    "Account Optimization for Better Performance",
    "Sales Strategy Development",
    "Advertising Campaign Management",
  ];

  const planB = [
    "Custom Design: Tailored website design reflecting the brand’s identity",
    "Responsive Layout: Ensuring the website functions well on all devices.",
    "Product Listing Setup",
    "Payment Gateway Integration",
    "SEO Optimization",
    "Content Management System (CMS)",
    "Security Features",
  ];

  const planC = [
    "High-Resolution Images",
    "Styled Shots",
    "White Background Shots",
    "Editing and Retouching",
  ];

  const planD = [
    "Professional Model Hire: Booking a model that fits the brand and product requirements.",
    "High-Resolution Images: Quality photos suitable for online listings and marketing.",
    "Styled Shots: Images showcasing the product being used or worn by the model.",
  ];

  return (
    <section className="bg-gradient-to-r from-white to-gray-100 text-gray-800 py-12 px-8 rounded-xl shadow-2xl">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Plan A */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-red-600 mb-2">
            E-COMMERCE SELLER ACCOUNT MANAGEMENT & GROWTH
          </h3>
          <h5 className="text-lg font-semibold text-black mb-4">
            WHAT’S INCLUDED?
          </h5>
          <ul className="list-disc list-inside space-y-2">
            {planA.map((value, index) => (
              <li key={index} className="text-gray-700">
                {value}
              </li>
            ))}
          </ul>
        </div>

        {/* Plan B */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-red-600 mb-2">
            E-COMMERCE WEBSITE DESIGN & DEVELOPMENT
          </h3>
          <h5 className="text-lg font-semibold text-black mb-4">
            WHAT’S INCLUDED?
          </h5>
          <ul className="list-disc list-inside space-y-2">
            {planB.map((value, index) => (
              <li key={index} className="text-gray-700">
                {value}
              </li>
            ))}
          </ul>
        </div>

        {/* Plan C */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-red-600 mb-2">
            E-COMMERCE PRODUCT PHOTOSHOOT
          </h3>
          <h5 className="text-lg font-semibold text-black mb-4">
            WHAT’S INCLUDED?
          </h5>
          <ul className="list-disc list-inside space-y-2">
            {planC.map((value, index) => (
              <li key={index} className="text-gray-700">
                {value}
              </li>
            ))}
          </ul>
        </div>

        {/* Plan D */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-red-600 mb-2">
            E-COMMERCE PRODUCT PHOTOSHOOT WITH INTERNATIONAL MODEL
          </h3>
          <h5 className="text-lg font-semibold text-black mb-4">
            WHAT’S INCLUDED?
          </h5>
          <ul className="list-disc list-inside space-y-2">
            {planD.map((value, index) => (
              <li key={index} className="text-gray-700">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
