import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";
import { useTranslation } from "react-i18next";

const MenuNew = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar bg="none" expand="lg" className="mb-3">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            placement="end"
            className="rounded offcanvas text-dark"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title> {t("menu.home")}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <LinkContainer to="/">
                  <Nav.Link className="link text-warning me-sm-1 me-md-4 mt-4  px-0 pb-1">
                    {t("menu.home")}
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Page2News">
                  <Nav.Link className="link text-warning me-sm-1 me-md-4 mt-4  px-0 pb-1">
                    {t("menu.ourwork")}
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Page3CanHelp">
                  <Nav.Link className="link text-warning me-sm-1 me-md-4 mt-4 px-0 pb-1">
                    {t("menu.icanhelp")}
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Page4NeedHelp">
                  <Nav.Link className="link text-warning me-sm-1 me-md-3 mt-4  px-0 pb-1">
                    {t("menu.ineedhelp")}
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Page5Team">
                  <Nav.Link className="link text-warning me-sm-1 me-md-3 mt-4  px-0 pb-1">
                    {t("menu.about")}
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};
export default MenuNew;
