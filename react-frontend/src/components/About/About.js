import React, { Component } from "react";
import { MDBIcon, MDBRow, MDBCol } from "mdbreact";

class About extends Component {
  render() {
    return (
      <MDBRow>
        <MDBCol className="offset-md-1" md="10">
          <div className="about-help">
            <p>Type '<samp>help</samp>' to get started!</p>
          </div>
          <div className="about-chat-history">
            <p>Use the '<samp>&uarr; &darr;</samp>' keys to navigate quickly through your previous messages!</p>
          </div>
          <div className="about-cryptos">
            <p>
              Now supporting cryptocurrency information!
              <MDBIcon className="ml-2 amber-text" fab icon="bitcoin" />
              <MDBIcon className="ml-2" fab icon="ethereum" />
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    )
  }
}

export default About