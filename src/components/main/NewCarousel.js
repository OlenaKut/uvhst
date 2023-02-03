import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Clothes from "../../pictures/carousel/clothes.png";
import Energy from "../../pictures/carousel/energy.png";
import Shoes from "../../pictures/carousel/Shoes.jpg";
import Food from "../../pictures/carousel/food.png";
import Med from "../../pictures/carousel/med.png";

class NewCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div className="carousel">
          <img src={Clothes} className="w-25" alt="Clothes" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={Energy} className="w-25" alt="Clothes" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={Shoes} className="w-25" alt="Clothes" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={Food} className="w-25" alt="Clothes" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={Med} className="w-25" alt="Clothes" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}

export default NewCarousel;
