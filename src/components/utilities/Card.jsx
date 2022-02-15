import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-board">
      <div className="card-element">
        <div className="card__header">
          <img
            className="card__image"
            src="/source-folder/images/img-8.jpg"
            alt="camels crossing the Sahara desert"
          />
          <span className="image-tag">Adventure</span>
        </div>
        <div className="card-text">
          <h2>Explorer the hidden waterfall deep inside the Amazon jungle</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
