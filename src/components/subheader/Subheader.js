import React from "react";
import "../subheader/subheader.css";
import swish from "../../pictures/swish.jpg";

import { useTranslation } from "react-i18next";

const Subheader = () => {
  const { t } = useTranslation();

  return (
    <div className="subheader container-fluid d-flex">
      <div className="donate-block d-lg-block d-none">
        <p className="iwanthelp">{t("subheader.iwant-to-help-text")}</p>
        <div className="donate-text d-flex">
          <div>
            <h4 className="mx-3 my-1 text-primary fw-normal">
              {t("page1.header-donate-btn")}
            </h4>
            <p className="mx-3 my-1 fw-semibold lh-sm">
              Recipient: Ukrainian Institute of Sweden
              <br />
              Bankgiro: 109-9316
              <br />
              Swish number: 1230988212
              <br />
              Message: UAaid
              <br />
              IBAN: SE5480000832799249918781
              <br />
              BIC: SWEDSESS
              <br />
              Monobank:{" "}
              <a
                href="https://send.monobank.ua/jar/AL6jVZ3bBK"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://send.monobank.ua
              </a>
            </p>
          </div>
          <img src={swish} alt="Swish" className="swish" />
        </div>
      </div>
      <div className="about-info">
        <p>
          <span className="text-warning info-name">
            Ukrainian Volunteer Hub Stockholm{" "}
          </span>
          {t("subheader.about-info")}
        </p>
      </div>
    </div>
  );
};

export default Subheader;
