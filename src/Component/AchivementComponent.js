import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
// import CountUp from "react-countup/build/CountUp";

const AchivementComponent = () => {
  const [counterState, setCounterState] = useState(false);
  return (
    <div className="px-10 py-3">
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <div className="grid grid-cols-4 text-center ">
          <div>
            <h2>
              {counterState && <CountUp start={0} end={200} delay={0} />}+
            </h2>
            <p>Ecommerce Client</p>
          </div>

          <div>
            <h2>{counterState && <CountUp start={0} end={50} delay={0} />}+</h2>
            <p>Website Developed</p>
          </div>

          <div>
            <h2>
              {counterState && <CountUp start={0} end={5} delay={0} />}
              +Million
            </h2>
            <p>Revenue Generated</p>
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
