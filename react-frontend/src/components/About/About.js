import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <div className="about">
            <p>TODO: Add About page on landing!!!</p>
          </div>
        </Col>
      </Row>
    )
  }
}

export default About