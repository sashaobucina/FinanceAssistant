import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBDataTable, MDBBtn, MDBIcon, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import axios from "axios";

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
          <h5 className="supported-companies-title text-muted">
            Supported Companies
          </h5>
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
          <MDBContainer>
            <MDBRow>
              <MDBCol className="offset-md-4" md="4">
                <p className="text-muted mt-1">
                  Go back to the home page
                  <Link to="/">
                    <MDBBtn className="blue-gradient ml-4" size="sm">
                      Home<MDBIcon className="ml-2" icon="home"></MDBIcon>
                    </MDBBtn>
                  </Link>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      )
    }
  }
}

export default SupportedSymbols;