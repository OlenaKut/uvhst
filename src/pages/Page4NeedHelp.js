import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../components/pages/Help.css";
import Button from "react-bootstrap/Button";
import Mail from "../pictures/Mail_icon_black.png";
import Facebook_icon from "../pictures/Facebook_icon.png";
import Instagram_icon from "../pictures/Instagram_icon.webp";

const Page4NeedHelp = () => {
  return (
    <div>
      <Header />
      <div className="need-help rounded-2 shadow m-auto my-5 p-4 container-fluid">
        <h2 className="vol-title text-center mb-3">How to get help</h2>
        <p className="need-subtext">
          If you represent or cooperate with a military unit or group,
          hospitals, orphanages, homes for the elderly or people with
          disabilities, a public organization that helps internally displaced
          persons in Ukraine, or people affected by war, you can contact us for
          humanitarian aid and send a request.
        </p>
        <h5 className="need-undertext">
          Please send your request to{" "}
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
          The request must necessarily contain:
        </h5>
        <ul>
          <li>The name of your organization</li>
          <li>Registration tax number EDRPOU</li>
          <li>
            The most detailed list of necessary things and the desired quantity
          </li>
          <li>
            Contact phone number, as well as the name and surname of the contact
            person{" "}
          </li>
        </ul>
        <p>
          <span className="text-danger need-subtext">!!!</span> Unfortunately,
          we cannot send aid to individuals because we can only forward aid to
          registered volunteer or military organizations.
        </p>
        <p>
          <span className="text-danger need-subtext">!!!</span>Unfortunately, we
          cannot fulfill the request if your organization is not displayed under
          the EDRPOU tax number provided. Please provide a valid EDRPOU code to
          continue cooperation.
        </p>
        <p>
          <span className="text-danger need-subtext">!!!</span>Unfortunately, we
          cannot provide equipment/drugs/equipment that are prohibited for
          purchase and transportation
        </p>

        <h5 className="text-center my-4 need-undertext">
          Thank you for your work and support to Ukraine!
        </h5>
      </div>
      <div className="need-help rounded-2 shadow m-auto my-5 p-4 container-fluid">
        <h2 className="vol-title text-center mb-3">
          A report on the assistance received
        </h2>
        <p className="text-danger fw-normal lh-base need-subtext">
          In order for us to be able to continue our work and report to our
          donors, a condition of cooperation is your photo and video report on
          the aid received:
        </p>
        <ul>
          <li> At least three photographs</li>
          <li>One short video (10-15 seconds)</li>
          <li>A short text description from the recipient</li>
        </ul>
        <p>
          We ask that you send them to us by mail{" "}
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
          We would be grateful if you would also make a post on
          <Button
            variant="link"
            href="https://www.facebook.com/uavhub.stockholm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <img src={Facebook_icon} alt="FB" className="media-help" /> Facebook
          </Button>
          or
          <Button
            variant="link"
            href="https://www.instagram.com/uavhub.stockholm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            {" "}
            <img
              src={Instagram_icon}
              alt="Instagram"
              className="media-help"
            />{" "}
            Instagram
          </Button>
          tagging our account.
        </p>

        <h5 className="text-center my-4 need-undertext">
          Thank you for your work and support to Ukraine!
        </h5>
      </div>
      <Footer />
    </div>
  );
};

export default Page4NeedHelp;
