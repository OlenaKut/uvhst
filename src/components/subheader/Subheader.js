import React from "react";
import "../subheader/subheader.css";
import swish from "../../pictures/swish.jpg";

const Subheader = () => {
  return (
    <div className="subheader">
      <div className="donate-block postion-absolute">
        <p className="iwanthelp">I want to help</p>
        <div className="donate-text d-flex postion-absolute">
          <div>
            <h4 className="mx-3 my-1 text-primary fw-normal"> Donate here:</h4>
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
    </div>
  );
};

export default Subheader;
