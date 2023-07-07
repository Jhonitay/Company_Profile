import "./Footer.css";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

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
              <FaFacebook className="icons" />
              <FaInstagram className="icons" />
              <FaTwitter className="icons" />
              <FaWhatsapp className="icons" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
