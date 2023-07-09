import "./Team.css";
import { FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

function Team() {
  return (
    <>
      <section class="team">
        <div class="center">
          <h1>Our Team</h1>
        </div>

        <div class="team-content">
          <div class="box">
            <img src="/images/kadek2.jpg" alt="Kadek Aditya" className="Photo" />
            <h3>Kadek Aditya</h3>
            <h5>Back End</h5>
            <div class="icons">
              <a href="https://github.com/AdityaAnanta123" target="blank">
              <FaGithub className="ikon git" />
              </a>
              <a href="https://www.instagram.com/kadekaditya00/" target="blank">
              <FaInstagram className="ikon ig" />
              </a>
              <a href="https://www.youtube.com/@adityaananta8724" target="blank">
              <FaYoutube className="ikon yt" />
              </a>
            </div>
          </div>

          <div class="box">
            <img src="/images/deni.jpg" alt="Deni Masulili" className="Photo" />
            <h3>Deni Masulili</h3>
            <h5>Fornt End</h5>
            <div class="icons">
              <a href="https://github.com/Dennn09" target="blank">
              <FaGithub className="ikon git" />
              </a>
              <a href="https://www.instagram.com/denimasulili/" target="blank">
              <FaInstagram className="ikon ig" />
              </a>
              <a href="https://www.youtube.com/@denimasulili6388" target="blank">
              <FaYoutube className="ikon yt" />
              </a>
            </div>
          </div>

          <div class="box">
            <img
              src="/images/sonny2.jpg"
              alt="Sonny Wahyu S"
              className="Photo"
            />
            <h3>Sonny Wahyu S</h3>
            <h5>Front End</h5>
            <div class="icons">
              <a href="https://github.com/Sonnywahyu" target="blank">
              <FaGithub className="ikon git" />
              </a>
              <a href="https://www.instagram.com/oom_moge/" target="blank">
              <FaInstagram className="ikon ig" />
              </a>
              <a href="https://www.youtube.com/@touchme3931" target="blank">
              <FaYoutube className="ikon yt" />
              </a>
            </div>
          </div>

          <div class="box">
            <img
              src="/images/nitay2.jpg"
              alt="Komang Nitay P"
              className="Photo"
            />
            <h3>Komang Nitay P</h3>
            <h5>Full Stack</h5>
            <div class="icons">
              <a href="https://github.com/Jhonitay" target="blank">
              <FaGithub className="ikon git" />
              </a>
              <a href="https://www.instagram.com/jhonitay_/" target="blank">
              <FaInstagram className="ikon ig" />
              </a>
              <a href="https://www.youtube.com/@artbyjhonitay9021" target="blank">
              <FaYoutube className="ikon yt" />
              </a>
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
              <a href="https://github.com/ahmdfauzzan" target="blank">
              <FaGithub className="ikon git" />
              </a>
              <a href="https://www.instagram.com/ahmddfauzaan/" target="blank">
              <FaInstagram className="ikon ig" />
              </a>
              <a href="https://youtube.com/@zan3492" target="blank">
              <FaYoutube className="ikon yt" />
              </a>
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
              <a href="https://github.com/Yoga2003" target="blank">
              <FaGithub className="ikon git" />
              </a>
              <a href="https://www.instagram.com/yodws/" target="blank">
              <FaInstagram className="ikon ig" />
              </a>
              <a href="https://www.youtube.com/@yogadwisusena7785" target="blank">
              <FaYoutube className="ikon yt" />
              </a>
            </div>
          </div>

          <div class="box">
            <img
              src="/images/dio.jpg"
              alt="Mahadi Ocsidio"
              className="Photo"
            />
            <h3>Mahadi Ocsidio</h3>
            <h5>Back End</h5>
            <div class="icons">
              <a href="https://github.com/mahadiocsidio" target="blank">
              <FaGithub className="ikon git" />
              </a>
              <a href="https://www.instagram.com/squeezedtofu/" target="blank">
              <FaInstagram className="ikon ig" />
              </a>
              <a href="https://www.youtube.com/@justdio2086" target="blank">
              <FaYoutube className="ikon yt" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Team;
