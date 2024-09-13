import React, { useState } from "react";
import { FaUsers, FaStar, FaCoffee, FaChartBar } from "react-icons/fa";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const AchievementComponent = () => {
  const [counterState, setCounterState] = useState(false);

  return (
    <section className="bg-black py-12 px-10">
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-6">
          {/* Counter 1 */}
          <div className="flex flex-col items-center justify-center p-4 text-white">
            <FaUsers className="text-6xl mb-4 text-red-600" />
            <h2 className="text-4xl font-bold">
              {counterState && <CountUp start={0} end={50} delay={0} />}+
            </h2>
            <p className="font-semibold text-white">Ecommerce Clients</p>
          </div>

          {/* Counter 2 */}
          <div className="flex flex-col items-center justify-center p-4 text-white">
            <FaStar className="text-6xl mb-4 text-red-600" />
            <h2 className="text-4xl font-bold">
              {counterState && <CountUp start={0} end={10} delay={0} />}+
            </h2>
            <p className="font-semibold text-white">Websites Developed</p>
          </div>

          {/* Counter 3 */}
          <div className="flex flex-col items-center justify-center p-4 text-white">
            <FaCoffee className="text-6xl mb-4 text-red-600" />
            <h2 className="text-4xl font-bold">
              {counterState && <CountUp start={0} end={20} delay={0} />}+ Crore
            </h2>
            <p className="font-semibold text-white">Revenue Generated</p>
          </div>

          {/* Counter 4 */}
          <div className="flex flex-col items-center justify-center p-4 text-white">
            <FaChartBar className="text-6xl mb-4 text-red-600" />
            <h2 className="text-4xl font-bold">
              {counterState && <CountUp start={0} end={14} delay={0} />}+ Years
            </h2>
            <p className="font-semibold text-white">Experience in Industry</p>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default AchievementComponent;
