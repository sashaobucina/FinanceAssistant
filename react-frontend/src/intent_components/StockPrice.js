import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { MdTrendingUp } from "react-icons/md";
import CompanyLogo from "../components/CompanyLogo/CompanyLogo";

class StockPrice extends Component {
  render() {
    const { price, ticker, updateDate } = this.props.data
    return (
      <>
        <Row>
          <Col md={12}>
            <CompanyLogo symbol={ticker.symbol} />
            <div className="stock-price">
              <h5>
                {ticker.companyName}'s Real-time Stock Price: ${Number(price).toFixed(2)}
                <MdTrendingUp color="green" size={38} />
              </h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p>Updated at: {updateDate}</p>
          </Col>
        </Row>
      </>
    )
  }
}

export default StockPrice