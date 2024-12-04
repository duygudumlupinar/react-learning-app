import { useState } from "react";
import React from "react";

const Login = () => {
  return (
    <div className="loginArea">
      <div className="descriptionText">
        Enter your username and password to login.
      </div>
      <form>
        <input
          className="loginInput"
          type="text"
          placeholder="Username"
        ></input>
        <br></br>
        <input
          className="loginInput"
          type="text"
          placeholder="Password"
        ></input>
      </form>
      <button className="mainButton">Login</button>
      <br></br>
      <button className="linkButton">Click here to create an account</button>
    </div>
  );
};

export default Login;
