import "../App.css";
import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 imagen"
            src="http://k30.kn3.net/taringa/4/3/9/6/3/A/coreblue/3A0.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagen"
            src="http://k33.kn3.net/taringa/6/3/3/5/2/E/coreblue/2BD.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagen"
            src="http://k31.kn3.net/taringa/2/F/B/9/C/B/coreblue/0F3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
