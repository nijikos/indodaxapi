import React, { Component } from "react";
import "./../style/Credits.css";

class Credits extends Component {
  render() {
    return (
      <div className="credit">
        <div className="credit-text">
          <p>Made with:</p>
          <p>React JS</p>
          <p>Axios API fetcher</p>
          <p>HTML, CSS</p>
        </div>
      </div>
    );
  }
}

export default Credits;
