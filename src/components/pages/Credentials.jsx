import React from "react";
import SignIn from "../Sign-in-Sign-up/Sign-in";
import SingUp from "../Sign-in-Sign-up/Sign-up";
import "./Credentials.css";

const Credentials = () => {
  return (
    <div className="credentials">
      <SignIn />
      <SingUp />
    </div>
  );
};

export default Credentials;
