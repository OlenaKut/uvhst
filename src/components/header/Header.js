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
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <div className="header container-fluid d-flex justify-content-between mb-2 shadow-lg rounded-1">
      <div className="mt-lg-5 mt-3">
        <div className="login"></div>
        <LinkContainer to="/">
          <Button variant="link" target="_blank" rel="noopener noreferrer">
            <img src={Logo} alt="Logo" className="logo" />
          </Button>
        </LinkContainer>
        <LinkContainer to="/Volunteer">
          <Button
            variant="link"
            target="_blank"
            rel="noopener noreferrer"
            className="donate rounded-0 d-none d-lg-inline text-decoration-none"
          >
            BECOME A VOLONTEER
          </Button>
        </LinkContainer>
        <LinkContainer to="/Volunteer">
          <Button
            variant="link"
            target="_blank"
            rel="noopener noreferrer"
            className="donate rounded-0 d-none d-lg-inline text-decoration-none"
          >
            DONATE HERE
          </Button>
        </LinkContainer>
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
