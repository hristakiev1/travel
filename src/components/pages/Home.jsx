import React from "react";
import "./Home.css";

import Hero from "../hero-component/Hero";
import CardContainer from "../card-component/Cards-Container";

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <CardContainer />
    </div>
  );
};

export default Home;
