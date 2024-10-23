import React, { useState, useEffect } from "react";
import { FaUsers, FaStar, FaCoffee, FaChartBar } from "react-icons/fa";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import AOS from "aos";
import "aos/dist/aos.css";

const AchievementComponent = () => {
  const [counterState, setCounterState] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="bg-white py-16 px-10">
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <div className="container mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12" data-aos="fade-down">
            <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-2">
              Our Achievements
            </h2>
            <p className="text-gray-400 text-lg">
              Celebrating our milestones and successes
            </p>
          </div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Counter 1 */}
            <div
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <FaUsers
                className="text-6xl mb-4 text-red-600 animate-bounce"
                aria-hidden="true"
              />
              <h2 className="text-5xl font-bold text-white">
                {counterState && (
                  <CountUp
                    start={0}
                    end={50}
                    delay={0}
                    duration={3}
                    separator=","
                  />
                )}
                +
              </h2>
              <p className="font-semibold text-gray-300 mt-2">
                Ecommerce Clients
              </p>
            </div>

            {/* Counter 2 */}
            <div
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaStar
                className="text-6xl mb-4 text-red-600 animate-bounce"
                aria-hidden="true"
              />
              <h2 className="text-5xl font-bold text-white">
                {counterState && (
                  <CountUp
                    start={0}
                    end={10}
                    delay={0}
                    duration={3}
                    separator=","
                  />
                )}
                +
              </h2>
              <p className="font-semibold text-gray-300 mt-2">
                Websites Developed
              </p>
            </div>

            {/* Counter 3 */}
            <div
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <FaCoffee
                className="text-6xl mb-4 text-red-600 animate-bounce"
                aria-hidden="true"
              />
              <h2 className="text-5xl font-bold text-white">
                {counterState && (
                  <CountUp
                    start={0}
                    end={20}
                    delay={0}
                    duration={3}
                    separator=","
                  />
                )}
                + Crore
              </h2>
              <p className="font-semibold text-gray-300 mt-2">
                Revenue Generated
              </p>
            </div>

            {/* Counter 4 */}
            <div
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <FaChartBar
                className="text-6xl mb-4 text-red-600 animate-bounce"
                aria-hidden="true"
              />
              <h2 className="text-5xl font-bold text-white">
                {counterState && (
                  <CountUp
                    start={0}
                    end={14}
                    delay={0}
                    duration={3}
                    separator=","
                  />
                )}
                +
              </h2>
              <p className="font-semibold text-gray-300 mt-2">
                Years in Industry
              </p>
            </div>
          </div>

          {/* Optional: Add additional content or a call-to-action below the counters */}
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default AchievementComponent;
