import React, { useState } from "react";
import InputField from "../utilities/InputField";
import "./Sign-in.css";

const SignIn = () => {
  const [userAuth, setUserAuth] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userAuth;

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setUserAuth({
      ...userAuth,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="sign-in">
      <h1>I already have an account </h1>
      <p>Sign in with your email and password</p>
      <form className="sign-in__form" action="submit" onSubmit={handleSubmit}>
        <InputField
          name={"email"}
          type={"email"}
          placeholder={"User Name"}
          // required={"required"}
          onChange={handleChange}
        />
        <InputField
          name={"password"}
          type={"password"}
          placeholder={"Password"}
          // required={"required"}
          onChange={handleChange}
        />

        <button className="btn-submit" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
