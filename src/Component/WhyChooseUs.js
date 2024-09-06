// import React from "react";
// import clients from "../Images/WhyChooseUsImg/clients.gif";
// import retention from "../Images/WhyChooseUsImg/retention.gif";
// import expert from "../Images/WhyChooseUsImg/expert.gif";
// import saless from "../Images/WhyChooseUsImg/saless.gif";
// import support from "../Images/WhyChooseUsImg/support.gif";
// import account from "../Images/WhyChooseUsImg/account.gif";
// import market from "../Images/WhyChooseUsImg/market.gif";
// import experience from "../Images/WhyChooseUsImg/experience.gif";
// import spn from "../Images/WhyChooseUsImg/spn.gif";

// const WhyChooseUs = () => {
//   return (
//     <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-center mb-6">Why Choose Us</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {/* 300+ Happy Clients */}
//         <div className="flex items-center">
//           <img src={clients} alt="clientIcon" className="w-10 h-10 mr-4" />
//           <div>
//             <h3 className="font-semibold">100+ Happy Clients</h3>
//             <p>Building and growing clients' businesses online.</p>
//           </div>
//         </div>
//         {/* 91% Client Retention */}
//         <div className="flex items-center">
//           <img src={retention} alt="RetentionIcon" className="w-10 h-10 mr-4" />
//           <div>
//             <h3 className="font-semibold">91% Client Retention</h3>
//             <p>Consistently achieved year on year basis.</p>
//           </div>
//         </div>
//         {/* Expert Managers */}
//         <div className="flex items-center">
//           <img src={expert} className="w-10 h-10 mr-4" />
//           <div>
//             <h3 className="font-semibold">Registered Partner</h3>
//             <p>
//               Sellerfly is registered partner in major marketplaces like Amazon
//               & Flipkart
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center">
//           <img src={expert} className="w-10 h-10 mr-4" />
//           <div>
//             <h3 className="font-semibold">Expert Managers</h3>
//             <p>Trained in e-commerce, account, inventory, SEO, and PPC.</p>
//           </div>
//         </div>
//         <div className="flex items-center">
//           <img src={expert} className="w-10 h-10 mr-4" />
//           <div>
//             <h3 className="font-semibold">Daily/Weekly Reporting</h3>
//             <p>
//               Detailed reporting and tracking of your daily & weekly progress
//               reports
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center">
//           <img src={expert} className="w-10 h-10 mr-4" />
//           <div>
//             <h3 className="font-semibold">Tailored Solutions</h3>
//             <p>
//               Meet your specific needs and goals with effective tailor made
//               strategies
//             </p>
//           </div>
//         </div>
//         {/* Sales Focused Services */}
//         <div className="flex items-center">
//           <img src={saless} className="w-10 h-10 mr-4" />
//           <div>
//             <h3 className="font-semibold">Performance based services</h3>
//             <p>We charge you on performance based.</p>
//           </div>
//         </div>
//         {/* Whatsapp, Email, and Support */}
//         <div className="flex items-center">
//           <img src={support} className="w-10 h-10 mr-4" />
//           <div>
//             <h3 className="font-semibold">Whatsapp, Email, and Support</h3>
//             <p>Personalized WhatsApp group for faster communication.</p>
//           </div>
//         </div>
//         {/* Dedicated Account Manager */}
//         <div className="flex items-center">
//           <img src={account} className="w-10 h-10 mr-4" />
//           <div>
//             <h3 className="font-semibold">Dedicated Account Manager</h3>
//             <p>Helps to improve product ranking in the long term.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;

// import React from "react";
// import clients from "../Images/WhyChooseUsImg/clients.gif";
// import retention from "../Images/WhyChooseUsImg/retention.gif";
// import expert from "../Images/WhyChooseUsImg/expert.gif";
// import saless from "../Images/WhyChooseUsImg/saless.gif";
// import support from "../Images/WhyChooseUsImg/support.gif";
// import account from "../Images/WhyChooseUsImg/account.gif";
// import market from "../Images/WhyChooseUsImg/market.gif";
// import experience from "../Images/WhyChooseUsImg/experience.gif";
// import spn from "../Images/WhyChooseUsImg/spn.gif";

