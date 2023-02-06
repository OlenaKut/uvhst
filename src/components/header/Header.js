import React from "react";
import Logo from "../../pictures/Logo.png";
import "../header/HeaderMenu.css";
import Button from "react-bootstrap/Button";
import MenuNew from "../header/MenuNew";
import MediaLinks from "../header/MediaLinks";
import {
  AlternativeButtonOne,
  AlternativeButtonTwo,
} from "../header/AlternativeButton";

const Header = () => {
  return (
    <div className="header container-fluid d-flex justify-content-between sticky-top mb-2 shadow-lg rounded-1">
      <div>
        {" "}
        <img src={Logo} alt="Logo" className="logo" />
        <Button className="donate rounded-0 d-none d-lg-inline">
          BECOME A VOLONTEER
        </Button>
        <Button className="donate donate-here rounded-0 d-none d-lg-inline">
          DONATE HERE
        </Button>
        <h1 className="name mb-3">Ukrainian Volunteer Hub Stockholm</h1>
      </div>
      <div className="d-lg-none d-block position-absolute alt-button">
        {" "}
        <AlternativeButtonOne />
        <AlternativeButtonTwo />
      </div>
      <div className="d-none d-sm-block">
        <MediaLinks />
      </div>
      <div className="position-absolute end-0">
        <MenuNew />
      </div>
    </div>
  );
};
export default Header;
