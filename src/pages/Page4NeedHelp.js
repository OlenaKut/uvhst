import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../components/pages/Help.css";
import Button from "react-bootstrap/Button";
import Mail from "../pictures/Mail_icon_black.png";
import Facebook_icon from "../pictures/Facebook_icon.png";
import Instagram_icon from "../pictures/Instagram_icon.webp";
import { useTranslation } from "react-i18next";

const Page4NeedHelp = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="need-help shadow m-auto my-5 p-4 container-fluid">
        <h2 className="vol-title text-center mb-3">
          {" "}
          {t("page4.title-get-help")}
        </h2>
        <p className="need-subtext">{t("page4.text-get-help")}</p>
        <h5 className="need-undertext">
          {t("page4.send-request")}
          <img src={Mail} alt="Mail" className="contact-logo-page3 ms-1" />
          <Button
            variant="link"
            href="mailto:https://twitter.com/uvhub_sthlm"
            rel="noopener noreferrer"
          >
            uv.hub.stockholm@gmail.com
          </Button>{" "}
        </h5>
        <h5 className="text-danger need-undertext">
          {t("page4.request-contain")}
        </h5>
        <ul>
          <li>{t("page4.list1-get-help")}</li>
          <li>{t("page4.list2-get-help")}</li>
          <li>{t("page4.list3-get-help")}</li>
          <li>{t("page4.list4-get-help")}</li>
        </ul>
        <p>
          <span className="text-danger need-subtext">!!!</span>
          {t("page4.span1-get-help")}
        </p>
        <p>
          <span className="text-danger need-subtext">!!!</span>
          {t("page4.span2-get-help")}
        </p>
        <p>
          <span className="text-danger need-subtext">!!!</span>
          {t("page4.span3-get-help")}
        </p>

        <h5 className="text-center my-4 need-undertext">{t("page4.thank")}</h5>
      </div>
      <div className="need-help shadow m-auto my-5 p-4 container-fluid">
        <h2 className="vol-title text-center mb-3">
          {t("page4.title-report")}
        </h2>
        <p className="text-danger fw-normal lh-base need-subtext">
          {t("page4.subtitle-report")}
        </p>
        <ul>
          <li>{t("page4.list1-report")}</li>
          <li>{t("page4.list2-report")}</li>
          <li>{t("page4.list3-report")}</li>
        </ul>
        <p>
          {t("page4.text-ask-report")}
          <img src={Mail} alt="Mail" className="contact-logo-page3 ms-1" />
          <Button
            variant="link"
            href="mailto:https://twitter.com/uvhub_sthlm"
            rel="noopener noreferrer"
          >
            uv.hub.stockholm@gmail.com
          </Button>
        </p>
        <p>
          {t("page4.text-post-report")}
          <Button
            variant="link"
            href="https://www.facebook.com/uavhub.stockholm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <img src={Facebook_icon} alt="FB" className="media-help" /> Facebook
          </Button>
          {t("page4.or-report")}
          <Button
            variant="link"
            href="https://www.instagram.com/uavhub.stockholm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <img src={Instagram_icon} alt="Instagram" className="media-help" />{" "}
            Instagram
          </Button>
          {t("page4.text-tagging-report")}
        </p>

        <h5 className="text-center my-4 need-undertext">{t("page4.thank")}</h5>
      </div>
      <Footer />
    </div>
  );
};

export default Page4NeedHelp;
