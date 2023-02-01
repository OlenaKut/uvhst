import React from "react";
import Logo from "../../pictures/Logo.png";
import "../header/HeaderMenu.css";
import Button from "react-bootstrap/Button";
import Menu from "../header/Menu";
import MediaLinks from "../header/MediaLinks";

const Header = () => {
  return (
    <div className="header container-fluid d-flex justify-content-between">
      <div>
        {" "}
        <img src={Logo} alt="Logo" className="logo" />
        <Button className="donate rounded-0 d-none d-md-inline">
          BECOME A VOLONTEER
        </Button>
        <Button className="donate rounded-0 d-none d-md-inline">
          DONATE HERE
        </Button>
      </div>
      <div className="d-none d-sm-block">
        {" "}
        <MediaLinks />
      </div>
      <div className="position-absolute end-0">
        <Menu />
      </div>
    </div>
  );
};
export default Header;
