import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const STYLE = ["btn--primary", "btn--outline"];
const SIZE = ["btn--medium", "btn--large"];

const Button = ({ children, buttonStyle, buttonSize, submit, path }) => {
  const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
  return (
    <Link to={`/${path}`}>
      <button
        className={`btns btn ${checkButtonStyle} ${checkButtonSize}`}
        type={submit}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
