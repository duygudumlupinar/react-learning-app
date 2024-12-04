import React from "react";

const SignIn = () => {
  return (
    <div className="loginArea">
      <div className="descriptionText">
        Enter your e-mail and password to create an account.
      </div>
      <form>
        <input className="loginInput" type="text" placeholder="E-mail"></input>
        <br></br>
        <input
          className="loginInput"
          type="text"
          placeholder="Password"
        ></input>
      </form>
      <button className="mainButton">Sign In</button>
      <br></br>
      <button className="linkButton">
        Already have an account? Click here to login
      </button>
    </div>
  );
};

export default SignIn;
