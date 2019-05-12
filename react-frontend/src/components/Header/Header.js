import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBCollapse, MDBNavItem, MDBNavbarNav, MDBIcon, MDBNavbarToggler } from "mdbreact";
import hamburgerIcon from "../../static/images/hamburger-svg.png"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapseID: ''
    }
  }

  toggleCollapse = (collapseId) => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseId ? collapseId : '') }))
  }

  render() {
    return(
      <header className="app-header">
        <MDBNavbar className="blue-gradient" style={{ color: "white" }}>
          <MDBNavbarBrand className="ml-1">
            <Link to="/" className="text-white">
              <strong>Finance Assistant<MDBIcon className="ml-1" icon="hand-holding-usd" /></strong>
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler image={hamburgerIcon} className="mr-2" id="hamburger1" onClick={this.toggleCollapse('navbarCollapse1')} />
          <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
            <MDBNavbarNav style={{ textAlign: "left", marginTop: "15px" }}>
              <MDBNavItem active>
                <Link to="/" onClick={this.toggleCollapse('navbarCollapse1')}>
                  <p><MDBIcon className="mr-2" icon="home" />Home</p>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to="/symbols" onClick={this.toggleCollapse("navbarCollapse1")}>
                  <p><MDBIcon className="mr-2" icon="chart-line" />Valid Symbols</p>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to="/about" onClick={this.toggleCollapse('navbarCollapse1')}>
                  <p><MDBIcon className="mr-2" icon="question" />About Us</p>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to="/contact" onClick={this.toggleCollapse('navbarCollapse1')}>
                  <p><MDBIcon className="mr-2" icon="phone" />Contact</p>
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
    )
  }
}

export default Header;