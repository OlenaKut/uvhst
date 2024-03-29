import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Man from "../pictures/team_man.png";
import Woman from "../pictures/team_woman.png";
import "../components/pages/OurTeam.css";
import { useTranslation } from "react-i18next";

const Page5Team = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="m-auto px-sm-5 px-3 py-3 team-block mb-5 shadow">
        <h1 className="m-auto text-center p-4 team-title">
          {t("page5.titleP5")}
        </h1>
        <p className="team-text">{t("page5.text-mainP5")}</p>
        <p className="team-text">{t("page5.text-twoP5")}</p>
        <p className="team-text">{t("page5.text-threeP5")}</p>
      </div>
      <Container fluid className="m-auto text-center">
        <Row className="d-inline-flex justify-content-center" xs="auto">
          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Man} />
              <Card.Body>
                <Card.Title>{t("page5.card-name-taras")}</Card.Title>
                <Card.Text>{t("page5.card-text-taras")}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Woman} />
              <Card.Body>
                <Card.Title>{t("page5.card-name-olena")}</Card.Title>
                <Card.Text>{t("page5.card-text-olena")}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Man} />
              <Card.Body>
                <Card.Title>{t("page5.card-name-vasil")}</Card.Title>
                <Card.Text>{t("page5.card-text-vasil")}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Woman} className="woman" />
              <Card.Body>
                <Card.Title>{t("page5.card-name-nataliia")}</Card.Title>
                <Card.Text>{t("page5.card-text-nataliia")}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page5Team;
