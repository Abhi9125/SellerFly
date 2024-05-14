import React from "react";
import introImage from "../Images/IntroImage.png";

const Intro = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-300 mt-10 py-16  rounded-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-12">
          <h3 className="text-lg sm:text-xl text-indigo-700 font-bold tracking-wide uppercase">
            Who We Are
          </h3>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-800">
            Unlock Limitless Growth and Build Truly Online Business
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <img
            src={introImage}
            alt="Intro"
            className="w-56 h-56 lg:w-80 lg:h-72 rounded-lg"
          />
          <div className="text-lg text-gray-700 max-w-3xl">
            <p className="mb-4">
              SellerFly is a technology company specializing in helping SME’s
              and brands set up and grow their business online through
              innovative e-commerce solutions and services.
            </p>
            <p>
              Started by the veterans of ecommerce in 2022, sellerfly team comes
              with an experience of 10+ years in Indian ecommerce industry. We
              are based out of Coimbatore and exclusively work with
              manufacturers in Tirupur.
              <br />
              <br />
              We bring growth to your business by fixing gaps in your products
              catalog, optimising your ads and launching you in new
              marketplaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
