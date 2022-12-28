import React, { Component } from "react";
import "./style.css";

export default class SignupFrom extends Component {
  state = {
    email: "",
    password: "",
    repPass: "",
    checked: false,
  };

  handelSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  handleCheckbox = (e) => {
    if (this.state.checked === false) {
      this.setState({ checked: true });
      console.log("checked");
    } else {
      this.setState({ checked: false });
      console.log("unchecked");
    }
  };

  handelChangeInput = (e) => {
    const { value, id } = e.target;
    console.log(value, id);
    this.setState({ [id]: value });
  };

  render() {
    return (
      <form className="signup-form" onSubmit={(e) => this.handelSubmit(e)}>
        <label htmlFor="email">Email address*</label>
        <input
          required
          type="email"
          id="email"
          placeholder="Enter email address"
          onChange={this.handelChangeInput}
          value={this.state.email}
        />
        <label htmlFor="password">Create password*</label>
        <input
          required
          type="password"
          id="password"
          placeholder="Password"
          onChange={this.handelChangeInput}
          value={this.state.password}
        />
        <label htmlFor="repPass">Repeat password*</label>
        <input
          required
          type="password"
          id="repPass"
          placeholder="Repeat password"
          onChange={this.handelChangeInput}
          value={this.state.repPass}
        />
        <div>
          <input type="checkbox" id="checkbox" onChange={this.handleCheckbox} />
          <label htmlFor="checkbox" className="check-lab">
            I agree to terms & conditions
          </label>
        </div>
        <button className="reg-btn" type="submit">
          Register Account
        </button>
        <button className="log-btn" type="button">
          login
        </button>
      </form>
    );
  }
}
