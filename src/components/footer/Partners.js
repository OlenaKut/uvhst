import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Embassy from "../../pictures/Embassy.png";

const Partners = () => {
  return (
    <div className="m-auto text-center">
      <h1 className="partners-title">Our Partners</h1>
      <Container fluid className="m-auto">
        <Row className="" md="auto">
          <Col className="">
            <Button
              variant="link"
              className=""
              href="https://twitter.com/uvhub_sthlm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={Embassy} alt="Embassy" className="partner-link" />
            </Button>
          </Col>
          <Col xs={6} className="">
            <Button
              variant="link"
              className=""
              href="https://twitter.com/uvhub_sthlm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={Embassy} alt="Embassy" className="partner-link" />
            </Button>
          </Col>
          <Col className="">
            <Button
              variant="link"
              className=""
              href="https://twitter.com/uvhub_sthlm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={Embassy} alt="Embassy" className="partner-link" />
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs md="6" lg="3" className="">
            <Button
              variant="link"
              className=""
              href="https://twitter.com/uvhub_sthlm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={Embassy} alt="Embassy" className="partner-link" />
            </Button>
          </Col>
          <Col xs md="6" lg="3" className="">
            <Button
              variant="link"
              className=""
              href="https://twitter.com/uvhub_sthlm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={Embassy} alt="Embassy" className="partner-link" />
            </Button>
          </Col>
          <Col xs md="6" lg="3" className="">
            <Button
              variant="link"
              className=""
              href="https://twitter.com/uvhub_sthlm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={Embassy} alt="Embassy" className="partner-link" />
            </Button>
          </Col>
          <Col xs md="6" lg="3" className="">
            <Button
              variant="link"
              className=""
              href="https://twitter.com/uvhub_sthlm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={Embassy} alt="Embassy" className="partner-link" />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Partners;
