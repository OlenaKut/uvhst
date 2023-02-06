import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";

const MenuNew = () => {
  return (
    <>
      <Navbar bg="none" expand="sm" className="mb-3">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  href="#home"
                  className="link text-primary me-sm-3 me-md-5 mt-lg-4 m-0 fs-6 fs-4 p-0"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#ourWork"
                  className="link text-primary me-sm-3 me-md-5 mt-lg-4 m-0 fs-6 fs-4 p-0"
                >
                  Our work
                </Nav.Link>
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
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
export default MenuNew;
