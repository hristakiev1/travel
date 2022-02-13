import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);
  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link
            to="/"
            className="navbar__logo"
            onClick={clicked ? handleClick : null}
          >
            TRVL
            <img
              className="logo-image"
              src="/source-folder/images/logo.png"
              alt=""
            />
          </Link>
          <div className="menu-container">
            <div className="menu-icon">
              <i
                className={clicked ? "fa fa-times fa-3x" : "fa fa-bars fa-3x"}
                onClick={handleClick}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <ul className={`menu-links ${clicked ? null : "menu-toggler"}`}>
          <li className="nav-items">
            <Link className="nav-links" to="/home" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-links" to="/home" onClick={handleClick}>
              Services
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-links" to="/home" onClick={handleClick}>
              Productions
            </Link>
          </li>
          <li className="nav-items">
            <Link
              className="nav-links nav-btn"
              to="/home"
              onClick={handleClick}
            >
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
