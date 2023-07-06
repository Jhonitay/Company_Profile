import "./Slider.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
  return (
    <Carousel infiniteLoop useKeyboardArrows autoPlay swipeable emulateTouch showStatus={false}>
      <li className="content1">
        <div class="side align-center ">
          <div class="sideLeft1 ">
            <h3 class="sideLeft1-cover">Kopi Gula Aren Mantap kali</h3>
            <h1 class="sideLeft1-text">TIME DISCOVER COFFE HOUSE</h1>
          </div>
        </div>
        <div class="sideRight1 side align-center item-center">
          <img src="/images/bijikopi.png" />
        </div>
      </li>
      <li className="content1">
        <div class="side align-center ">
          <div class="sideLeft1 ">
            <h3 class="sideLeft1-cover">Kopi Gula Aren Mantap kali</h3>
            <h1 class="sideLeft1-text">TIME DISCOVER COFFE HOUSE</h1>
          </div>
        </div>
        <div class="sideRight1 side align-center item-center">
          <img src="/images/bijikopi.png" />
        </div>
      </li>
      <li className="content1">
        <div class="side align-center ">
          <div class="sideLeft1 ">
            <h3 class="sideLeft1-cover">Kopi Gula Aren Mantap kali</h3>
            <h1 class="sideLeft1-text">TIME DISCOVER COFFE HOUSE</h1>
          </div>
        </div>
        <div class="sideRight1 side align-center item-center">
          <img src="/images/bijikopi.png" />
        </div>
      </li>
    </Carousel>
  );
}

export default Slider;
