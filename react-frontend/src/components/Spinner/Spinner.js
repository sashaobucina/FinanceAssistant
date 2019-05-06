import React, { Component } from "react";
import { css } from "@emotion/core";
import { BeatLoader } from "react-spinners";
import { Row, Col } from "react-bootstrap";

const override = css`
  display: block-inline;
  margin: 0 auto;
  border-color: white;
  text-align: center;
`;

class Spinner extends Component {
  render() {
    return (
      <Row>
        <Col md={{ span: 2, offset:5 }}>
          <div className="chat-spinner">
          <BeatLoader
            css={override}
            sizeUnit={"px"}
            size={15}
            color={"#ffa723"}
            loading={this.props.isLoading} />
          </div>
        </Col>
      </Row>
    )
  }
}

export default Spinner;

