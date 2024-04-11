import React from "react";
import mainPageLogo from "../Images/main-page-logo.webp";

const MainPage = () => {
  return (
    <div className="flex justify-center items-center bg-white h-screen mt-9">
      <img src={mainPageLogo} alt="Wallpaper" className="max-w-full h-auto" />
    </div>
  );
};

export default MainPage;
