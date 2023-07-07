import "./Home.css";
import Slider from "../Slider/Slider";
import Sliderimg from "../Sliderimg/Sliderimg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <ul className="contain">
          <Slider />

          {/* <li class="content2">
           
            <div class="side">
              <div class="flex side-content2">
                <li class="sideLeft2 align-center item-center">
                  <div class="">
                    <img alt="img" />
                    <h3>Service</h3>
                  </div>
                </li>
                <li class="sideLeft2 align-center item-center">
                  <div class="">
                    <img alt="img" />
                    <h3>Service</h3>
                  </div>
                </li>
                <li class="sideLeft2 align-center item-center">
                  <div class="">
                    <img alt="img" />
                    <h3>Service</h3>
                  </div>
                </li>
              </div>
              <div class="flex">
                <li class="sideLeft2 align-center item-center">
                  <div class="">
                    <img alt="img" />
                    <h3>Service</h3>
                  </div>
                </li>
                <li class="sideLeft2 align-center item-center">
                  <div class="">
                    <img alt="img" />
                    <h3>Service</h3>
                  </div>
                </li>
                <li class="sideLeft2 align-center item-center">
                  <div class="">
                    <img alt="img" />
                    <h3>Service</h3>
                  </div>
                </li>
              </div>
            </div>
            <div class="side align-center item-center">
              <div class="sideRight2 ">
                <h3 class="test">Our coffee is hotter than Angelina Jolie.</h3>
                <p>
                  Selamat datang di kedai kopi kami, tempat di mana cinta dan hangatnya suasana bertemu dalam secangkir kopi. Kami bangga mempersembahkan pengalaman kopi yang tak tertandingi, yang tak hanya memenuhi kebutuhanmu akan rasa,
                  tetapi juga menyentuh jiwa.
                </p>
              </div>
            </div>
          </li> */}

          <li class="content3">
            {/* content 3 */}
            <div class="sideRight11 side align-center item-center">
              <img src="/images/imghome.jpg" alt="IMG" ></img>
            </div>
            <div class="sidehome">
              <div class="sideLeft3 ">
                <h1 class="size2">TIME DISCOVER</h1>
                <h1 class="size2">COFFE HOUSE</h1>
                <p class="box-text5">Kami menawarkan beragam varietas kopi, mulai dari single origin hingga campuran unik, yang akan memenuhi keinginan dan preferensi penikmat kopi paling cerdas.</p>
                <div class="flex ">
                  <button class="button-content3 black">
                    <Link to="/About" className="Link">
                      Read More
                    </Link>
                  </button>
                  <button class="button-content3 brown">
                    <Link to="/Order" className="Link">
                      View Product
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            
          </li>

          <li class="content4">
            {/* content 4 */}
            <h1 class="service align-center item-center">Our Service</h1>
            <div class="ourService ">
              <div class="serviceBox align-center item-center">
                <div className="boxservice">
                  <img src="/images/icon-aftersales.png" alt="IMG"></img>
                  <h3>After Sale</h3>
                </div>
              </div>
              <div class="serviceBox align-center item-center">
                <div className="boxservice">
                  <img src="/images/icon-beverage.png" alt="IMG"></img>
                  <h3>Tools and Materials</h3>
                </div>
              </div>
              <div class="serviceBox align-center item-center">
                <div className="boxservice">
                  <img src="/images/icon-businnes.png" alt="IMG"></img>
                  <h3>Businnes Consultan</h3>
                </div>
              </div>
            </div>
          </li>

          <li class="content5">
            {/* content 5 */}
            <div class="imgContent5 align-center item-center">
              <Sliderimg />
            </div>
            <div class="descContent5">
              <div class="box-text">
                <h1 class="font-brown">New Product</h1>
                <h1 class="size2">ORDER NOW</h1>
                <p class="box-text5">Kami dengan bangga mempersembahkan layanan pemesanan kopi online yang mudah dan cepat, sehingga kamu dapat menikmati secangkir kopi pilihanmu kapan pun dan di mana pun.</p>
                <Link to="/Order" class="button-content5">
                  View all product
                </Link>
              </div>
            </div>
          </li>

          <li class="content6 align-center item-center">
            {/* content 6 */}
            <div>
              <h1 class="question">Have a Question?</h1>
              <p class="question">Jika Anda memiliki pertanyaan untuk kami, silahkan menghubungi team kami.</p>
              <div class="question">
                <Link to="/Contact" class="buttonClickHere black">
                  Click Here
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Home;
