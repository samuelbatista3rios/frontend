import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";

import Logo from "../template/Logo";
import Nav from "../template/Nav";
import Home from "../home/home";
import Footer from "../template/Footer";

export default (props) => (
  <div className="app">
    <Logo />
    <Nav />
    <Home />
    <Footer />
  </div>
);
