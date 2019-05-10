import React, { Component } from "react";
import { MDBIcon } from "mdbreact";

class NoIntentMapping extends Component {
  render() {
    const { error } = this.props.data;
    return (
      <div className="no-intent-mapping">
        <div className="no-intent-mapping-icon">
          <MDBIcon className="red-text mb-3" icon="question-circle" size="5x" />
        </div>
        <div className="no-intent-mapping-body border rounded-pill">
          <h5 className="text-muted mb-3 mt-4 font-weight-bold">
            {error}
          </h5>
          <p className="text-muted mb-4">
            <p>Type '<samp>help</samp>' to see all the possible actions!</p>
          </p>
        </div>
      </div>
    )
  }
}

export default NoIntentMapping;