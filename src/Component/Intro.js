import React from "react";
import prateekImg from "../Images/Prateek.jpeg";

const Intro = () => {
  return (
    <div className=" h-full mt-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-base text-indigo-600 font-extrabold tracking-wide uppercase">
            Who We Are
          </h3>
          <h1 className="mt-2 text-xl leading-8 font-semibold  tracking-tight text-gray-900 sm:text-5xl sm:leading-10">
            Unlock Limitless Growth and Build Truly Online Business
          </h1>
        </div>
        <div className="max-w-4xl mx-auto text-center text-xl text-gray-600">
          <p className="mb-8">
            SellerFly is a technology company specializing in helping SME’s and
            brands set up and grow their business online through innovative
            e-commerce solutions and services.
          </p>
          <div className="flex justify-center items-center flex-col sm:flex-row">
            <img
              src={prateekImg}
              alt="Prateek"
              className="w-48 h-48 mb-8 sm:mb-0 sm:mr-8 rounded-full"
            />
            <p>
              Started by the veterans of ecommerce in 2022, sellerfly team comes
              with an experience of 10+ years in Indian ecommerce industry. We
              are based out of Coimbatore and exclusively work with
              manufacturers in Tirupur.
              <br />
              <br />
              We bring growth to your business by fixing gaps in your products
              catalog, optimising your ads and launcing you in new marketplaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
