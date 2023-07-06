import "./Slider.css";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
  const data = [
    {
      title: "Kopi Gula Aren Mantap kali 1",
      subtitle: "TIME DISCOVER COFFE HOUSE 1",
      image: "/images/mesinkopi.png",
    },
    {
      title: "Kopi Gula Aren Mantap kali 2",
      subtitle: "TIME DISCOVER COFFE HOUSE 2",
      image: "/images/mesinespreso.png",
    },
    {
      title: "Kopi Gula Aren Mantap kali 3",
      subtitle: "TIME DISCOVER COFFE HOUSE 3",
      image: "/images/ceretpremium.png",
    },
  ];

  return (
    <Carousel infiniteLoop useKeyboardArrows autoPlay swipeable emulateTouch showStatus={false}>
      {data.map((item, index) => (
        <li key={index} className="content1">
          <div className="side align-center ">
            <div className="sideLeft1 ">
              <h3 className="sideLeft1-cover">{item.title}</h3>
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
