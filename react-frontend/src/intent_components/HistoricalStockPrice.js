import React, { Component } from "react";

class HistoricalStockPrice extends Component {
  render() {
    const { historicalStockPrices } = this.props.data;
    return (
      <div className="historical-stock-prices">
        {JSON.stringify(historicalStockPrices)}
      </div>
    )
  }
}

export default HistoricalStockPrice;