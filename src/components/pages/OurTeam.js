import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Man from "../../pictures/team_man.png";
import Woman from "../../pictures/team_woman.png";
import "../pages/OurTeam.css";

import { useTranslation } from "react-i18next";

const OurTeam = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="m-auto px-sm-5 px-3 py-3 team-block mb-5 shadow">
        <h1 className="m-auto text-center p-4 team-title">{t("title")}</h1>
        <p className="team-text">{t("text-main")}</p>
        <p className="team-text">{t("text-two")}</p>
        <p className="team-text">{t("text-three")}</p>
      </div>
      <Container fluid className="m-auto text-center">
        <Row className="d-inline-flex justify-content-center" xs="auto">
          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Man} />
              <Card.Body>
                <Card.Title>Taras Sych</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Woman} />
              <Card.Body>
                <Card.Title>Olena Kutasevych</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Man} />
              <Card.Body>
                <Card.Title>Vasil Dizhak</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Woman} className="woman" />
              <Card.Body>
                <Card.Title>Nataliia Lukashevych</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurTeam;
