import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Volunteer from "../components/pages/Volunteer";
import "../components/pages/Volunteer.css";

const Page3Volunteer = () => {
  return (
    <div>
      <Header />
      <Volunteer />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Page3Volunteer;
