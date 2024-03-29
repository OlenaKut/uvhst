import React from "react";
import Button from "react-bootstrap/Button";
import Address from "../../pictures/Location_icon.png";
import Phone from "../../pictures/Phone-icon.png";
import Mail from "../../pictures/Mail_icon_black.png";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-5">
      <div className="contact-block">
        <img src={Address} alt="Address" className="contact-logo" />
        <Button
          variant="link"
          className=" text-decoration-none contact-text"
          href="https://goo.gl/maps/CTF9YMSXsPbauaAo9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sveavägen 162, 113 46 Stockholm
          <br />
          <span className="fw-lighter p-4">
            ({t("footer.day")} 14:00-18:00)
          </span>
        </Button>
      </div>
      <div className="contact-block">
        <img src={Phone} alt="Phone" className="contact-logo" />
        <Button
          variant="link"
          className="text-decoration-none contact-text"
          href="tel:+46734059213"
          target="_blank"
          rel="noopener noreferrer"
        >
          +46 73 405 92 13
        </Button>
      </div>
      <div className="contact-block">
        <img src={Mail} alt="Mail" className="contact-logo" />
        <Button
          variant="link"
          className="contact-text"
          href="mailto:https://twitter.com/uvhub_sthlm"
          rel="noopener noreferrer"
        >
          uv.hub.stockholm@gmail.com
        </Button>
      </div>
    </div>
  );
};

export default Contacts;
