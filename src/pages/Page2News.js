import React from "react";
import news from "./../components/main/NewsData";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Page2News = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid news-block">
        {news.map((newa, index) => {
          return (
            <div key={index}>
              <div className="m-3 d-lg-flex d-block justify-content-between shadow">
                <div className="m-2 p-2 align-self-center">
                  <img
                    src={newa.img}
                    alt="News"
                    className="news-image rounded-2 m-1"
                  />
                </div>
                <div className="m- p-2 align-self-center">
                  <h4 className="news-title m-lg-2 m-2">{newa.name}</h4>
                  <p className="news-text">{newa.text}</p>
                  <p className="fst-italic">{newa.account}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Page2News;
