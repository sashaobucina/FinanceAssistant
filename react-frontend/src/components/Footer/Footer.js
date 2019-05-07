import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBIcon } from "mdbreact";

class Footer extends Component {
  render() {
    return(
      <footer className="footer">
        <MDBNavbar className="blue-gradient" expand="md" style={{ color: "white" }} scrolling fixed="bottom">
          <MDBNavbarBrand>
            <p className="mt-3" style={{ fontSize: '16px' }}>
              &copy; {new Date().getFullYear()} Copyright: Sasha Obucina
            </p>
          </MDBNavbarBrand>
          <MDBNavbarNav right>
            <MDBNavItem className="mr-3 ml-3">
              <MDBIcon className="white-text" fab icon="google" size="lg"/>
            </MDBNavItem>
            <MDBNavItem className="mr-3 ml-3">
              <MDBIcon className="white-text" fab icon="github" size="lg"/>
            </MDBNavItem>
            <MDBNavItem className="mr-3 ml-3">
              <MDBIcon className="white-text" fab icon="linkedin-in" size="lg"/>
            </MDBNavItem>
            <MDBNavItem className="mr-3 ml-3">
              <MDBIcon className="white-text" far icon="user" size="lg"/>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>
      </footer>
    )
  }
}

export default Footer;