import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <div className="about">
            <p>Type "<samp>help</samp>" to get started!</p>
          </div>
        </Col>
      </Row>
    )
  }
}

export default About