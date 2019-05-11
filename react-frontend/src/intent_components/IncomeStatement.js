import React, { Component } from "react";
import FinancialStatement from "./FInancialStatement";

class IncomeStatement extends Component {
  render() {
    const { data } = this.props;
    return <FinancialStatement data={data} title="Income Statement" />
  }
}

export default IncomeStatement;