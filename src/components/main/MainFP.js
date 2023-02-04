import React from "react";
import "../main/mainFP.css";
import OneCarousel from "../main/OneCarousel";
import MainBlock from "../main/MainBlock";

const MainFP = () => {
  return (
    <div>
      <div className="mainCarousel">
        <OneCarousel />
      </div>
      <MainBlock />
    </div>
  );
};

export default MainFP;
