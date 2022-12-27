import React, { Component } from "react";
import "./style.css";

export default class Icon extends Component {
  render() {
    return (
      <div className="icon-div">
        <img src={this.props.src} />
      </div>
    );
  }
}
