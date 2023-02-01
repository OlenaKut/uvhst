import React, { useState } from "react";
import "../header/HeaderMenu.css";
import Button from "react-bootstrap/Button";

const AlternativeButtonOne = () => {
  const [isShownOne, setIsShownOne] = useState(false);
  return (
    <div>
      <Button
        variant="link"
        href="https://twitter.com/uvhub_sthlm"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsShownOne(true)}
        onMouseLeave={() => setIsShownOne(false)}
      >
        <i className="fa-solid fa-handshake volunteerButton"></i>
      </Button>
      {isShownOne && <p className="alt-button-text">Become a volunteer</p>}
    </div>
  );
};
const AlternativeButtonTwo = () => {
  const [isShownTwo, setIsShownTwo] = useState(false);
  return (
    <div>
      <Button
        variant="link"
        href="https://twitter.com/uvhub_sthlm"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsShownTwo(true)}
        onMouseLeave={() => setIsShownTwo(false)}
      >
        <i className="fa-solid fa-hand-holding-heart donateButton"></i>
      </Button>
      {isShownTwo && <p className="alt-button-text">Donate here</p>}
    </div>
  );
};

export { AlternativeButtonOne, AlternativeButtonTwo };
