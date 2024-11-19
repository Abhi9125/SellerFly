import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Intro from "./Component/Intro";
import OurServices from "./Component/OurServies";
import ContactPage from "./Component/ContactPage";
import Error from "./Component/Error";
import Body from "./Component/Body";
import Aboutus from "./Component/Aboutus";
import Rout_Services from "./Component/Rout_Services";
import GrowWithUsPage from "./Component/GrowWithUsPage";
import ModalComponent from "./Component/ModalComponent";
import EcommerceSellerAccountManagement from "./Component/EcommerceSellerAccountManagement";
import WebsiteDevelopmentServices from "./Component/WebsiteDevelopmentServices";
import DigitalMarketing from "./Component/DigitalMarketing";
// import DigitalServices from "./Component/DigitalServices";
import DigitalServices from "./Component/DigitalServices";
// import AboutUs from "./Component/AboutUs";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about-us",
        // element: <Intro />,
        element: <Aboutus />,
      },
      {
        path: "/services",
        element: <Rout_Services />,
      },
      {
        path: "/E-commerce-management",
        element: <EcommerceSellerAccountManagement />,
      },
      {
        path: "/WebsiteDevelopmentService",
        element: <WebsiteDevelopmentServices />,
      },
      {
        path: "/Digital-Marketing",
        element: <DigitalMarketing />,
      },
      {
        path: "/Digital-services",
        element: <DigitalServices />,
      },
      {
        path: "/grow-with-us",
        element: <GrowWithUsPage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
