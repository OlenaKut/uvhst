import React from "react";
import Volunteers from "../../pictures/foto/volunteers.jpg";
import Button from "react-bootstrap/Button";
import Telegram from "../../pictures/Telegram-logo.png";
import Mail_icon from "../../pictures/Mail_icon.png";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Volunteer.css";
import { useTranslation } from "react-i18next";

const Volunteer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="volunteer">
        <div className="px-4 py-2 mb-5 shadow">
          <h2 className="text-center my-4 volunteer-header">
            {t("become-volunteer.title-become-volunteer")}
          </h2>
          <p className="volunteer-text mb-5">
            {t("become-volunteer.text1-become-volunteer")}
            <span className="UVHS text-warning">
              {" "}
              Ukrainian Volunteer Hub Stockholm
            </span>{" "}
            {t("become-volunteer.text2-become-volunteer")}
          </p>
          <h4 className="text-center mb-3 vol-subheader">
            {t("become-volunteer.subtitle-become-volunteer")}
          </h4>
          <ul>
            <li>{t("become-volunteer.list1-become-volunteer")}</li>
            <li>{t("become-volunteer.list2-become-volunteer")}</li>
            <li>{t("become-volunteer.list3-become-volunteer")}</li>
          </ul>

          <p className="fw-semibold as-text">
            {t("become-volunteer.choose-become-volunteer")}
          </p>
          <p className="text-warning fw-semibold p-0 m-0">
            {t("become-volunteer.text-form-become-volunteer")}
            <Button
              className="volunteer-link"
              variant="link"
              href="https://t.me/UkrainianVolunteerHubStockholm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Telegram} alt="Telegram" className="telegram" />
              UkrainianVolunteerHubStockholm
            </Button>
          </p>
          <p>
            {t("become-volunteer.questions-become-volunteer")}
            <Button
              className="volunteer-link"
              variant="link"
              href="mailto:https://twitter.com/uvhub_sthlm"
              rel="noopener noreferrer"
            >
              <img src={Mail_icon} alt="Mail" className="contact-logo mx-2" />
              uv.hub.stockholm@gmail.com
            </Button>
          </p>
          <h3 className="text-center text-warning my-xs-5 mb-5 together-text">
            {t("become-volunteer.win-become-volunteer")}
          </h3>
        </div>
        <img
          src={Volunteers}
          alt="Our Volunteers"
          className="rounded-2 m-0 img-fluid"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Volunteer;
