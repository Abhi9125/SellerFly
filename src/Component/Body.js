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
import Footer from "./Footer";
import OurSucessStory from "./OurSucessStory";

// import SecondPage from "./Inro";

const Body = () => {
  return (
    <div>
      <MainBanner />
      <OurSucessStory />
      <AchivementComponent />
      <Intro />
      <OurServices />
      <StrategySection />
      <WhyChooseUs />
      <ConnectingBusinessImageSlides
        slides={SliderDataforConnectingBusinesses}
      />{" "}
      {/* <AchivementComponent /> */}
      {/* <WhyChooseUs /> */}
      <ContactPage />
      <Footer />
      {/* <StrategySection /> */}
      {/* <AchivementComponent /> */}
    </div>
  );
};

export default Body;
