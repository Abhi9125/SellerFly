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
import OurClients from "./OurClients";
import BoostSection from "./BootsSection";
import SemiHeader from "./SemiHeader";

// import SecondPage from "./Inro";

const Body = () => {
  return (
    <div>
      <MainBanner />
      <Intro />
      <OurServices />
      <ConnectingBusinessImageSlides
        slides={SliderDataforConnectingBusinesses}
      />
      <BoostSection />
      {/* <OurClients /> */}
      <WhyChooseUs />
      <StrategySection />
      <AchivementComponent />
      <ContactPage />
      <OurClients />
      <OurSucessStory />
    </div>
  );
};

export default Body;
