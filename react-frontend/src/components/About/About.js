import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <div className="about-help">
            <p>Type '<samp>help</samp>' to get started!</p>
          </div>
          <div className="about-chat-history">
            <p>Use the '<samp>&uarr; &darr;</samp>' keys to navigate quickly through your previous messages!</p>
          </div>
        </Col>
      </Row>
    )
  }
}

export default About