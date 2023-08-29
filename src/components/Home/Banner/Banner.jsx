import React from "react";
import { Carousel } from "antd";
import "./Banner.scss";
const contentStyle = {
  height: "150px",
  lineHeight: "150px",
};
const Banner = () => (
  <Carousel className="carrusel" autoplay>
    <div style={contentStyle} className="div">
      <img
        className="imagen"
        src="media\Banner\1.png"
        alt="imagen de ecommerce"
      />
    </div>
    <div className="div">
      <img
        className="imagen"
        src="media\Banner\2.png"
        alt="imagen de ecommerce"
      />
    </div>
    <div className="div">
      <img
        className="imagen"
        src="media\Banner\3.png"
        alt="imagen de ecommerce"
      />
    </div>
    <div className="div">
      <img
        className="imagen"
        src="media\Banner\4.png"
        alt="imagen de ecommerce"
      />
    </div>
  </Carousel>
);

export default Banner;
