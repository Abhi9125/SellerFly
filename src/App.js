import { Outlet } from "react-router-dom";
import Body from "./Component/Body";
import Header from "./Component/Header";
import SemiHeader from "./Component/SemiHeader";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      {/* <SemiHeader /> */}
      <Header />
      <Outlet />
      {/* <Body /> */}
      <Footer />
    </div>
  );
}

export default App;
