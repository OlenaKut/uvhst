import React from "react";
import news from "./NewsData";

const MainBlock = () => {
  return (
    <div className="container-fluid">
      {news.map((newa, index) => {
        return (
          <div key={index}>
            <div className="m-3 d-lg-flex d-block justify-content-between rounded-2 shadow">
              <div>
                <img
                  src={newa.img}
                  alt="News"
                  className="news-image rounded-2 m-1"
                />
              </div>
              <div className="m-4 p-3">
                <h4 className="news-title m-3">{newa.name}</h4>
                <p className="news-text">{newa.text}</p>
                <p>{newa.account}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainBlock;
