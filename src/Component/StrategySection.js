import React from "react";

const StrategySection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4">OUR STRATEGY</h2>
      <p className="text-xl text-center mb-8">
        Boost Your Sales With Seller Rocket
      </p>
      <div className="flex flex-col md:flex-row justify-around items-start mb-8">
        <div className="flex items-center mb-6 md:mb-0">
          <div className="flex items-center justify-center bg-blue-600 text-white font-bold rounded-full w-16 h-16 mr-4">
            1
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">CREATE A SALES PLAN</h3>
            <ul className="list-disc ml-4">
              <li>Review Products</li>
              <li>Market analysis</li>
              <li>Leverage Opportunities & Set Goals</li>
              <li>Develop a customized action plan</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mb-6 md:mb-0">
          <div className="flex items-center justify-center bg-blue-600 text-white font-bold rounded-full w-16 h-16 mr-4">
            2
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              DESIGN A MARKETING STRATEGY
            </h3>
            <ul className="list-disc ml-4">
              <li>Create a paid advertising strategy</li>
              <li>Optimize listings with a keyword strategy</li>
              <li>Improve high ROI ads</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-center bg-blue-600 text-white font-bold rounded-full w-16 h-16 mr-4">
            3
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              EXPAND YOUR MARKETPLACE
            </h3>
            <ul className="list-disc ml-4">
              <li>Evaluate New Marketplaces</li>
              <li>Organize products' exposure</li>
              <li>Get customer reviews</li>
              <li>Optimize pricing strategies</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default StrategySection;