// const WhyChooseUs = () => {
//   return (
//     <section className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 py-12 px-8 rounded-lg shadow-xl">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-extrabold text-center mb-10">
//           Why Choose Us
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Service Icons and Descriptions */}
//           {[
//             {
//               icon: clients,
//               title: "100+ Happy Clients",
//               description: "Building and growing clients' businesses online.",
//             },
//             {
//               icon: retention,
//               title: "91% Client Retention",
//               description: "Consistently achieved year on year basis.",
//             },
//             {
//               icon: expert,
//               title: "Registered Partner",
//               description:
//                 " Sellerfly is registered partner in major marketplaces like Amazon & Flipkart",
//             },
//             {
//               icon: saless,
//               title: "Expert Managers",
//               description:
//                 "Trained in e-commerce, account, inventory, SEO, and PPC.",
//             },
//             {
//               icon: support,
//               title: "Daily/Weekly Reporting",
//               description:
//                 "Detailed reporting and tracking of your daily & weekly progress reports.",
//             },
//             {
//               icon: account,
//               title: "Tailored Solutions",
//               description:
//                 "Meet your specific needs and goals with effective tailor made strategies",
//             },
//             {
//               icon: market,
//               title: "Performance based services",
//               description: "We charge you on performance based.",
//             },
//             {
//               icon: experience,
//               title: "Whatsapp, Email, and Support",
//               description:
//                 "Personalized WhatsApp group for faster communication.",
//             },
//             {
//               icon: spn,
//               title: "Dedicated Account Manager",
//               description: "Helps to improve product ranking in the long term.",
//             },
//             // ... other services
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
//             >
//               <img
//                 src={item.icon}
//                 alt="service icon"
//                 className="w-12 h-12 mr-4"
//               />
//               <div>
//                 <h3 className="font-semibold text-lg">{item.title}</h3>
//                 <p>{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import React from "react";
import clients from "../Images/WhyChooseUsImg/clients.gif";
import retention from "../Images/WhyChooseUsImg/retention.gif";
import expert from "../Images/WhyChooseUsImg/expert.gif";
import saless from "../Images/WhyChooseUsImg/saless.gif";
import support from "../Images/WhyChooseUsImg/support.gif";
import account from "../Images/WhyChooseUsImg/account.gif";
import market from "../Images/WhyChooseUsImg/market.gif";
import experience from "../Images/WhyChooseUsImg/experience.gif";
import spn from "../Images/WhyChooseUsImg/spn.gif";

const WhyChooseUs = () => {
  return (
    <section className="bg-white text-gray-800 py-12 px-8 rounded-lg shadow-xl">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-red-600 mb-10">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: clients,
              title: "100+ Happy Clients",
              description: "Building and growing clients' businesses online.",
            },
            {
              icon: retention,
              title: "91% Client Retention",
              description: "Consistently achieved year on year basis.",
            },
            {
              icon: expert,
              title: "Registered Partner",
              description:
                "Sellerfly is a registered partner in major marketplaces like Amazon & Flipkart.",
            },
            {
              icon: saless,
              title: "Expert Managers",
              description:
                "Trained in e-commerce, account, inventory, SEO, and PPC.",
            },
            {
              icon: support,
              title: "Daily/Weekly Reporting",
              description:
                "Detailed reporting and tracking of your daily & weekly progress reports.",
            },
            {
              icon: account,
              title: "Tailored Solutions",
              description:
                "Meet your specific needs and goals with tailor-made strategies.",
            },
            {
              icon: market,
              title: "Performance Based Services",
              description: "We charge you based on performance.",
            },
            {
              icon: experience,
              title: "Whatsapp, Email, and Support",
              description:
                "Personalized WhatsApp group for faster communication.",
            },
            {
              icon: spn,
              title: "Dedicated Account Manager",
              description: "Helps to improve product ranking in the long term.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-white rounded-lg shadow-md hover:bg-red-50 hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <img
                src={item.icon}
                alt="service icon"
                className="w-12 h-12 mr-4"
              />
              <div>
                <h3 className="font-semibold text-lg text-black">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
