import { Outlet } from "react-router-dom";
import Body from "./Component/Body";
import Header from "./Component/Header";
import SemiHeader from "./Component/SemiHeader";
import Footer from "./Component/Footer";
import ScrollToTop from "./Component/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      {/* <SemiHeader /> */}
      <Header />
      <Outlet />
      {/* <Body /> */}
      <Footer />
    </div>
  );
}

export default App;
