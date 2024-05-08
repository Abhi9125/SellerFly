import React from "react";
import Ajio from "../Images/Ajio.jpg";
import Amazon from "../Images/Amazon.jpg";
import BigBasket from "../Images/BigBasket.jpg";
import Flipkart from "../Images/Flipkart.jpg";
import GlowRoad from "../Images/GlowRoad.jpg";
import JioMart from "../Images/JioMart.jpg";
import Jumbotail from "../Images/Jumbotail.jpg";
import Meesho from "../Images/Meesho.jpg";
import Myntra from "../Images/Myntra.jpg";
import Nykaa from "../Images/Nykaa.jpg";
import TataCliQ from "../Images/TataCliQ.jpg";
import Udaan from "../Images/Udaan.jpg";

const ConnectingBusiness = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl text-center text-gray-900 font-bold mb-8">
          We Connect Your Business With Potential Buyers!
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
          <img src={Ajio} alt="Ajio" className="h-24 w-full object-contain" />
          <img
            src={Amazon}
            alt="Amazon"
            className="h-24 w-full object-contain"
          />

          <img
            src={Flipkart}
            alt="Flipkart"
            className="h-24 w-full object-contain"
          />
          <img
            src={GlowRoad}
            alt="GlowRoad"
            className="h-24 w-full object-contain"
          />
          <img
            src={Meesho}
            alt="Meesho"
            className="h-24 w-full object-contain"
          />
          <img
            src={Myntra}
            alt="Myntra"
            className="h-24 w-full object-contain"
          />
          <img src={Nykaa} alt="Nykaa" className="h-24 w-full object-contain" />
          <img
            src={TataCliQ}
            alt="TataCliQ"
            className="h-24 w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectingBusiness;
