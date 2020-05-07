import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Main extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header />
          <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Main;