import React, { Component } from "react";
import Container from "./component/Container";
import "./App.css";
import Circle from "./component/Circle";
class App extends Component {
  render() {
    return (
      <div>
        <Circle />
        <Container />
      </div>
    );
  }
}

export default App;
