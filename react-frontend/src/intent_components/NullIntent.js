import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

class NullIntent extends Component {
  render() {
    console.log(this.props)
    const { error, status } = this.props.data
    return (
      <section className="page-404">
        <Container>
          <Row>
            <Col md={{ span: 10, offset:1 }}>
                <div className="four-zero-four-bg">
                  <h1>{status}</h1>
                </div>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 8, offset:2 }}>
              <div className="content-box-404">
                <h4>{error}</h4>
                <p>Please try again later!</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default NullIntent