import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Nav } from "react-bootstrap";
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
    <Nav className="me-auto fixed-top" title={t()}>
      <Nav.Link href="#" onClick={() => changeLocale("en")} className="m-2 p-0">
        En
      </Nav.Link>
      <Nav.Link href="#" onClick={() => changeLocale("ua")} className="m-2 p-0">
        Укр
      </Nav.Link>
      <Nav.Link href="#" onClick={() => changeLocale("sv")} className="m-2 p-0">
        Sv
      </Nav.Link>
    </Nav>
  );
};

export default Navigation;
