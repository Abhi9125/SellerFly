import React from "react";
import MainBanner from "./MainBanner";
import Intro from "./Intro";

import ContactPage from "./ContactPage";
import WhyChooseUs from "./WhyChooseUs";
import StrategySection from "./StrategySection";
import AchivementComponent from "./AchivementComponent";

import OurServices from "./OurServies";
import ConnectingBusinessImageSlides from "./ConnectingBusinessImageSlides";
import { SliderDataforConnectingBusinesses } from "./SliderData";

// import SecondPage from "./Inro";

const Body = () => {
  return (
    <div>
      <MainBanner />
      <Intro />
      <OurServices />
      <ConnectingBusinessImageSlides
        slides={SliderDataforConnectingBusinesses}
      />{" "}
      <AchivementComponent />
      <StrategySection />
      <WhyChooseUs />
      {/* <WhyChooseUs /> */}
      <ContactPage />
      {/* <StrategySection /> */}
      {/* <AchivementComponent /> */}
    </div>
  );
};

export default Body;
