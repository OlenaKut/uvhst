import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Embassy from "../../pictures/Embassy.png";
import Nordic from "../../pictures/Nordic.png";
import UIS from "../../pictures/UIS.png";
import Plast from "../../pictures/Plast.png";
import Church from "../../pictures/Church.png";
import Pop from "../../pictures/Pop_logo.png";
import Palianytsia from "../../pictures/Palianytsia-logo.jfif";
import "../main/Partners.css";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation();

  return (
    <div className="m-auto text-center partners-block container">
      <h1 className="partners-title">{t("projects.partners")}</h1>
      <Container fluid className="m-auto text-center">
        <Row className="d-inline-flex justify-content-center m-2" xs="auto">
          <Col>
            <Button
              variant="link"
              href="https://twitter.com/uvhub_sthlm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={Embassy}
                alt="Embassy"
                className="partner-link small-logo"
              />
            </Button>
          </Col>
          <Col>
            <Button
              variant="link"
              href="https://twitter.com/uvhub_sthlm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={Nordic} alt="Nordic" className="partner-link" />
            </Button>
          </Col>
          <Col>
            <Button
              variant="link"
              href="https://twitter.com/uvhub_sthlm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={UIS} alt="UIS" className="partner-link small-logo" />
            </Button>
          </Col>
        </Row>
        <Row className="d-inline-flex justify-content-center m-2" xs="auto">
          <Col>
            <Button
              variant="link"
              href="https://twitter.com/uvhub_sthlm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={Plast}
                alt="Plast"
                className="partner-link small-logo"
              />
            </Button>
          </Col>
          <Col>
            <Button
              variant="link"
              href="https://twitter.com/uvhub_sthlm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={Church} alt="Church" className="partner-link" />
            </Button>
          </Col>
          <Col>
            <Button
              variant="link"
              href="https://twitter.com/uvhub_sthlm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={Pop} alt="Pop" className="partner-link" />
            </Button>
          </Col>
          <Col>
            <Button
              variant="link"
              href="https://twitter.com/uvhub_sthlm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={Palianytsia}
                alt="Palianitsia"
                className="partner-link mt-3"
              />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Partners;
