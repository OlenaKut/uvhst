import React from "react";
import Header from "../components/header/Header";
import Subheader from "../components/subheader/Subheader";
import MainFP from "../components/main/MainFP";

const FirstPage = () => {
  return (
    <div className="FirstPage">
      <Header />
      <Subheader />
      <br/>
      <MainFP />
    </div>
  );
};

export default FirstPage;
