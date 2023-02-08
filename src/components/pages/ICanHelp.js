import React from "react";
import "../pages/Help.css";
import BecameVolunteer from "../pages/BecameVolunteer ";
import DonateHere from "../pages/DonateHere";
import Button from "react-bootstrap/Button";
import Mail from "../../pictures/Mail_icon_black.png";

const ICanHelp = () => {
  return (
    <div className="my-5">
      <div className="vol-block rounded-2 shadow m-auto container-fluid">
        <h3 className="vol-title text-center">I want to become a volunteer</h3>
        <p className="vol-text">
          We always need good help! You can find more information here:{" "}
          <BecameVolunteer />
        </p>
      </div>
      <div className="vol-block rounded-2 shadow my-4 m-auto container-fluid">
        <h3 className="vol-title text-center">I want donate money or things</h3>

        <h4 className="text-warning text-center">We welcome all donations!</h4>
        <p className="vol-text">
          We partner with volunteer organizations in Ukraine where we send
          supplies and help in any way we can. We send help to the hospitals in
          Ukraine, orphanages, people who suffered from war and soldiers at the
          front. You can see a list of what we need most right now on the home
          page. Also you can find more information about our donation account
          here: <DonateHere />
        </p>
      </div>
      <div className="vol-block rounded-2 shadow m-auto my-4 container-fluid">
        <h3 className="vol-title text-center">Partnership</h3>
        <p className="vol-text">
          We are always looking for partners for cooperation in our work,
          because thanks to this together we become better and can do much more.
          If your organization or company would like to join us, please contact
          us: <img src={Mail} alt="Mail" className="contact-logo-page3 ms-1" />
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
