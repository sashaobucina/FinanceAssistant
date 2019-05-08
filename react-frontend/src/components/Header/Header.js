import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBHamburgerToggler, MDBCollapse, MDBNavItem, MDBNavbarNav, MDBIcon } from "mdbreact";

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapse1: false,
      collapseID: ''
    }
    this.toggleSingleCollapse = this.toggleSingleCollapse.bind(this)
  }

  toggleSingleCollapse(collapseId) {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    })
  }

  render() {
    return(
      <header>
        <MDBNavbar className="blue-gradient" style={{ color: "white" }}>
          <MDBNavbarBrand className="ml-1">
            <strong>Finance Assistant<MDBIcon className="ml-1" icon="hand-holding-usd" /></strong>
          </MDBNavbarBrand>
          <MDBHamburgerToggler className="mr-2" id="hamburger1" onClick={() => this.toggleSingleCollapse('collapse1')} />
            <MDBCollapse isOpen={this.state.collapse1} navbar>
              <MDBNavbarNav style={{ textAlign: "left", marginTop: "15px" }}>
                <MDBNavItem active>
                  <p><MDBIcon className="mr-2" icon="home" />Home</p>
                </MDBNavItem>
                <MDBNavItem>
                  <p><MDBIcon className="mr-2" icon="chart-line" />Valid Symbols</p>
                </MDBNavItem>
                <MDBNavItem>
                  <p><MDBIcon className="mr-2" icon="info-circle" />Usage</p>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
      </header>
    )
  }
}

export default Header;