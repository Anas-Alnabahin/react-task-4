import React, { Component } from "react";
import "./style.css";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handelChangeInput = (e) => {
    const { value, id } = e.target;
    console.log(value, id);
    this.setState({ [id]: value });
  };

  render() {
    return (
      <form className="loginForm">
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          onChange={this.handelChangeInput}
          placeholder="Write your email"
          value={this.state.email}
        />
        <label htmlFor="password">Enter your password</label>
        <input
          type="password"
          id="password"
          onChange={this.handelChangeInput}
          placeholder="•••••••••"
          value={this.state.password}
        />
        <button className="reg-btn" type="submit">
          Login
        </button>
        <label>
          Don’t have an account?
          <span style={{ color: "#1565D8" }}>Register</span>
        </label>
      </form>
    );
  }
}
