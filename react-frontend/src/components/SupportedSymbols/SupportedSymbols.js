import React, { Component } from "react";
import axios from "axios";

class SupportedSymbols extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickers: null
    }
  }

  componentDidMount() {
    const url = 'http://localhost:8080/symbols/'
    axios.get(url)
      .then(tickers => this.setState({ tickers }))
  }

  render() {
    const { tickers } = this.state
    if (tickers === null) {
      return null
    }
    return (
      <div className="supported-symbols">
        {JSON.stringify(tickers)}
      </div>
    )
  }
}

export default SupportedSymbols;