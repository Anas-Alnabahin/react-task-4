import React, { Component } from "react";
import "./style.css";
import logo from "../../assets/blue-logo.png";
import bg2 from "../../assets/bg2.png";
import Icon from "../../Components/Icon";
import google from "../../assets/google.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import LoginForm from "../../Components/Login Form";

export default class Login extends Component {
  render() {
    return (
      <div className="login-div">
        <div className="left-div">
          <img src={logo} alt="logo" />
          <div className="quate-div" id="q-div">
            <span id="q-s">“</span>
            <p id="q-s">
              I always observe the people who pass by when I ride an escalator.
              I'll never see most of them again, so I imagine a lot of things
              about their lives... about the day ahead of them.
            </p>
            <h4 id="q-s">Hideo Kojima</h4>
          </div>
          <img src={bg2} alt="background" id="bg2" />
        </div>
        <div className="right-div">
          <h2>Join the game!</h2>
          <p>Go inside the best gamers social network!</p>
          <div className="icons-div">
            <Icon src={google} />
            <Icon src={twitter} />
            <Icon src={linkedin} />
            <Icon src={github} />
          </div>
          <p style={{ marginLeft: "170px", marginTop: "50px" }}>or</p>
          <LoginForm />
        </div>
      </div>
    );
  }
}
