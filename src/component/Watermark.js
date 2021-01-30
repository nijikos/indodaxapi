import React, { Component } from "react";
import "./../style/Watermark.css";

export class Watermark extends Component {
  render() {
    return (
      <div className="watermark">
        <p>
          API by{" "}
          <a href="https://indodax.com/market/BTCIDR" target="blank">
            Indodax.com/market
          </a>{" "}
        </p>
        <p>layout by Nijiko Suryadikara</p>
      </div>
    );
  }
}

export default Watermark;
