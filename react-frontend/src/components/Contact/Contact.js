import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBCardTitle, MDBBtn } from "mdbreact";

class Contact extends Component {
  render() {
    return (
      <div className="contact-page mt-5">
        <MDBContainer>
          <MDBRow>
            <MDBCol className="offset-md-2" md="8">
              <MDBCard>
                <MDBCardTitle className="blue-gradient">
                  <div className="m-4 white-text">
                    Contact Us
                  </div>
                </MDBCardTitle>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md="4">
                      <MDBIcon className="blue-text mb-3" icon="phone" size="2x" />
                      <p className="text-muted">(+1) 416-000-0000</p>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBIcon className="blue-text mb-3" icon="envelope" size="2x" />
                      <p className="text-muted">sasha.obucina@gmail.com</p>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBIcon className="blue-text mb-3" icon="map-marker-alt" size="2x" />
                      <p className="text-muted">Toronto, ON</p>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <p className="text-muted mt-5">
                The Finance Assistant is backed by a one-man team, so response may be delayed...
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4">
              <p className="text-muted mt-4">
                Go back to the Home page
                <Link to="/">
                  <MDBBtn className="blue-gradient ml-3" size="sm">
                    Home<MDBIcon className="ml-2" icon="home"></MDBIcon>
                  </MDBBtn>
                </Link>
              </p>
            </MDBCol>
            <MDBCol md="4">
              <p className="text-muted mt-4">
                Learn more about us
                <Link to="/about">
                  <MDBBtn className="blue-gradient ml-3" size="sm">
                    About<MDBIcon className="ml-2" icon="question"></MDBIcon>
                  </MDBBtn>
                </Link>
              </p>
            </MDBCol>
            <MDBCol md="4">
              <p className="text-muted mt-4">
                See the supported symbols
                <Link to="/symbols">
                  <MDBBtn className="blue-gradient ml-3" size="sm">
                    Symbols<MDBIcon className="ml-2" icon="chart-line"></MDBIcon>
                  </MDBBtn>
                </Link>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

export default Contact;