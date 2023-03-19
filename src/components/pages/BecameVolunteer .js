import React from "react";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { useTranslation } from "react-i18next";

const BecameVolunteer = () => {
  const { t } = useTranslation();

  return (
    <>
      <LinkContainer to="/Volunteer">
        <Button
          variant="link"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-0 shadow text-decoration-none rounded-2 py-1 px-2 ms-2 text-uppercase"
        >
          {t("page1.header-volunteer-btn")}
        </Button>
      </LinkContainer>
    </>
  );
};

export default BecameVolunteer;
