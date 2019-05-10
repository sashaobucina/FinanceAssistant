import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class NullIntent extends Component {
  render() {
    const { error, status } = this.props.data
    return (
      <section className="page-404">
        <Row>
          <Col md={{ span: 10, offset:1 }}>
              <div className="four-zero-four-bg">
                <h1 className="text-muted">{status}</h1>
              </div>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset:2 }}>
            <div className="text-muted content-box-404">
              <h4>{error}</h4>
              <p>Please try again later!</p>
            </div>
          </Col>
        </Row>
      </section>
    )
  }
}

export default NullIntent