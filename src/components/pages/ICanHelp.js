import React from "react";
import "../pages/Help.css";
import BecameVolunteer from "../pages/BecameVolunteer ";
import DonateHere from "../pages/DonateHere";
import Button from "react-bootstrap/Button";
import Mail from "../../pictures/Mail_icon_black.png";
import { useTranslation } from "react-i18next";

const ICanHelp = () => {
  const { t } = useTranslation();

  return (
    <div className="my-5">
      <div className="vol-block shadow m-auto container-fluid">
        <h3 className="vol-title text-center">{t("page3.title-volunteer")}</h3>
        <p className="vol-text">
          {t("page3.text-volunteer")}
          <BecameVolunteer />
        </p>
      </div>
      <div className="vol-block shadow my-4 m-auto container-fluid">
        <h3 className="vol-title text-center">{t("page3.title-donate")}</h3>

        <h4 className="text-warning text-center">
          {t("page3.subtitle-donate")}
        </h4>
        <p className="vol-text">
          {t("page3.text-donate")}
          <DonateHere />
        </p>
      </div>
      <div className="vol-block shadow m-auto my-4 container-fluid">
        <h3 className="vol-title text-center">
          {t("page3.title-partnership")}
        </h3>
        <p className="vol-text">
          {t("page3.text-partnership")}{" "}
          <img src={Mail} alt="Mail" className="contact-logo-page3 ms-1" />
          <Button
            variant="link"
            href="mailto:https://twitter.com/uvhub_sthlm"
            rel="noopener noreferrer"
          >
            uv.hub.stockholm@gmail.com
          </Button>
        </p>
      </div>
    </div>
  );
};
export default ICanHelp;
