import React from "react";
import Carousel from "better-react-carousel";
import Clothes from "../../pictures/carousel/clothes.png";
import Energy from "../../pictures/carousel/energy.png";
import Food from "../../pictures/carousel/food.png";
import Med from "../../pictures/carousel/med.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const OneCarousel = () => {
  return (
    <div>
      <div className="carousel p-3 container-fluid">
        <Carousel
          cols={3}
          rows={1}
          gap={0}
          loop
          autoplay={5000}
          mobileBreakpoint={768}
        >
          <Carousel.Item className="carousel-item">
            <Zoom>
              <img
                className="m-auto d-flex justify-content-between text-center w-75"
                src={Clothes}
                alt="Clothes"
              />
            </Zoom>
            <div className="text-center carousel-text mt-2">
              <h5>Clothes</h5>
              <p>This is a list of clothing needs</p>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Zoom>
              <img
                className="m-auto d-flex justify-content-between w-75"
                src={Energy}
                alt="Energy"
              />
            </Zoom>
            <div className="text-center carousel-text mt-2">
              <h5>Energy</h5>
              <p>This is a list of batteries and lights needs</p>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Zoom>
              <img
                className="m-auto d-flex justify-content-between w-75"
                src={Food}
                alt="Food"
              />
            </Zoom>
            <div className="text-center carousel-text mt-2">
              <h5>Food</h5>
              <p>This is a list of food needs</p>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Zoom>
              <img
                className="m-auto d-flex justify-content-between w-75"
                src={Med}
                alt="Medicine"
              />
            </Zoom>
            <div className="text-center carousel-text mt-2">
              <h5>Medicine</h5>
              <p>This is a list of medicine needs</p>
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="m-auto text-center fst-italic undertext">
          <h5>
            We collect money and by things that are very necessary for people in
            Ukraine today.
          </h5>
          <h6>
            You can donate{" "}
            <a
              href="https://www.facebook.com/uavhub.stockholm"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
};
export default OneCarousel;
