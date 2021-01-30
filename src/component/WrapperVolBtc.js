import React, { Component } from "react";
import axios from "axios";
import "./../style/WrapperVolBtc.css";

class WrapperVolBtc extends Component {
  constructor() {
    super();
    this.state = {
      dataTicker: [],
    };
  }
  componentDidMount() {
    axios.get("https://indodax.com/api/ticker/btcidr").then((ambilData) => {
      console.log(ambilData);
      this.setState({
        dataTicker: ambilData.data.ticker,
      });
    });
  }

  render() {
    const dataVolBTC = this.state.dataTicker.vol_btc;
    const dataVolBTCdecimal = Number(`${dataVolBTC}`).toFixed(2);
    return (
      <div className="vol-wrapper">
        <div className="vol-title">
          <p id="voltitle">Volume 24 hours</p>
        </div>
        <div className="vol-text">
          <p className="vol-number">{dataVolBTCdecimal}</p>
          <p>BTC</p>
        </div>
      </div>
    );
  }
}

export default WrapperVolBtc;

{
  /* <p
dangerouslySetInnerHTML={{
  __html: numberWithCommas(`${dataVolBTC}`),
}}
></p> */
}
