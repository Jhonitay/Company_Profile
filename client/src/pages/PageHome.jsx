// import { Route } from "react-router-dom";
// import Login from "../components/LOGIN/Login";

// import SignUp from "../components/SignUp/SignUp";
import React from "react";
import Navbar from "../components/NAVBAR/Navbar";
import Footer from "../components/FOOTER/Footer";
import Home from "../components/PAGE/Home/Home";

// import { Link, Route } from "react-router-dom";



function PageHome() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default PageHome;