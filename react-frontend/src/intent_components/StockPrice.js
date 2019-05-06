import React, { Component } from "react";

class StockPrice extends Component {
  render() {
    const { price, ticker } = this.props.data
    return (
      <div>{ticker.companyName}'s Real-time Stock Price: ${Number(price).toFixed(2)}</div>
    )
  }
}

export default StockPrice