import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class StockPrice extends Component {
  render() {
    const { price, ticker } = this.props.data
    return (
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
        <div className="stock-price">
          {ticker.companyName}'s Real-time Stock Price: ${Number(price).toFixed(2)}
        </div>
        </Col>
      </Row>
    )
  }
}

export default StockPrice