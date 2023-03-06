import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import LocaleContext from "../LocaleContext";
import i18n from "../i18n";

const Navigation = () => {
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);

  function changeLocale(l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">React i18n</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title={t("language")} id="basic-nav-dropdown">
              <NavDropdown.Item href="#" onClick={() => changeLocale("en")}>
                English
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => changeLocale("ua")}>
                Українська
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => changeLocale("sv")}>
                Svenska
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
