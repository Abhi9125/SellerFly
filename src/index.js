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
        path: "/GROW WITH US",
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
