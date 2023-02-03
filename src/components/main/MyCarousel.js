import React from "react";
import { Carousel } from "react-carousel3";
import Clothes from "../../pictures/carousel/clothes.png";
import Energy from "../../pictures/carousel/energy.png";
import Food from "../../pictures/carousel/food.png";
import Med from "../../pictures/carousel/med.png";

const style = {
  width: 297,
  height: 296,
};

const MyCarousel = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Carousel
        height={560}
        width={1080}
        yOrigin={42}
        yRadius={38}
        autoPlay={true}
      >
        <div key={1} style={style}>
          <img alt="Clothes" src={Clothes} className="w-100" />
        </div>
        <div key={2} style={style}>
          <img alt="Energy" src={Energy} className="w-100" />
        </div>
        <div key={4} style={style}>
          <img alt="Food" src={Food} className="w-100" />
        </div>
        <div key={5} style={style}>
          <img alt="Medicine" src={Med} className="w-100" />
        </div>
      </Carousel>
    </div>
  );
};
export default MyCarousel;
