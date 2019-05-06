import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class CompanyRating extends Component {
  showRating(rating) {
    return rating === 0 ? '🤮 (0 stars)': '⭐'.repeat(rating)
  }

  render() {
    const { rating, ticker } = this.props.data
    return (
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <div className="company-rating">
            {ticker.companyName}'s Company Rating: {this.showRating(rating)}
          </div>
        </Col>
      </Row>
    )
  }
}

export default CompanyRating