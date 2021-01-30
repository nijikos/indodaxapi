import React, { Component } from "react";
import "./../style/Container.css";
import Circle from "./Circle";
import Credits from "./Credits";
import Watermark from "./Watermark";
import WrapperTable from "./WrapperTable";
import WrapperTicker from "./WrapperTicker";
import WrapperVolBtc from "./WrapperVolBtc";

class Container extends Component {
  render() {
    return (
      <div className="container-main">
        <div className="container-child">
          <Watermark />
          <WrapperVolBtc />
          <WrapperTicker />
          <WrapperTable />
          <Credits />
          {/* ========================= */}
        </div>
      </div>
    );
  }
}

export default Container;
