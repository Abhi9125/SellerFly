import React from "react";
import MainPage from "./MainPage";
import Intro from "./Intro";

import ContactPage from "./ContactPage";
import WhyChooseUs from "./WhyChooseUs";
import StrategySection from "./StrategySection";
import AchivementComponent from "./AchivementComponent";

import OurServies from "./OurServies";
import ConnectingBusinessImageSlides from "./ConnectingBusinessImageSlides";
import { SliderDataforConnectingBusinesses } from "./SliderData";
// import SecondPage from "./Inro";

const Body = () => {
  return (
    <div>
      <MainPage />
      <Intro />
      <ConnectingBusinessImageSlides
        slides={SliderDataforConnectingBusinesses}
      />
      <OurServies />
      <ContactPage />
      <WhyChooseUs />
      <StrategySection />
      <AchivementComponent />
    </div>
  );
};

export default Body;
