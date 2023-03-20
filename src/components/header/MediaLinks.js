import React from "react";
import Button from "react-bootstrap/Button";
import Facebook_icon from "../../pictures/Facebook_icon.png";
import Twitter_logo from "../../pictures/Twitter_logo.webp";
import Instagram_icon from "../../pictures/Instagram_icon.webp";
import Mail_icon from "../../pictures/Mail_icon.png";
import Linkedin_icon from "../../pictures/LinkedIn_logo.webp";

const MediaLinks = () => {
  return (
    <div className="media-links">
      <Button
        variant="link"
        href="https://www.facebook.com/uavhub.stockholm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Facebook_icon} alt="FB" className="media" />
      </Button>
      <Button
        variant="link"
        href="https://twitter.com/uvhub_sthlm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Twitter_logo} alt="Twitter" className="media" />
      </Button>
      <Button
        variant="link"
        href="https://www.instagram.com/uavhub.stockholm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Instagram_icon} alt="Instagram" className="media" />
      </Button>
      <Button
        variant="link"
        href="https://www.linkedin.com/company/uv-hub-stockholm/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Linkedin_icon} alt="Linkedin" className="media" />
      </Button>
      <Button
        variant="link"
        href="mailto:uv.hub.stockholm@gmail.com"
        rel="noopener noreferrer"
      >
        <img src={Mail_icon} alt="Mail" className="media" />
      </Button>
    </div>
  );
};

export default MediaLinks;
