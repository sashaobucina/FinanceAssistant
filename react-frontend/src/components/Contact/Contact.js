import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBCardTitle } from "mdbreact";

class Contact extends Component {
  render() {
    return (
      <div className="contact-page mt-5">
        <MDBContainer>
          <MDBRow>
            <MDBCol className="offset-md-2" md="8">
              <MDBCard>
                <MDBCardTitle className="blue-gradient">
                  <h3 className="m-4 white-text ">
                    Contact Us
                  </h3>
                </MDBCardTitle>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md="4">
                      <MDBIcon className="blue-text mb-3" icon="phone" size="2x" />
                      <p className="text-muted">(+1) 416-621-2257</p>
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
              <p className="text-muted mt-5">
                The Finance Assistant is backed by a one-man team, so response may be delayed
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

export default Contact;