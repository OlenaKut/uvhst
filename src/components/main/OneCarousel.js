import React from "react";
import Carousel from "better-react-carousel";
import Clothes from "../../pictures/carousel/clothes.png";
import Energy from "../../pictures/carousel/energy.png";
import Food from "../../pictures/carousel/food.png";
import Med from "../../pictures/carousel/med.png";

const OneCarousel = () => {
  return (
    <div className="carousel p-3 container-fluid">
      <Carousel
        cols={3}
        rows={1}
        gap={0}
        loop
        mobileBreakpoint={767}
        autoplay={4000}
      >
        <Carousel.Item>
          <img
            className="m-auto d-flex justify-content-between img-carousel w-50"
            src={Clothes}
            alt="Clothes"
          />
          <div className="text-center carousel-text mt-2">
            <h5>Clothes</h5>
            <p>This is a list of clothing needs</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="50%"
            className="m-auto d-flex justify-content-between"
            src={Energy}
            alt="Energy"
          />
          <div className="text-center carousel-text mt-2">
            <h5>Energy</h5>
            <p>This is a list of batteries and lights needs</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="50%"
            className="m-auto d-flex justify-content-between"
            src={Food}
            alt="Food"
          />
          <div className="text-center carousel-text mt-2">
            <h5>Food</h5>
            <p>This is a list of food needs</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="50%"
            className="m-auto d-flex justify-content-between"
            src={Med}
            alt="Medicine"
          />
          <div className="text-center carousel-text mt-2">
            <h5>Medicine</h5>
            <p>This is a list of medicine needs</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default OneCarousel;
