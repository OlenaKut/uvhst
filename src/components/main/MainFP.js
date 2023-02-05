import React from "react";
import "../main/mainFP.css";
import OneCarousel from "../main/OneCarousel";
import MainBlock from "../main/MainBlock";
import Projects from "../main/Projects";
import Partners from "./Partners";

const MainFP = () => {
  return (
    <div>
      <div className="mainCarousel">
        <OneCarousel />
      </div>
      <MainBlock />
      <Projects />
      <Partners />
    </div>
  );
};

export default MainFP;
