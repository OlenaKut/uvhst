import React from "react";
import Carousel from "better-react-carousel";
import Zoom from "react-medium-image-zoom";
import images from "./CarouselData";
import "react-medium-image-zoom/dist/styles.css";

import { useTranslation } from "react-i18next";

const OneCarousel = () => {
  const { t } = useTranslation();

  return (
    <div className="carousel p-3 container-fluid">
      <Carousel
        cols={3}
        rows={1}
        gap={0}
        loop
        autoplay={7000}
        mobileBreakpoint={768}
      >
        {images.map((image, index) => {
          return (
            <Carousel.Item key={index} className="carousel-item">
              <Zoom>
                <img
                  className="m-auto d-flex justify-content-between text-center w-75"
                  src={image.img}
                  alt="Lists"
                />
              </Zoom>
              <div className="text-center carousel-text mt-2">
                <h5>{image.title}</h5>
                <p>{image.text}</p>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className="m-auto text-center fst-italic undertext pt-2">
        <h5>{t("carousel.undertext")}</h5>
        <h6>
          {t("carousel.donate-text")}
          <a
            href="https://www.facebook.com/uavhub.stockholm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            {t("carousel.donate-link")}
          </a>
        </h6>
      </div>
    </div>
  );
};

export default OneCarousel;
