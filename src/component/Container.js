import React, { Component } from "react";
import "./../style/Container.css";
import Title from "./Title";
import Credits from "./Credits";
import Watermark from "./Watermark";
import WrapperTable from "./WrapperTable";
import WrapperTicker from "./WrapperTicker";
import WrapperVolBtc from "./WrapperVolBtc";
import Fade from "react-reveal/Fade";

class Container extends Component {
  render() {
    return (
      <div className="container-main">
        <div className="container-child">
          <Watermark />
          <Title />
          <Fade bottom>
            <WrapperVolBtc />
            <WrapperTicker />
            <WrapperTable />
            <Credits />
          </Fade>

          {/* ========================= */}
        </div>
      </div>
    );
  }
}

export default Container;
