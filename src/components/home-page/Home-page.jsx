import React from "react";
import "./Home-page.css";

const HomePage = () => {
  return (
    <div className="hero-container">
      <video src="/source-folder/videos/video-1.mp4" autoPlay loop muted>
        Your browser does`t suppot videos
      </video>
      <div className="hero-text">
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
      </div>
      <div className="btn"></div>
    </div>
  );
};

export default HomePage;
