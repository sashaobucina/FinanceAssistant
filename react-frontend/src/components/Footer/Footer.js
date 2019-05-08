import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBIcon } from "mdbreact";

class Footer extends Component {
  render() {
    return(
      <footer className="footer" style={{ marginTop: "150px" }}>
        <MDBNavbar className="blue-gradient" expand="md" style={{ color: "white" }} scrolling fixed="bottom">
          <MDBNavbarBrand>
            <p className="mt-3 ml-3" style={{ fontSize: '16px' }}>
              &copy; {new Date().getFullYear()} Copyright: Sasha Obucina
            </p>
          </MDBNavbarBrand>
          <MDBNavbarNav right>
            <MDBNavItem className="mr-3 ml-3">
              <a className="hoverable" href="mailto:sasha.obucina@gmail.com">
                <MDBIcon className="white-text" fab icon="google" size="lg"/>
              </a>
            </MDBNavItem>
            <MDBNavItem className="mr-3 ml-3">
              <a className="hoverable" target="_blank" href="https://github.com/sashaobucina">
                <MDBIcon className="white-text" fab icon="github" size="lg"/>
              </a>
            </MDBNavItem>
            <MDBNavItem className="mr-3 ml-3">
              <a className="hoverable" target="_blank" href="https://www.linkedin.com/in/sasha-obucina-0b51a2173/">
                <MDBIcon className="white-text" fab icon="linkedin-in" size="lg"/>
              </a>
            </MDBNavItem>
            <MDBNavItem className="mr-3 ml-3">
              <a className="hoverable" href="">
                <MDBIcon className="white-text" far icon="user" size="lg"/>
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>
      </footer>
    )
  }
}

export default Footer;