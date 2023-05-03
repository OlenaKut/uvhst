import React, { Suspense, useState } from "react";
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
import Login from "../../authorisation/Login";
import i18n from "../../i18n";
import LocaleContext from "../../LocaleContext";
import Navigation from "../../translation/Navigation";
import Loading from "../../translation/Loading";

import { useTranslation } from "react-i18next";

const Header = () => {
  const [locale, setLocale] = useState(i18n.language);
  const { t } = useTranslation();

  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  return (
    <div className="header container-fluid d-flex justify-content-between mb-2 shadow-lg rounded-1">
      <div className="mt-lg-5 mt-3">
        <div className="d-flex">
          <div className="login">
            <Login />
          </div>
          <div className="translate">
            <LocaleContext.Provider value={{ locale, setLocale }}>
              <Suspense fallback={<Loading />}>
                <Navigation />
              </Suspense>
            </LocaleContext.Provider>
          </div>
        </div>

        <LinkContainer to="/">
          <Button variant="link" target="_blank" rel="noopener noreferrer">
            <img src={Logo} alt="Logo" className="logo" />
          </Button>
        </LinkContainer>
        <LinkContainer to="/Donate">
          <Button
            variant="link"
            target="_blank"
            rel="noopener noreferrer"
            className="donate rounded-0 d-none d-lg-inline text-decoration-none text-uppercase"
          >
            {t("page1.header-donate-btn")}
          </Button>
        </LinkContainer>
        <LinkContainer to="/Volunteer">
          <Button
            variant="link"
            target="_blank"
            rel="noopener noreferrer"
            className="donate rounded-0 d-none d-lg-inline text-decoration-none text-uppercase"
          >
            {t("page1.header-volunteer-btn")}
          </Button>
        </LinkContainer>

        <h1 className="name mb-3">Ukrainian Volunteer Hub Stockholm</h1>
      </div>
      <div className="d-lg-none d-block position-absolute alt-button">
        {" "}
        <AlternativeButtonOne />
        <AlternativeButtonTwo />
      </div>
      <div className="position-absolute end-0">
        <MenuNew />
      </div>

      <div className="d-none d-sm-block">
        <MediaLinks />
      </div>
    </div>
  );
};
export default Header;
