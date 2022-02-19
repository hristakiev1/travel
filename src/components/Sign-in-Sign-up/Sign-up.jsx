import React from "react";
import InputField from "../utilities/InputField";

const SingUp = () => {
  return (
    <div className="sign-in">
      <h1>You don`t have account yet?</h1>
      <p>Sign up with your email and password</p>
      <form className="sign-in__form" action="submit">
        <InputField
          id={"name"}
          type={"text"}
          placeholder={"Name"}
          required={"required"}
        />
        <InputField
          id={"email"}
          type={"email"}
          placeholder={"Email"}
          required={"required"}
        />
        <InputField
          id={"password"}
          type={"password"}
          placeholder={"Password"}
          required={"required"}
        />
        <InputField
          id={"confirmPassword"}
          type={"password"}
          placeholder={"Confirm Password"}
          required={"required"}
        />

        <button className="btn-submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SingUp;
