import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "360px",
  width: '100%',
  color: "#fff",
  lineHeight: "360px",
  textAlign: "center",
  background: "#364d79",
};
const Banner = () => (
  <Carousel autoplay>
    <div>
      <img style={contentStyle}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/2560px-Valorant_logo_-_pink_color_version.svg.png"
        alt=""
      />
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
