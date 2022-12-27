import React, { Component } from "react";
import "./style.css";

export default class LoginForm extends Component {
  render() {
    return (
      <form className="loginForm">
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Enter your password</label>
        <input type="password" id="password" />
        <button className="reg-btn">Login</button>
        <label>
          Don’t have an account?
          <span style={{ color: "#1565D8" }}>Register</span>
        </label>
      </form>
    );
  }
}
