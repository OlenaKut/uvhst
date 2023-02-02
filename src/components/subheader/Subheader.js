import React from "react";
import "../subheader/subheader.css";
import swish from "../../pictures/swish.jpg";

const Subheader = () => {
  return (
    <div className="subheader container-fluid d-flex flex-column flex-md-row">
      <div className="donate-block">
        <p className="iwanthelp">I want to help</p>
        <div className="donate-text d-flex">
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
      <div className="about-info">
        <p className="">
          <span className="text-warning info-name">
            Ukrainian Volunteer Hub Stockholm
          </span>{" "}
          is a team of about 200 volunteers who have come together in February
          2022 to help Ukraine. We help hospitals in Ukraine, orphanages, people
          who suffered from war and soldiers at the front. During our work, we
          collected approximately SEK 2 million and sent more than 100 trucks
          with humanitarian aid to Ukraine. Now we are trying to collect more
          things that will help in Ukraine. We are convinced that every donation
          is important and can save someone's life.
        </p>
      </div>
    </div>
  );
};

export default Subheader;
