import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/pages/Services";
import Productions from "./components/pages/Productions";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Productions" element={<Productions />} />
      </Routes>
    </div>
  );
}

export default App;
