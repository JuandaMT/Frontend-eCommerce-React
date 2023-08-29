import React from "react";
import { Carousel } from "antd";
import "./Banner.scss"
const contentStyle = {
  height: "260px",
  width: '100%',
  color: "#fff",
  lineHeight: "260px",
  textAlign: "center",
  background: "#8349E6",
};
const Banner = () => (
  <Carousel className="carrusel" autoplay>
    <div style={contentStyle}>
      <div className="contenido"><p>Hola me llamo Juanda</p></div>
    <h3 >1</h3>
    </div>
    <div>
    <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default Banner;
