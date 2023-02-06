import React from "react";
import Contacts from "./Contacts";
import MediaLinks from "../header/MediaLinks";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Subscribe from "../footer/Subscribe";

import "../footer/Footer.css";

const Footer = () => {
  return (
    <div>
      <Container fluid className="footer text-center p-lg-5 p-2">
        <Row>
          <Col xs md="4">
            <div>
              <Contacts />
            </div>
          </Col>
          <Col xs md="4">
            <div>
              {" "}
              <MediaLinks />
            </div>
          </Col>
          <Col xs md="4">
            <Subscribe />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
