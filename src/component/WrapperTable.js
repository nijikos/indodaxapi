import React, { Component } from "react";
import axios from "axios";
import "./../style/WrapperTable.css";

class WrapperTable extends Component {
  constructor() {
    super();
    this.state = {
      dataDepthBuy: [],
      dataDepthSell: [],
    };
  }

  componentDidMount() {
    axios.get("https://indodax.com/api/depth/btcidr").then((ambilData) => {
      console.log(ambilData);
      this.setState({
        dataDepthBuy: ambilData.data.buy,
        dataDepthSell: ambilData.data.sell,
      });
    });
  }

  render() {
    const dataBuy = this.state.dataDepthBuy.map(
      ([hargaBeli, btcBeli], index) => {
        // ===================   NOTE : testing innerhtml versi jsx
        function numberWithCommas(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        // ===================   NOTE : testing innerhtml versi jsx
        return (
          <tr key={index}>
            <td
              dangerouslySetInnerHTML={{
                __html: numberWithCommas(`${hargaBeli}`),
              }}
            ></td>
            <td>{btcBeli}</td>
          </tr>
        );
      }
    );
    const dataSell = this.state.dataDepthSell.map(
      ([hargaJual, btcJual], index) => {
        // ===================   NOTE : testing innerhtml versi jsx
        function numberWithCommas(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        // ===================   NOTE : testing innerhtml versi jsx
        return (
          <tr key={index}>
            <td
              dangerouslySetInnerHTML={{
                __html: numberWithCommas(`${hargaJual}`),
              }}
            ></td>
            <td>{btcJual}</td>
          </tr>
        );
      }
    );

    return (
      <div className="main-table-wrapper">
        <div className="table-group-sell table-group">
          <p className="table-title">Market Jual</p>
          <div className="table-table">
            <div className="table-header">
              <div className="table-row">
                <p>HARGA</p>
                <p>BTC</p>
              </div>
            </div>
            <div className="table-wrapper" ID="scrollbar">
              <table className="table">
                <tbody>{dataSell}</tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="table-group-sell table-group">
          <p className="table-title">Market Jual</p>
          <div className="table-table">
            <div className="table-header">
              <div className="table-row">
                <p>HARGA</p>
                <p>BTC</p>
              </div>
            </div>
            <div className="table-wrapper" ID="scrollbar">
              <table className="table">
                <tbody>{dataBuy}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WrapperTable;
