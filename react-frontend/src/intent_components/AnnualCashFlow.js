import React, { Component } from "react";
import FinancialStatement from "./FInancialStatement";

class AnnualCashFlow extends Component {
  render() {
    const { data } = this.props;
    return <FinancialStatement data={data} title={"Annual Cash Flow"} />
  }
}

export default AnnualCashFlow;