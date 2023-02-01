import React, { useState } from "react";
import "../header/HeaderMenu.css";
import Button from "react-bootstrap/Button";

const AlternativeButtonOne = () => {
  const [isShownOne, setIsShownOne] = useState(false);
  return (
    <div>
      <Button
        className="volunteerButton rounded-0"
        variant="link"
        href="https://twitter.com/uvhub_sthlm"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsShownOne(true)}
        onMouseLeave={() => setIsShownOne(false)}
      >
        Hov!
      </Button>
      {isShownOne && <div>Become a volunteer</div>}
    </div>
  );
};
const AlternativeButtonTwo = () => {
  const [isShownTwo, setIsShownTwo] = useState(false);
  return (
    <div>
      <Button
        className="donateButton rounded-0"
        variant="link"
        href="https://twitter.com/uvhub_sthlm"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsShownTwo(true)}
        onMouseLeave={() => setIsShownTwo(false)}
      >
        Hov!
      </Button>
      {isShownTwo && <div>Donate here</div>}
    </div>
  );
};

export { AlternativeButtonOne, AlternativeButtonTwo };
