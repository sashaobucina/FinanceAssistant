import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdbreact";

class InvalidTicker extends Component {
  render() {
    const { error } = this.props.data;
    return (
      <div className="invalid-ticker">
        <h5 className="text-muted mb-3 font-weight-bold">
          {error}
        </h5>
        <p className="text-muted mb-4">
          Refer to the <Link to="/symbols">Valid Symbols</Link> page to get a list of all the valid symbols
        </p>
        <Link to="/symbols">
          <MDBBtn className="blue-gradient ml-4">
            Symbols<MDBIcon className="ml-2" icon="chart-line"></MDBIcon>
          </MDBBtn>
        </Link>
      </div>
    )
  }
}

export default InvalidTicker;