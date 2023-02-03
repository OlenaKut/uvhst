import React from "react";
import Carousel from "better-react-carousel";
import Clothes from "../../pictures/carousel/clothes.png";
import Energy from "../../pictures/carousel/energy.png";
import Food from "../../pictures/carousel/food.png";
import Med from "../../pictures/carousel/med.png";

const OneCarousel = () => {
  return (
    <div>
      <div className="carousel p-3 container-fluid d-lg-block d-none">
        <Carousel cols={3} rows={1} gap={0} loop autoplay={4000}>
          <Carousel.Item>
            <img
              className="m-auto d-flex justify-content-between img-carousel w-75"
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
              className="m-auto d-flex justify-content-between w-75"
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
              className="m-auto d-flex justify-content-between w-75"
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
              className="m-auto d-flex justify-content-between w-75"
              src={Med}
              alt="Medicine"
            />
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
      <div className="img-instead d-flex justify-content-center d-lg-none">
        <div>
          <img className="m-auto d-flex-row image-list" src={Food} alt="Food" />
          <img
            className="m-auto d-flex-row image-list"
            src={Med}
            alt="Medicine"
          />
          <img
            className="m-auto d-flex-row image-list"
            src={Clothes}
            alt="Clothes"
          />

          <div className="m-auto text-center fst-italic undertext mt-2">
            <p>
              We collect money and by things that are very necessary for people
              in Ukraine today. <br />
              You can donate{" "}
              <a
                href="https://www.facebook.com/uavhub.stockholm"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OneCarousel;
