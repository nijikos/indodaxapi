import React, { Component } from "react";
import "./../style/Circle.css";

class Circle extends Component {
  render() {
    return (
      <div className="circle-wrapper">
        <div className="circle-one"></div>
        <div className="circle-two"></div>
        <div className="circle-three"></div>
      </div>
    );
  }
}

export default Circle;
