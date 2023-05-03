import React, { useState } from "react";
import "../header/HeaderMenu.css";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

const AlternativeButtonOne = () => {
  const [isShownOne, setIsShownOne] = useState(false);
  return (
    <div>
      <LinkContainer to="/Volunteer">
        <Button
          variant="link"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsShownOne(true)}
          onMouseLeave={() => setIsShownOne(false)}
        >
          <i className="fa-solid fa-handshake volunteerButton"></i>
        </Button>
      </LinkContainer>
      {isShownOne && <p className="alt-button-text">Become a volunteer</p>}
    </div>
  );
};
const AlternativeButtonTwo = () => {
  const [isShownTwo, setIsShownTwo] = useState(false);
  return (
    <div>
      <LinkContainer to="/Donate">
        <Button
          variant="link"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsShownTwo(true)}
          onMouseLeave={() => setIsShownTwo(false)}
        >
          <i className="fa-solid fa-hand-holding-heart donateButton"></i>
        </Button>
      </LinkContainer>
      {isShownTwo && <p className="alt-button-text">Donate here</p>}
    </div>
  );
};

export { AlternativeButtonOne, AlternativeButtonTwo };
