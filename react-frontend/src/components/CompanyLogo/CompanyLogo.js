import React, { Component } from "react";

class CompanyLogo extends Component {
  render() {
    const { symbol } = this.props
    const imageUrl = `https://financialmodelingprep.com/images-New-jpg/${symbol}.jpg`
    return (
      <img className="company-logo" title={symbol} src={imageUrl} alt="TODO" />
    )
  }
}

export default CompanyLogo;