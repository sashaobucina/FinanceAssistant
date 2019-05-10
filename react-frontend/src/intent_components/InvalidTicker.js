import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdbreact";

class InvalidTicker extends Component {
  render() {
    const { error } = this.props.data;
    return (
      <div className="invalid-ticker">
        <div className="invalid-ticker-icon">
          <MDBIcon className="red-text mb-3" icon="exclamation-triangle" size="5x" />
        </div>
        <div className="border rounded-pill">
          <h5 className="text-muted mb-3 mt-4 font-weight-bold">
            {error}
          </h5>
          <p className="text-muted mb-4">
            Refer to the <Link to="/symbols">Valid Symbols</Link> page to get a list of all the valid symbols
          </p>
          <Link to="/symbols">
            <MDBBtn className="blue-gradient ml-4 mb-3">
              Symbols<MDBIcon className="ml-2" icon="chart-line"></MDBIcon>
            </MDBBtn>
          </Link>
        </div>
      </div>
    )
  }
}

export default InvalidTicker;