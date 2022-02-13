import React from "react";
import "./Hero.css";
import Button from "../utilities/Button";

const Hero = () => {
  return (
    <div className="hero-container">
      <video src="/source-folder/videos/video-1.mp4" autoPlay loop muted>
        Your browser does`t suppot videos
      </video>
      <div className="hero-text">
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
      </div>
      <div className="hero-buttons">
        <Button
          buttonStyle="btn--outline"
          buttonSize="btn--medium"
          type="submit"
          onClick={"sign-up"}
        >
          GET STARTED
        </Button>
        <Button
          buttonStyle="btn--primary"
          buttonSize="btn--medium"
          onClick={"watch-trailer"}
        >
          WATCH TRAILER <i className="fa fa-play-circle" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
