import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const strategiesData = [
  {
    number: "1",
    title: "CREATE A SALES PLAN",
    points: [
      "Review Products.",
      "Market analysis.",
      "Leverage Opportunities & Set Goals.",
      "Develop a customized action plan.",
    ],
  },
  {
    number: "2",
    title: "DESIGN A MARKETING STRATEGY",
    points: [
      "Create a paid advertising strategy.",
      "Optimize listings with a keyword strategy.",
      "Improve high ROI ads.",
    ],
  },
  {
    number: "3",
    title: "EXPAND YOUR MARKETPLACE",
    points: [
      "Evaluate New Marketplaces.",
      "Organize products' exposure.",
      "Get customer reviews.",
      "Optimize pricing strategies.",
    ],
  },
];

const StrategySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section
      className="py-16 bg-gradient-to-r from-white to-gray-100"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Our Strategy</h2>
          <p className="text-gray-700">Boost Your Sales With Seller Rocket</p>
        </div>

        {/* Strategy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strategiesData.map((strategy, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out relative"
              data-aos="zoom-in"
              data-aos-delay={index * 200} // Staggered animation delay
            >
              {/* Numbered Circle */}
              <div className="flex justify-center items-center mb-6">
                <div className="w-20 h-20 border-4 border-red-600 text-red-600 rounded-full flex items-center justify-center text-3xl font-bold transition-transform transform hover:scale-110 duration-300 ease-in-out">
                  {strategy.number}
                </div>
              </div>

              {/* Card Content */}
              <h3 className="text-xl font-semibold text-black mb-4 text-center">
                {strategy.title}
              </h3>
              <ul className="list-disc list-inside text-left space-y-2 text-gray-700">
                {strategy.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="flex justify-center mt-12">
          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full font-bold transition-transform transform hover:scale-105 duration-300"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Book Now
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default StrategySection;
