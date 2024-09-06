// // export default AchivementComponent;
// import React, { useState } from "react";
// import CountUp from "react-countup";
// import ScrollTrigger from "react-scroll-trigger";

// const AchievementComponent = () => {
//   const [counterState, setCounterState] = useState(false);
//   return (
//     <section className="bg-gradient-to-r from-blue-100 to-blue-300 py-12 px-10 rounded-xl shadow-2xl">
//       <ScrollTrigger
//         onEnter={() => setCounterState(true)}
//         onExit={() => setCounterState(false)}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-6">
//           <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
//             <h2 className="text-3xl font-bold text-blue-600">
//               {counterState && <CountUp start={0} end={100} delay={0} />}+
//             </h2>
//             <p className="font-semibold text-gray-700">Accounts Managed</p>
//           </div>

//           <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
//             <h2 className="text-3xl font-bold text-blue-600">
//               {counterState && <CountUp start={0} end={50} delay={0} />}+
//             </h2>
//             <p className="font-semibold text-gray-700">Website Launched</p>
//           </div>

//           <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
//             <h2 className="text-3xl font-bold text-blue-600">
//               {counterState && <CountUp start={0} end={5} delay={0} />}
//               {" Cr+"}
//             </h2>
//             <p className="font-semibold text-gray-700">Monthly Revenue</p>
//           </div>
//           <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
//             <h2 className="text-3xl font-bold text-blue-600">
//               {counterState && <CountUp start={0} end={10} delay={0} />}
//               +Years
//             </h2>
//             <p className="font-semibold text-gray-700">
//               Experience in Industry
//             </p>
//           </div>
//           {/* ... other counters */}
//         </div>
//       </ScrollTrigger>
//     </section>
//   );
// };

// export default AchievementComponent;

import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const AchievementComponent = () => {
  const [counterState, setCounterState] = useState(false);

  return (
    <section className="bg-gradient-to-r from-white to-gray-100 py-12 px-10 rounded-xl shadow-2xl">
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-6">
          {/* Counter 1 */}
          <div className="flex flex-col items-center justify-center p-4 bg-black text-white rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-red-600">
              {counterState && <CountUp start={0} end={100} delay={0} />}+
            </h2>
            <p className="font-semibold text-white">Accounts Managed</p>
          </div>

          {/* Counter 2 */}
          <div className="flex flex-col items-center justify-center p-4 bg-black text-white rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-red-600">
              {counterState && <CountUp start={0} end={50} delay={0} />}+
            </h2>
            <p className="font-semibold text-white">Websites Launched</p>
          </div>

          {/* Counter 3 */}
          <div className="flex flex-col items-center justify-center p-4 bg-black text-white rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-red-600">
              {counterState && <CountUp start={0} end={5} delay={0} />}
              {" Cr+"}
            </h2>
            <p className="font-semibold text-white">Monthly Revenue</p>
          </div>

          {/* Counter 4 */}
          <div className="flex flex-col items-center justify-center p-4 bg-black text-white rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-red-600">
              {counterState && <CountUp start={0} end={10} delay={0} />}+ Years
            </h2>
            <p className="font-semibold text-white">Experience in Industry</p>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default AchievementComponent;
