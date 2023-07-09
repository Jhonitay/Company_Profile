import "./Footer.css";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

// import {FaInstagram, FaTwitter, FaFacebook} from 'react-icons'
function Footer() {
  return (
    <>
      <footer className="footer">
        <div>
          <div className="phone">
            <p>
              <b>Phone:</b> +628756372
            </p>
            <p>
              <b>ADDRESS :</b> Candi Gebang
            </p>
          </div>

          <div className="bawahan">
            <div className="coffie">coffiee</div>
            <div className="sosmed">
              <FaFacebook className="iconss" />
              <FaInstagram className="iconss" />
              <FaTwitter className="iconss" />
              <FaWhatsapp className="iconss" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
