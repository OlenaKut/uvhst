import React from "react";
import "../main/mainFP.css";
import OneCarousel from "../main/OneCarousel";
import MainBlock from "../main/MainBlock";

const MainFP = () => {
  return (
    <div className="mainCarousel">
      <OneCarousel />
      <MainBlock />
    </div>
  );
};

export default MainFP;
