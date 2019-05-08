import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBCol, MDBRow, MDBJumbotron, MDBCardTitle, MDBBtn, MDBIcon } from "mdbreact";

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us-page">
        <MDBContainer fluid>
          <MDBRow className="about-us-row">
            <MDBCol size="12" middle>
              <MDBJumbotron className="rounded-pill hoverable about-us-jumbo mt-5 mr-1 ml-1">
                <MDBCol className="py-5">
                  <MDBCardTitle className="h1-responsive pt-3 mb-4 white-text font-italic">Finance, Reimagined</MDBCardTitle>
                  <p className="white-text font-italic" style={{ fontSize: "17px" }}>
                    The Finance Assistant is a financial query engine and data aggregator powered by natural language processing.
                    The Finance Assistant provides a centralized source of financial information in a fast, simple manner.
                    Simply type a message into the chat input of what you want to find out,
                    <br></br> and the Finance Assistant will do the rest.
                  </p>
                  <Link to="/">
                    <MDBBtn className="mt-4" outline color="white">
                      <MDBIcon icon="clone" className="mr-2" />Get started
                    </MDBBtn>
                  </Link>
                </MDBCol>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

export default AboutUs;