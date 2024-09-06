// import React from "react";

// const Timeline = () => {
//   const timelineData = [
//     {
//       year: "2012",
//       description:
//         "Adaptive professional solution idea is formed and signed NMG as Tech Partners.",
//     },
//     {
//       year: "2014",
//       description:
//         "Product launches and updates are released based on market feedback.",
//     },
//     {
//       year: "2018",
//       description:
//         "Acquired by RGP (NASDAQ Listed) and starts work on new product HUGO, NMG signed as Tech Partners by RGP.",
//     },
//     {
//       year: "2020",
//       description: "Hugo launches to Talent in the US.",
//     },
//     {
//       year: "2021",
//       description:
//         "Hugo fully launches to Fortune 500 Clients, starting with New York.",
//     },
//     {
//       year: "2022",
//       description:
//         "NMG continues to work with RGP as one of their core Tech Partners.",
//     },
//   ];

//   return (
//     <section className="bg-white py-8">
//       <div className="container mx-auto px-4 relative">
//         {/* Timeline dashed line */}
//         <div className="absolute left-0 right-0 top-10 lg:top-14 w-full border-t-2 border-dashed border-gray-300 z-0"></div>

//         {/* Timeline items */}
//         <div className="relative flex flex-col lg:flex-row justify-between items-center lg:items-center space-y-12 lg:space-y-0 lg:space-x-8">
//           {timelineData.map((item, index) => (
//             <div
//               key={index}
//               className="relative flex flex-col items-center text-center lg:text-left"
//             >
//               {/* Dot */}
//               <div className="w-8 h-8 bg-red-600 rounded-full z-10 relative mt-10"></div>

//               {/* Year */}
//               <h3 className="text-xl font-bold text-red-600 mt-4">
//                 {item.year}
//               </h3>

//               {/* Description */}
//               <div className="max-w-xs mt-2">
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Timeline;
// // import React from "react";

// // const Timeline = () => {
// //   const timelineData = [
// //     {
// //       year: "2012",
// //       type: "solid",
// //       description:
// //         "Adaptive professional solution idea is formed and signed NMG as Tech Partners.",
// //     },
// //     {
// //       year: "2014",
// //       type: "hollow",
// //       description:
// //         "Adaptive professional solution idea is formed and signed NMG as Tech Partners.",
// //     },
// //     {
// //       year: "2018",
// //       type: "solid",
// //       description:
// //         "Adaptive professional solution idea is formed and signed NMG as Tech Partners.",
// //     },
// //     {
// //       year: "2020",
// //       type: "hollow",
// //       description:
// //         "Adaptive professional solution idea is formed and signed NMG as Tech Partners.",
// //     },
// //     {
// //       year: "2021",
// //       type: "solid",
// //       description:
// //         "Adaptive professional solution idea is formed and signed NMG as Tech Partners.",
// //     },
// //     {
// //       year: "2022",
// //       type: "hollow",
// //       description:
// //         "Adaptive professional solution idea is formed and signed NMG as Tech Partners.",
// //     },
// //   ];

// //   return (
// //     <div className="relative">
// //       {/* Dashed Line */}
// //       <div className="absolute top-1/2 w-full border-t border-dashed border-gray-400 z-0"></div>

// //       <div className="flex justify-between items-center py-6 relative z-10">
// //         {timelineData.map((item, index) => (
// //           <div key={index} className="flex flex-col items-center">
// //             <div
// //               className={`w-6 h-6 rounded-full mt-4 ${
// //                 item.type === "solid"
// //                   ? "bg-red-500"
// //                   : "border-2 border-red-500 bg-white"
// //               }`}
// //             ></div>
// //             <p className="text-sm font-bold text-gray-800">{item.year}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Timeline;
