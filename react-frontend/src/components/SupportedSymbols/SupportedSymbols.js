import React, { Component } from "react";
import axios from "axios";
import { MDBDataTable } from "mdbreact";

class SupportedSymbols extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickerData: null
    }
  }

  componentDidMount() {
    const url = 'http://localhost:8080/symbols/'
    axios.get(url)
      .then(tickers => this.setState({ tickerData: tickers.data }))
  }

  render() {
    const { tickerData } = this.state
    if (tickerData === null) {
      return null
    } else {
      const tickers = tickerData.tickers
      console.log(tickers)
      const columns = [
        {
          label: "Company",
          field: "companyName"
        },
        {
          label: "Symbol",
          field: "symbol"
        },
        {
          label: "Logo",
          field: "logo"
        }
      ]
      const rows = Object.keys(tickers).map(key => {
        const { companyName, symbol } = tickers[key]
        return {
          companyName,
          symbol,
          logo: <img src={`https://financialmodelingprep.com/images-New-jpg/${symbol}.jpg`} alt="comapanyLogo" />
        }
      })
      const data = {
        columns,
        rows
      }
      return (
        <div className="supported-symbols mt-5 ml-5 mr-5">
          <MDBDataTable
            bordered
            striped
            infoLabel={["Showing", "of", "to", "valid symbols"]}
            entries={25}
            entriesLabel="Show symbols "
            entriesOptions={[25, 50, 100, 500]}
            pagesAmount={10}
            searchLabel="Search"
            theadColor="blue-gradient"
            data={data}
          />
        </div>
      )
    }
  }
}

export default SupportedSymbols;