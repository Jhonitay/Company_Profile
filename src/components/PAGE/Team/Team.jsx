import "./Team.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Team() {
  return (
    <>
      <section class="team">
        <div class="center">
          <h1>Our Team</h1>
        </div>

        <div class="team-content">
          <div class="box">
            <img src="/images/kadek.jpg" alt="Kadek Aditya" className="Photo" />
            <h3>Kadek Aditya</h3>
            <h5>Back End</h5>
            <div class="icons">
              <FaFacebook className="ikon" />
              <FaInstagram className="ikon" />
              <FaTwitter className="ikon" />
            </div>
          </div>

          <div class="box">
            <img src="/images/deni.jpg" alt="Deni Masulili" className="Photo" />
            <h3>Deni Masulili</h3>
            <h5>Fornt End</h5>
            <div class="icons">
              <FaFacebook className="ikon" />
              <FaInstagram className="ikon" />
              <FaTwitter className="ikon" />
            </div>
          </div>

          <div class="box">
            <img
              src="/images/sonny.jpg"
              alt="Sonny Wahyu S"
              className="Photo"
            />
            <h3>Sonny Wahyu S</h3>
            <h5>Front End</h5>
            <div class="icons">
              <FaFacebook className="ikon" />
              <FaInstagram className="ikon" />
              <FaTwitter className="ikon" />
            </div>
          </div>

          <div class="box">
            <img
              src="/images/nitay.jpg"
              alt="Komang Nitay P"
              className="Photo"
            />
            <h3>Komang Nitay P</h3>
            <h5>Full Stack</h5>
            <div class="icons">
              <FaFacebook className="ikon" />
              <FaInstagram className="ikon" />
              <FaTwitter className="ikon" />
            </div>
          </div>

          <div class="box">
            <img
              src="/images/fauzan.jpg"
              alt="Ahmad Fauzan"
              className="Photo"
            />
            <h3>Ahmad Fauzan</h3>
            <h5>Front End</h5>
            <div class="icons">
              <FaFacebook className="ikon" />
              <FaInstagram className="ikon" />
              <FaTwitter className="ikon" />
            </div>
          </div>

          <div class="box">
            <img
              src="/images/yoga.jpg"
              alt="Yoga Dwi Susena"
              className="Photo"
            />
            <h3>Yoga Dwi Susena</h3>
            <h5>Front End</h5>
            <div class="icons">
              <FaFacebook className="ikon" />
              <FaInstagram className="ikon" />
              <FaTwitter className="ikon" />
            </div>
          </div>

          <div class="box">
            <img
              src="/images/kadek.jpg"
              alt="Mahadi Ocsidio"
              className="Photo"
            />
            <h3>Mahadi Ocsidio</h3>
            <h5>Front End</h5>
            <div class="icons">
              <FaFacebook className="ikon" />
              <FaInstagram className="ikon" />
              <FaTwitter className="ikon" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Team;
