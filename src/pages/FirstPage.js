import React from "react";
import Header from "../components/header/Header";
import Subheader from "../components/subheader/Subheader";
import MainFP from "../components/main/MainFP";
import Footer from "../components/footer/Footer";

const FirstPage = () => {
  return (
    <div className="FirstPage d-block">
      <Header />
      <Subheader />
      <MainFP />
      <Footer />
    </div>
  );
};

export default FirstPage;
