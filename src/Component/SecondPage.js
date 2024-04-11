import React from "react";
import prateekImg from "../Images/Prateek.jpeg";
const SecondPage = () => {
  return (
    <div>
      <div>
        <h3>WHO WE ARE</h3>
        <h1>We Help BRANDS & MANUFACTURES Grow Their Business Online</h1>
        <p>
          Seller Rocket is a technology company specializing in helping SME’s
          and brands set up and grow their business online through innovative
          e-commerce solutions and services.
        </p>
        <div className="flex">
          <img src={prateekImg} alt="prateekImg" />
          <div>
            <p>
              Founded in 2017 under the leadership of ex-employees of Amazon,
              Flipkart, and Myntra, with branches in Bangalore, Thanjavur, and
              Tiruppur, we operate under a culture of expertise, excellence,
              innovation, and entrepreneurship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
