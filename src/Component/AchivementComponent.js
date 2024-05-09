import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
// import CountUp from "react-countup/build/CountUp";

const AchivementComponent = () => {
  const [counterState, setCounterState] = useState(false);
  return (
    <div className="px-10 py-3 bg-blue-500 rounded-lg font-bold">
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <div className="grid grid-cols-4 text-center ">
          <div>
            <h2>
              {counterState && <CountUp start={0} end={100} delay={0} />}+
            </h2>
            <p>Accounts Managed</p>
          </div>

          <div>
            <h2>{counterState && <CountUp start={0} end={50} delay={0} />}+</h2>
            <p>Website Launched</p>
          </div>

          <div>
            <h2>
              {counterState && <CountUp start={0} end={5} delay={0} />}
              {" Cr+"}
            </h2>
            <p>Monthly Revenue</p>
          </div>
          <div>
            <h2>
              {counterState && <CountUp start={0} end={10} delay={0} />}+Years
            </h2>
            <p>Experience in Industry</p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default AchivementComponent;
