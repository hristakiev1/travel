import React from "react";
import "./InputField.css";

const InputField = ({ name, type, placeholder, required, onChange }) => {
  return (
    <div className="sign-in__form-group">
      <input
        name={name}
        className="sign-in__input"
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
