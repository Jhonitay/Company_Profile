import "./Slider.css";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
  const data = [
    {
      title: "Buka Kedai Kopi Bareng Sugeng",

      image: "/images/mesinkopi.png",
    },
    {
      title: "Buka Kedai Kopi Bareng Sugeng",

      image: "/images/mesinespreso.png",
    },
    {
      title: "Buka Kedai Kopi Bareng Sugeng",

      image: "/images/ceretpremium.png",
    },
  ];

  return (
    <Carousel infiniteLoop useKeyboardArrows autoPlay swipeable emulateTouch showStatus={false}>
      {data.map((item, index) => (
        <li key={index} className="content1">
          <div className="side align-center ">
            <div className="sideLeft1 ">
              <p className="sideLeft1-cover">{item.title}</p>
              <h1 className="sideLeft1-text">{item.subtitle}</h1>
            </div>
          </div>
          <div className="sideRight1 side align-center item-center">
            <img src={item.image} alt="" />
          </div>
        </li>
      ))}
    </Carousel>
  );
}

export default Slider;
