// import React from "react";

// const OurSuccessStory = () => {
//   const successStories = [
//     {
//       image1: `${process.env.PUBLIC_URL}/SuccessStory/glowroad.png`,
//       image2: `${process.env.PUBLIC_URL}/SuccessStory/GlowRoad_Business.png`,
//       description: "GENERATED 6.7+ SALES ORGANICALLY IN JUST 3 MONTHS",
//     },
//     {
//       image1: `${process.env.PUBLIC_URL}/SuccessStory/GlowRoad_Business.png`,
//       image2: `${process.env.PUBLIC_URL}/SuccessStory/Shop101_Business.png`,
//       description: "GENERATED 1.5 CRORE+ SALES ORGANICALLY IN JUST 1 MONTH",
//     },
//     {
//       image1: `${process.env.PUBLIC_URL}/SuccessStory/meesho.png`,
//       image2: `${process.env.PUBLIC_URL}/SuccessStory/Meesho_Business.png`,
//       description: "GENERATED 30+ LAKHS SALES ORGANICALLY IN JUST 3 MONTHS",
//     },
//     {
//       image1: `${process.env.PUBLIC_URL}/SuccessStory/flipkart.png`,
//       image2: `${process.env.PUBLIC_URL}/SuccessStory/Flipkart_Business.png`,
//       description: "GENERATED 27.7+ LAKHS SALES ORGANICALLY IN JUST 5 MONTHS",
//     },
//   ];

//   return (
//     <section className="bg-white text-gray-800 py-12">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h3 className="text-3xl sm:text-4xl font-bold text-red-600 uppercase">
//             Our Success Story
//           </h3>
//         </div>

//         {/* Success Stories Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {successStories.map((story, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               {/* Large Image */}
//               <div className="mb-4">
//                 <img
//                   src={story.image2}
//                   alt={`Success Story ${index + 1} - 1`}
//                   className="w-full h-48 object-cover rounded-lg mb-2"
//                 />
//               </div>

//               {/* Small Logo */}
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={story.image1}
//                   alt={`Success Story ${index + 1} - 2`}
//                   className="w-24 h-24 object-contain"
//                 />
//               </div>

//               {/* Description */}
//               <p className="text-center font-semibold text-gray-700">
//                 {story.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurSuccessStory;

import React from "react";

const OurSuccessStory = () => {
  const successStories = [
    {
      image1: `${process.env.PUBLIC_URL}/SuccessStory/glowroad.png`,
      image2: `${process.env.PUBLIC_URL}/SuccessStory/GlowRoad_Business.png`,
      description: "GENERATED 6.7+ SALES ORGANICALLY IN JUST 3 MONTHS",
    },
    {
      image1: `${process.env.PUBLIC_URL}/SuccessStory/GlowRoad_Business.png`,
      image2: `${process.env.PUBLIC_URL}/SuccessStory/Shop101_Business.png`,
      description: "GENERATED 1.5 CRORE+ SALES ORGANICALLY IN JUST 1 MONTH",
    },
    {
      image1: `${process.env.PUBLIC_URL}/SuccessStory/meesho.png`,
      image2: `${process.env.PUBLIC_URL}/SuccessStory/Meesho_Business.png`,
      description: "GENERATED 30+ LAKHS SALES ORGANICALLY IN JUST 3 MONTHS",
    },
    {
      image1: `${process.env.PUBLIC_URL}/SuccessStory/flipkart.png`,
      image2: `${process.env.PUBLIC_URL}/SuccessStory/Flipkart_Business.png`,
      description: "GENERATED 27.7+ LAKHS SALES ORGANICALLY IN JUST 5 MONTHS",
    },
  ];

  return (
    <section className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-red-600 uppercase">
            Our Success Story
          </h3>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Large Image */}
              <div className="mb-4">
                <img
                  src={story.image2}
                  alt={`Success Story ${index + 1} - 1`}
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
              </div>

              {/* Small Logo */}
              <div className="flex justify-center mb-4">
                <img
                  src={story.image1}
                  alt={`Success Story ${index + 1} - 2`}
                  className="w-24 h-24 object-contain"
                />
              </div>

              {/* Description */}
              <p className="text-center font-semibold text-gray-700">
                {story.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSuccessStory;
