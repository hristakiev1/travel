import React, { useState } from "react";
import InputField from "../utilities/InputField";

const SingUp = () => {
  const [newUser, setNewUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (newUser.password === newUser.confirmPassword) {
        console.log("submitetd");
        setError();
      } else {
        throw "error";
      }
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className="sign-in">
      <h1>You don`t have account yet?</h1>
      <p>Sign up with your email and password</p>
      <form className="sign-in__form" action="submit" onSubmit={handleSubmit}>
        <InputField
          name={"displayName"}
          type={"text"}
          placeholder={"Name"}
          onChange={handleChange}
          required={"required"}
        />
        <InputField
          name={"email"}
          type={"email"}
          placeholder={"Email"}
          onChange={handleChange}
          required={"required"}
        />
        <InputField
          name={"password"}
          type={"password"}
          placeholder={"Password"}
          onChange={handleChange}
          required={"required"}
        />
        <InputField
          name={"confirmPassword"}
          type={"password"}
          placeholder={"Confirm Password"}
          onChange={handleChange}
          required={"required"}
        />
        {error && <div className="input-error">Passwords didn`t match </div>}
        <button className="btn-submit" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SingUp;
