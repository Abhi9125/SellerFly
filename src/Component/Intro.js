import React from "react";
import introImage from "../Images/IntroImage.jpg"; // Replace with your actual image path
import Mission from "../Images/Mission.jpg";
import Vision from "../Images/Vision.jpg";

const Intro = () => {
  return (
    <section className="font-sans bg-white py-16 rounded-xl shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-lg sm:text-xl text-red-600 font-bold tracking-wide uppercase">
            Who We Are
          </h3>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Image Section */}
          <img
            src={introImage}
            alt="Intro"
            className="w-56 h-56 lg:w-80 lg:h-80 rounded-lg object-cover shadow-xl"
          />

          {/* Text Section */}
          <div className="text-lg text-gray-800 max-w-3xl text-center lg:text-left">
            <h3 className="text-2xl font-bold text-black mb-2">
              Mr. Senthilkumar
            </h3>
            <p className="text-md font-semibold text-red-600 mb-4">
              Founder & CEO
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              We are a team of internationally certified E-Commerce & Digital
              Experts with a vision to grow your e-commerce business from 10X to
              100X in a short time. Our mission is to provide top-notch services
              to help businesses thrive in the competitive digital marketplace.
            </p>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="mt-12 flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Mission */}
          <div className="flex flex-col lg:flex-row items-center">
            <img
              src={Mission}
              alt="Mission_img"
              className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover shadow-lg"
            />
            <div className="lg:ml-6 mt-6 lg:mt-0 text-center lg:text-left">
              <h4 className="text-xl font-bold text-black mb-4">OUR MISSION</h4>
              <p className="text-md text-gray-700 leading-relaxed">
                Empower sellers with innovative tools and data-driven strategies
                to maximize their sales and business efficiency across
                e-commerce platforms.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col lg:flex-row items-center">
            <img
              src={Vision}
              alt="Vision_img"
              className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover shadow-lg"
            />
            <div className="lg:ml-6 mt-6 lg:mt-0 text-center lg:text-left">
              <h4 className="text-xl font-bold text-black mb-4">OUR VISION</h4>
              <p className="text-md text-gray-700 leading-relaxed">
                To be the leading platform for e-commerce success, providing
                comprehensive solutions that enable sellers to achieve
                sustainable growth and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
