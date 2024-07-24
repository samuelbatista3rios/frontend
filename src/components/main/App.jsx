import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import {BrowserRouter} from 'react-router-dom'

import Logo from "../template/Logo";
import Nav from "../template/Nav";
import Routes from './Routes'
import Footer from "../template/Footer";
import Home from "../home/home";

export default (props) => (
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Home/>
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>
);
