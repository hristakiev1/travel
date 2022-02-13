import React from "react";
import "./GenericPages.css";

const GenericPages = ({ imageLocation, pageText }) => {
  return (
    <div className="page-container">
      <img
        className="image-cover"
        src={imageLocation}
        alt="like and subscribe"
      />
      <h1 data-aos="zoom-in">{pageText}</h1>
    </div>
  );
};

export default GenericPages;
