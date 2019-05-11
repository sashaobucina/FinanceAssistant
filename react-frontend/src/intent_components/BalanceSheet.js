import React, { Component } from "react";
import FinancialStatement from "./FInancialStatement";

class BalanceSheet extends Component {
  render() {
    const { data } = this.props;
    return <FinancialStatement data={data} title={"Balance Sheet"} />
  }
}

export default BalanceSheet;