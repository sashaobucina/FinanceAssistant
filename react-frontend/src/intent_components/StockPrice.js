import React, { Component } from "react";
import { MdTrendingUp } from "react-icons/md";
import CompanyLogo from "../components/CompanyLogo/CompanyLogo";
import { MDBRow, MDBCol } from "mdbreact";

class StockPrice extends Component {
  render() {
    const { price, ticker, updateDate } = this.props.data
    return (
      <>
        <MDBRow>
          <MDBCol md="12">
            <CompanyLogo symbol={ticker.symbol} />
            <div className="stock-price">
              <h5>
                {ticker.companyName}'s Real-time Stock Price: ${Number(price).toFixed(2)}
                <MdTrendingUp color="green" size={38} />
              </h5>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="12">
            <p>Updated at: {updateDate}</p>
          </MDBCol>
        </MDBRow>
      </>
    )
  }
}

export default StockPrice