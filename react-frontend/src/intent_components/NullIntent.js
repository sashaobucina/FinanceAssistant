import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";

class NullIntent extends Component {
  render() {
    const { error, status } = this.props.data
    return (
      <section className="page-404">
        <MDBRow>
          <MDBCol className="offset-md-1" md="10">
              <div className="four-zero-four-bg">
                <h1 className="text-muted">{status}</h1>
              </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol className="offset-md-2" md="8">
            <div className="text-muted content-box-404">
              <h4>{error}</h4>
              <p>Please try again later!</p>
            </div>
          </MDBCol>
        </MDBRow>
      </section>
    )
  }
}

export default NullIntent