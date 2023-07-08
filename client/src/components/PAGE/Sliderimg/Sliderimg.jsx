import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Sliderimg.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Sliderimg() {
  const data = [
    {
      image: "/images/bijikopi.png",
    },
    {
      image: "/images/permenkopi.png",
    },
    {
      image: "/images/ceretpremium.png",
    },
  ];

  return (
    <div className="imgContent55 align-center item-center">
      <Carousel infiniteLoop useKeyboardArrows autoPlay swipeable emulateTouch showStatus={false}>
        {data.map((item, index) => (
          <div key={index} className="content55img">
            <img src={item.image} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Sliderimg;
