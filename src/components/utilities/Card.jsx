import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ image, sutitle, text, path }) => {
  return (
    <div className="card-element">
      <Link to={path}>
        <div className="card__header">
          <img className="card__image" src={image} alt="exotic places" />
          <span className="image-subtitle">{sutitle}</span>
        </div>
        <div className="card-text">
          <h2>{text}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Card;
