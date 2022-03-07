import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/pages/Services";
import Productions from "./components/pages/Productions";
import Footer from "./components/footer-component/Footer";
import Unsubscribe from "./components/pages/Unsubscribe";
import Credentials from "./components/pages/Credentials";
import Offer from "./components/offer/Offer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Productions" element={<Productions />} />
        <Route path="/Unsubscribe" element={<Unsubscribe />} />
        <Route path="/sign-up" element={<Credentials />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
