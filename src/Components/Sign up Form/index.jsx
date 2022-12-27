import React, { Component } from "react";
import "./style.css";

export default class SignupFrom extends Component {
  render() {
    return (
      <form className="signup-form">
        <label htmlFor="email">Email address*</label>
        <input type="email" id="email" />
        <label htmlFor="password">Create password*</label>
        <input type="password" id="password" />
        <label htmlFor="repPass">Repeat password*</label>
        <input type="password" id="repPass" />
        <div>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="check-lab">
            I agree to terms & conditions
          </label>
        </div>
        <button className="reg-btn">Register Account</button>
        <button className="log-btn">login</button>
      </form>
    );
  }
}
