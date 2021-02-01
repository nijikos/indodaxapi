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
        let hargaBeliNew = hargaBeli.toLocaleString("id-ID");
        let btcBeliNew = parseFloat(btcBeli).toString().replace(".", ",");
        let nilaiIDR = parseFloat(hargaBeli * btcBeli).toLocaleString("id-ID");
        return (
          <tr key={index}>
            <td>{hargaBeliNew}</td>
            <td>{btcBeliNew}</td>
            <td>{nilaiIDR}</td>
          </tr>
        );
      }
    );
    const dataSell = this.state.dataDepthSell.map(
      ([hargaJual, btcJual], index) => {
        let hargaJualNew = hargaJual.toLocaleString("id-ID");
        let btcJualNew = parseFloat(btcJual).toString().replace(".", ",");
        let nilaiIDR = (hargaJual * btcJual).toLocaleString("id-ID");
        return (
          <tr key={index}>
            <td>{hargaJualNew}</td>
            <td>{btcJualNew}</td>
            <td>{nilaiIDR}</td>
          </tr>
        );
      }
    );

    return (
      <div className="main-table-wrapper">
        <div className="table-group-sell table-group">
          <p className="table-title">Market Beli</p>
          <div className="table-table">
            <div className="table-wrapper" ID="scrollbar">
              <table className="table">
                <tr className="table-header-sticky">
                  <th>HARGA</th>
                  <th>BTC</th>
                  <th>IDR</th>
                </tr>
                <tbody>{dataSell}</tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="table-group-sbuy table-group">
          <p className="table-title">Market Beli</p>
          <div className="table-table">
            <div className="table-wrapper" ID="scrollbar">
              <table className="table">
                <tr className="table-header-sticky">
                  <th>HARGA</th>
                  <th>BTC</th>
                  <th>IDR</th>
                </tr>
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
