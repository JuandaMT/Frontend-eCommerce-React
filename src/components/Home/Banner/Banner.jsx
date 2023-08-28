import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "360px",
  width: '100%',
  color: "black",
  lineHeight: "360px",
  textAlign: "center",
  background: "#E7E2DA",
};
const Banner = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
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
