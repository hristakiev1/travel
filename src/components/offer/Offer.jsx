import React, { useState } from "react";
import "./Offer.css";

const Offer = () => {
  const [offer, setOffer] = useState({
    title: "4 days in Sicilly",
    period: "3 march - 6 march",
    place: "Cathania",
    price: "60 lv",
  });

  const { title, period, place, price } = offer;
  return (
    <div className="offer-container">
      <img
        className="offer__image"
        src="https://thenomadvisor.com/wp-content/uploads/2020/08/wheretostayinsicily.jpg"
        alt="Picturesque view over Sicilly with roman amfiteater"
      />
      <ul className="offer__info">
        <li>
          <h2>{title}</h2>
        </li>
        <li>Date: {period}</li>
        <li>Location: {place}</li>
        <li>Price: {price}</li>
      </ul>
    </div>
  );
};

export default Offer;
