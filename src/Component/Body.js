import React from "react";
import MainPage from "./MainPage";
import Intro from "./Intro";
import ConnectingBusiness from "./ConnectingBusiness";
import ContactPage from "./ContactPage";
import WhyChooseUs from "./WhyChooseUs";
import StrategySection from "./StrategySection";
import AchivementComponent from "./AchivementComponent";

// import OurServies from "./OurServies";
// import SecondPage from "./Inro";

const Body = () => {
  return (
    <div>
      <MainPage />
      <Intro />
      {/* <OurServies /> */}
      <ConnectingBusiness />
      <ContactPage />
      <WhyChooseUs />
      <StrategySection />
      {/* <AchivementComponent /> */}
    </div>
  );
};

export default Body;
