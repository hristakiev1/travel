import React from "react";
import "./Card.css";

const Card = ({ image, sutitle, text }) => {
  return (
    <div className="card-element">
      <div className="card__header">
        <img className="card__image" src={image} alt="exotic places" />
        <span className="image-subtitle">{sutitle}</span>
      </div>
      <div className="card-text">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default Card;
