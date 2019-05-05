import React, { Component } from "react";
import { css } from "@emotion/core";
import { SyncLoader } from "react-spinners";

const override = css`
  display: block-inline;
  margin: 0 auto;
  border-color: white;
  text-align: center;
`;

class Spinner extends Component {
  render() {
    return (
      <div className="chat-spinner">
        <SyncLoader
          css={override}
          sizeUnit={"px"}
          size={20}
          color={"#ffa723"}
          loading={this.props.isLoading} />
      </div>
    )
  }
}

export default Spinner;

