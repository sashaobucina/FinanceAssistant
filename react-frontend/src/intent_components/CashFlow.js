import React, { Component } from "react";
import FinancialStatement from "./FInancialStatement";

class CashFlow extends Component {
  render() {
    const { data } = this.props;
    return <FinancialStatement data={data} title={"Cash Flow"} />
  }
}

export default CashFlow;