import React from "react";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

const DonateHere = () => {
  return (
    <>
      <LinkContainer to="/Volunteer">
        <Button
          variant="link"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-0 shadow text-decoration-none rounded-2 py-1 px-2 ms-2"
        >
          DONATE HERE
        </Button>
      </LinkContainer>
    </>
  );
};

export default DonateHere;
