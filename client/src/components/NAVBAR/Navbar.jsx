import "./Navbar.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <div className="justify-flex">
      <div className="logo justify-flex ">
        <img src="\latterG.svg" alt="" />
        <p className="namacompany">Sugeng</p>
      </div>
      <div className="navbar">
        <Link className={`content ${location.pathname === "/" ? "active" : ""}`} to="/">
          Home
        </Link>
        <Link className={`content ${location.pathname === "/About" ? "active" : ""}`} to="/About">
          About
        </Link>
        <Link className={`content ${location.pathname === "/Order" ? "active" : ""}`} to="/Order">
          Order
        </Link>
        <Link className={`content ${location.pathname === "/Contact" ? "active" : ""}`} to="/Contact">
          Contact
        </Link>
        <Link className={`content ${location.pathname === "/Team" ? "active" : ""}`} to="/Team">
          Team
        </Link>
        <Link className={`content ${location.pathname === "/Login" ? "active" : ""}`} to="/Login">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
