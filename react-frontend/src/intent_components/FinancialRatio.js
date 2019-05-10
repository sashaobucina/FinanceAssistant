import React, { Component } from "react";

class FinancialRatio extends Component {
  render() {
    const { financialRatios, ticker } = this.props.data;
    return (
      <div className="financial-ratios">
        {JSON.stringify(ticker)}
        {JSON.stringify(financialRatios)}
      </div>
    )
  }
}

export default FinancialRatio;