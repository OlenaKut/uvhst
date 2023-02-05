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

const Partners = () => {
  return (
    <div className="m-auto text-center w-50">
      <h1 className="partners-title m-2 m-sm-5">Our Partners</h1>
      <Container fluid>
        <Row className="my-3 my-xs-5" xs="auto">
          <Col>
            <Button
              variant="link"
              className=""
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
              className=""
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
              className=""
              href="https://twitter.com/uvhub_sthlm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={UIS} alt="UIS" className="partner-link small-logo" />
            </Button>
          </Col>
        </Row>
        <Row className="my-3 my-xs-5" xs="auto">
          <Col>
            <Button
              variant="link"
              className=""
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
              className=""
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
              className=""
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
              className=""
              href="https://twitter.com/uvhub_sthlm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={Palianytsia}
                alt="Palianitsia"
                className="partner-link"
              />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Partners;
