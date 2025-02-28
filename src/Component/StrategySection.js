import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const strategiesData = [
  {
    number: "1",
    title: "Build a Strong Sales Plan",
    points: [
      "Analyze products & market trends.",
      "Identify growth opportunities & set goals.",
      "Create a clear action plan for success.",
    ],
  },
  {
    number: "2",
    title: "Smart Marketing Strategy",
    points: [
      "Run high-ROI paid ads.",
      "Optimize product listings with SEO.",
      "Improve ad performance for better reach.",
    ],
  },
  {
    number: "3",
    title: "Expand Your Marketplace",
    points: [
      "Explore new platforms for growth.",
      "Increase product visibility & customer trust.",
      "Use smart pricing strategies for better sales.",
    ],
  },
];

const StrategySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className="py-12 bg-gradient-to-r from-white to-gray-100"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#ab5836] mb-4">
            Our Strategy
          </h2>
          <p className="text-gray-700">Boost Your Sales With SellerFly</p>
        </div>

        {/* Strategy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strategiesData.map((strategy, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out relative"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              {/* Numbered Circle with additional flip animation */}
              <div
                className="flex justify-center items-center mb-6"
                data-aos="flip-up"
                data-aos-delay={index * 200 + 100}
              >
                <div className="w-20 h-20 border-4 border-[#ab5836] text-[#ab5836] rounded-full flex items-center justify-center text-3xl font-bold transition-transform transform hover:scale-110 duration-300 ease-in-out">
                  {strategy.number}
                </div>
              </div>

              {/* Card Title with fade animation */}
              <h3
                className="text-xl font-semibold text-black mb-4 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 200 + 150}
              >
                {strategy.title}
              </h3>

              {/* Strategy Points */}
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {strategy.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
