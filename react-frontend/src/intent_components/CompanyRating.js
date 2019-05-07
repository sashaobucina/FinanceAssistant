import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import CompanyLogo from "../components/CompanyLogo/CompanyLogo";
import { FaRegStar, FaStar } from "react-icons/fa";

class CompanyRating extends Component {
  showRating(rating) {
    const stars = [...Array(5)].map((_el, i) => <FaRegStar color="#e8e006" size={26} key={i} />);
    [...Array(rating)].forEach((_el, i) => stars[i] = <FaStar color="#e8e006" size={26} key={i} />);
    return stars
  }

  render() {
    const { rating, ticker } = this.props.data
    return (
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <CompanyLogo symbol={ticker.symbol} />
          <div className="company-rating">
            {ticker.companyName}'s Company Rating: {this.showRating(rating)}
          </div>
        </Col>
      </Row>
    )
  }
}

export default CompanyRating