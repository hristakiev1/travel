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
        <p>You can unsubscribe any time.</p>
        <div className="form-group">
          <input type="email" placeholder="Your Email"></input>
          <Button path={"Unsubscribe"} buttonStyle={"btn--outline"}>
            Subscribe
          </Button>
        </div>
        <div className="footer__map">
          <div className="footer__links">
            <ul>
              <h4>About Us</h4>
              <li>
                <Link to="/Products" className="link-item">
                  How it works
                </Link>
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
          <div className="footer__links">
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
          <div className="footer__links">
            <ul>
              <h4>Contact Us</h4>
              <li>
                <Link to="/Products">Contact</Link>
              </li>
              <li>
                <Link to="/Products">Support</Link>
              </li>
              <li>
                <Link to="/Products">Destinations</Link>
              </li>
              <li>
                <Link to="/Products">Sponsorships</Link>
              </li>
            </ul>
          </div>
          <div className="footer__links">
            <ul>
              <h4>Social Media</h4>
              <li>
                <Link to="/Products">Instagram</Link>
              </li>
              <li>
                <Link to="/Products">Facebook</Link>
              </li>
              <li>
                <Link to="/Products">Youtube</Link>
              </li>
              <li>
                <Link to="/Products">Twitter</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-logo">
          <div>
            TRVL
            <img
              className="logo-image"
              src="/source-folder/images/logo.png"
              alt=""
            />
          </div>

          <div className="footer__copyright">TRVLⒸ2022</div>
          <div className="footer__media-links">
            <Link to="www.facebook.com">
              <i class="fab fa-facebook-f" />
            </Link>
            <Link to="www.facebook.com">
              <i class="fab fa-twitter" />
            </Link>
            <Link to="www.facebook.com">
              <i class="fab fa-instagram" />
            </Link>
            <Link to="www.facebook.com">
              <i class="fab fa-linkedin-in" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
