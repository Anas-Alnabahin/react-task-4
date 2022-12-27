import React, { Component } from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import corner from "../../assets/corner.png";
import dots from "../../assets/dots.png";
import SignupFrom from "../../Components/Sign up Form";

export default class Signup extends Component {
  render() {
    return (
      <div className="signup-div">
        <div className="first-half">
          <div className="first-half-inner-div">
            <img src={logo} id="logo" alt="logo" />
            <img src={dots} alt="dots" id="dots" />
            <div className="quate-div">
              <span>“</span>
              <p>
                I always observe the people who pass by when I ride an
                escalator. I'll never see most of them again, so I imagine a lot
                of things about their lives... about the day ahead of them.
              </p>
              <h4>Hideo Kojima</h4>
              <img src={corner} alt="corner" id="corner" />
            </div>
          </div>
        </div>
        <div className="second-half">
          <span className="sec-half-span">&#60; Back</span>
          <div className="sec-half-inner-div">
            <h2>Register Individual Account!</h2>
            <p>
              For the purpose of gamers regulation, your details are required.
            </p>
            <SignupFrom />
          </div>
        </div>
      </div>
    );
  }
}
