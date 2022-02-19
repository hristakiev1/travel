import React from "react";
import "./InputField.css";

const InputField = ({ id, type, placeholder, required }) => {
  return (
    <div className="sign-in__form-group">
      <input
        id={id}
        className="sign-in__input"
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputField;
