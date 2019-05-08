import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBIcon } from "mdbreact";

class Footer extends Component {
  render() {
    return(
      <footer className="footer" style={{ marginTop: "150px" }}>
        <MDBNavbar color="white" expand="md" style={{ color: "#757575" }} fixed="bottom">
          <MDBNavbarBrand>
            <p className="mt-3 ml-3" style={{ fontSize: '16px' }}>
              &copy; {new Date().getFullYear()} Copyright: Sasha Obucina
            </p>
          </MDBNavbarBrand>
          <MDBNavbarNav right>
            <MDBNavItem className="mr-3 ml-3">
              <a href="mailto:sasha.obucina@gmail.com">
                <MDBIcon className="red-text hoverable" fab icon="google" size="lg"/>
              </a>
            </MDBNavItem>
            <MDBNavItem className="mr-3 ml-3">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/sashaobucina">
                <MDBIcon className="black-text hoverable" fab icon="github" size="lg"/>
              </a>
            </MDBNavItem>
            <MDBNavItem className="mr-3 ml-3">
              <a target="_blank" rel="noopener noreferrer" href="https://bitbucket.org/obucinas/">
                <MDBIcon className="blue-text hoverable" fab icon="bitbucket" size="lg"/>
              </a>
            </MDBNavItem>
            <MDBNavItem className="mr-3 ml-3">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sasha-obucina-0b51a2173/">
                <MDBIcon className="light-blue-text hoverable" fab icon="linkedin-in" size="lg"/>
              </a>
            </MDBNavItem>
            <MDBNavItem className="mr-3 ml-3">
              <a href="http://localhost:3000">
                <MDBIcon className="black-text hoverable" icon="user" size="lg"/>
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>
      </footer>
    )
  }
}

export default Footer;