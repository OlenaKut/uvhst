import React from "react";
import Carousel from "better-react-carousel";
import Clothes from "../../pictures/carousel/clothes.png";
import Energy from "../../pictures/carousel/energy.png";
import Food from "../../pictures/carousel/food.png";
import Med from "../../pictures/carousel/med.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const OneCarousel = () => {
  return (
    <div>
      <div className="carousel p-3 container-fluid d-lg-block d-none">
        <Carousel cols={3} rows={1} gap={0} loop autoplay={10000}>
          <Carousel.Item>
            <Zoom>
              <img
                className="m-auto d-flex justify-content-between img-carousel w-75"
                src={Clothes}
                alt="Clothes"
              />
            </Zoom>
            <div className="text-center carousel-text mt-2">
              <h5>Clothes</h5>
              <p>This is a list of clothing needs</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
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
          <Carousel.Item>
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
          <Carousel.Item>
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
      <Container
        fluid
        className="img-instead mx-auto text-center d-block d-lg-none"
      >
        <Row>
          <Col sm={4}>
            <img className="img-fluid m-1 image-list" src={Food} alt="Food" />
          </Col>
          <Col sm={4}>
            {" "}
            <img
              className="img-fluid m-1 image-list"
              src={Med}
              alt="Medicine"
            />
          </Col>
          <Col sm={4}>
            {" "}
            <img
              className="img-fluid m-1 image-list"
              src={Clothes}
              alt="Clothes"
            />
          </Col>
        </Row>
        <div className="mx-auto p-2 text-center fst-italic undertext">
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
      </Container>
    </div>
  );
};
export default OneCarousel;
