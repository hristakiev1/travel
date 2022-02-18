import React from "react";
import Button from "../utilities/Button";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer(props) {
  return (
    <section className="footer">
      <div className="footer-container">
        <h2 className="footer__heading">
          Join the Adventure newsletter to receive our best vacation deals
        </h2>
        <div className="form-group">
          <p>You can unsubscribe any time.</p>
          <input type="email" label="Your Email"></input>
          <Button buttonStyle={"btn--outline"}>Subscribe</Button>
        </div>
        <div className="footer__map">
          <div className="footer__about">
            <ul>
              <h4>About Us</h4>
              <li>
                <Link to="/Products">How it works</Link>
              </li>
              <li>
                <Link to="/Products">Testimonials</Link>
              </li>
              <li>
                <Link to="/Products">Careers</Link>
              </li>
              <li>
                <Link to="/Products">Investors</Link>
              </li>
              <li>
                <Link to="/Products">Term fo Service</Link>
              </li>
            </ul>
          </div>
          <div className="footer__videos">
            <ul>
              <h4>Videos</h4>
              <li>
                <Link to="/Products">Submit Videos</Link>
              </li>
              <li>
                <Link to="/Products">Ambassadors</Link>
              </li>
              <li>
                <Link to="/Products">Agency</Link>
              </li>
              <li>
                <Link to="/Products">Influencer</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-logo">
          TRVL
          <img
            className="logo-image"
            src="/source-folder/images/logo.png"
            alt=""
          />
          <div>TRVLⒸ2022</div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
