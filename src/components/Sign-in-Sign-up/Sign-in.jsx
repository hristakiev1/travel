import React from "react";
import InputField from "../utilities/InputField";
import "./Sign-in.css";

const SignIn = () => {
  return (
    <div className="sign-in">
      <h1>I already have an account </h1>
      <p>Sign in with your email and password</p>
      <form className="sign-in__form" action="submit">
        <InputField
          name={"email"}
          type={"email"}
          placeholder={"User Name"}
          required={"required"}
        />
        <InputField
          name={"password"}
          type={"password"}
          placeholder={"Password"}
          required={"required"}
        />

        <button className="btn-submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
