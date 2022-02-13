import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-element">
      <div>
        <img
          className="card-image"
          src="/source-folder/images/img-8.jpg"
          alt="camels crossing the Sahara desert"
        />
        <span className="image-tag">Adventure</span>
      </div>
      <div className="card-text">
        <h2>Explorer the hidden waterfall deep inside the Amazon jungle</h2>
      </div>
    </div>
  );
};

export default Card;
