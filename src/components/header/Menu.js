import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";

const Menu = () => {
  return (
    <div className="menu">
      <Navbar expand="sm">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="fw-semibold">
              <LinkContainer to="/">
                <Nav.Link className="link text-primary me-sm-3 me-md-5 mt-lg-4 m-0 fs-6 fs-4 p-0">
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Page2News">
                <Nav.Link className="link text-primary me-sm-3 me-md-5 mt-lg-4 m-0 fs-6 fs-4 p-0">
                  Our work
                </Nav.Link>
              </LinkContainer>
              <Nav.Link
                href="#iCanHelp"
                className="link text-primary me-sm-3 me-md-5 mt-lg-4 m-0 fs-6 fs-4 p-0"
              >
                I can help
              </Nav.Link>
              <Nav.Link
                href="#iNeedHelp"
                className="link text-primary me-sm-3 me-md-5 mt-lg-4 m-0 fs-6 fs-4 p-0"
              >
                I need help
              </Nav.Link>
              <Nav.Link
                href="#ourTeam"
                className="link text-primary me-sm-3 me-md-5 mt-lg-4 m-0 fs-6 fs-4 p-0"
              >
                Our team
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Menu;
