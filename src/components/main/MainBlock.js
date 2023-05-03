import React from "react";
import news from "./NewsData";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

const MainBlock = () => {
  return (
    <div className="container-fluid news-block mb-5">
      {news.slice(0, 3).map((newa, index) => {
        return (
          <div key={index}>
            <div className="m-3 d-lg-flex d-block justify-content-between shadow">
              <div className="m-2 p-2 align-self-center">
                <Zoom>
                  <img
                    src={newa.imageLink}
                    alt="News"
                    className="news-image rounded-2 m-1"
                  />
                </Zoom>
              </div>
              <div className="p-2 align-self-center">
                <h4 className="news-title m-lg-2 m-2">{newa.name}</h4>
                <p className="news-text">{newa.text}</p>
                <p className="fst-italic">{newa.account}</p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="position-relative pb-2 m-3">
        <LinkContainer to="/Page2News">
          <Button
            variant="outline-info"
            className="position-absolute top-0 end-0"
          >
            Read more...
          </Button>
        </LinkContainer>
      </div>
    </div>
  );
};

export default MainBlock;
