import React from "react";
import "../pages/Help.css";
import ModalVolunteer from "../pages/ModalVolunteer";

const ICanHelp = () => {
  return (
    <div className="ICanHelp text-center">
      <div className="vol-block rounded-2 shadow m-auto container-fluid">
        <h3 className="vol-title">I want to become a volunteer</h3>
        <p className="vol-text">
          We always need good help! You can find more information here:{" "}
          <ModalVolunteer />
        </p>
      </div>
      <div className="vol-block rounded-2 shadow m-auto container-fluid">
        <h3 className="vol-title">I want to become a volunteer</h3>
        <p className="vol-text">
          We always need good help! You can find more information here:{" "}
          <ModalVolunteer />
        </p>
      </div>
    </div>
  );
};
export default ICanHelp;
