import React from "react";
import "../main/mainFP.css";
import OneCarousel from "../main/OneCarousel";
import MainBlock from "../main/MainBlock";
import Projects from "../main/Projects";

const MainFP = () => {
  return (
    <div>
      <div className="mainCarousel">
        <OneCarousel />
      </div>
      <MainBlock />
      <Projects />
    </div>
  );
};

export default MainFP;
