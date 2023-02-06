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
      <Container fluid className="footer text-center p-2">
        <Row>
          <Col md lg="4">
            <Contacts />
          </Col>
          <Col md lg="4">
            <MediaLinks />
          </Col>
          <Col md lg="4">
            <Subscribe />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
