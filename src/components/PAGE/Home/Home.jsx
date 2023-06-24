import "./Home.css";
function Home() {
  return (
    <>
      <div>
        <ul>
          <li class="content1">
            {/* content 1 */}
            <div class="side align-center ">
              <div class="sideLeft1 ">
                <h3 class="sideLeft1-cover">Kopi Gula Aren Mantap kali</h3>
                <h1 class="sideLeft1-text">TIME DISCOVER COFFE HOUSE</h1>
              </div>
            </div>
            <div class="sideRight1 side align-center item-center">
              <image src="" />
              <h1>IMG</h1>
            </div>
          </li>

          <li class="content2">
            {/* content 2 */}
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
                  Selamat datang di kedai kopi kami, tempat di mana cinta dan
                  hangatnya suasana bertemu dalam secangkir kopi. Kami bangga
                  mempersembahkan pengalaman kopi yang tak tertandingi, yang tak
                  hanya memenuhi kebutuhanmu akan rasa, tetapi juga menyentuh
                  jiwa.
                </p>
              </div>
            </div>
          </li>

          <li class="content3">
            {/* content 3 */}
            <div class="side align-center item-center">
              <div class="sideLeft3 ">
                <h1 class="sideLeft3-title">TIME DISCOVER</h1>
                <h1 class="sideLeft3-title">COFFE HOUSE</h1>
                <p class="sideLeft3-text">
                  Kami menawarkan beragam varietas kopi, mulai dari single
                  origin hingga campuran unik, yang akan memenuhi keinginan dan
                  preferensi penikmat kopi paling cerdas.
                </p>
                <div class="flex ">
                  <button class="button-content3 black">Read more</button>
                  <button class="button-content3 brown">view Product</button>
                </div>
              </div>
            </div>
            <div class="sideRight1 side align-center item-center">
              <image src="" />
              <h1>IMG</h1>
            </div>
          </li>

          <li class="content4">
            {/* content 4 */}
            <h1 class="service align-center item-center">Our Service</h1>
            <div class="ourService ">
              <div class="serviceBox align-center item-center">
                <div>
                  <img src="" alt="IMG"></img>
                  <h3>service 1</h3>
                </div>
              </div>
              <div class="serviceBox align-center item-center">
                <div>
                  <img src="" alt="IMG"></img>
                  <h3>service 1</h3>
                </div>
              </div>
              <div class="serviceBox align-center item-center">
                <div>
                  <img src="" alt="IMG"></img>
                  <h3>service 1</h3>
                </div>
              </div>
            </div>
          </li>

          <li class="content5">
            {/* content 5 */}
            <div class="imgContent5 align-center item-center">
              <h1>IMG</h1>
            </div>
            <div class="descContent5 align-center item-center">
              <div class="box-text">
                <h1 class="font-brown">new product</h1>
                <h1 class="size2">ORDER NOW</h1>
                <p class="box-text5">
                  Kami dengan bangga mempersembahkan layanan pemesanan kopi
                  online yang mudah dan cepat, sehingga kamu dapat menikmati
                  secangkir kopi pilihanmu kapan pun dan di mana pun.
                </p>
                <button class="button-content5">view all product</button>
              </div>
            </div>
          </li>

          <li class="content6 align-center item-center">
            {/* content 6 */}
            <div>
              <h1 class="question">Have a Question?</h1>
              <p class="question">
                Jika Anda memiliki pertanyaan untuk kami, silahkan menghubungi
                team kami.
              </p>
              <div class="question">
                <button class="buttonClickHere black">click here</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Home;
