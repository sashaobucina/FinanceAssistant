import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Main = ({ children }) => (
  <>
    <Header />
      <main>{children}</main>
    <Footer />
  </>
)

export default Main;