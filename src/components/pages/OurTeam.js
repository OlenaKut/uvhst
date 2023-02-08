import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Man from "../../pictures/team_man.png";
import Woman from "../../pictures/team_woman.png";
import "../pages/OurTeam.css";

const OurTeam = () => {
  return (
    <div>
      <div className="m-auto px-sm-5 px-3 py-3 team-block mb-5 shadow">
        <h1 className="m-auto text-center p-4 team-title">
          Our work and our team
        </h1>
        <p className="team-text">
          Ukrainian Volunteer Hub Stockholm is a team of volunteers who have
          come together since the first days of the war to help Ukraine. We help
          hospitals in Ukraine, orphanages, people who suffered from war and
          soldiers at the front. During our work, we collected more than SEK 2
          million and sent about 100 trucks with humanitarian aid to Ukraine.
          Now we are trying to collect more things that will help in Ukraine
          with light and heat - generators, heaters, flashlights, candles, warm
          things, as well as food and hygiene items. We are convinced that every
          donation is important and can save someone's life.
        </p>
        <p className="team-text">
          More than 500 volunteers joined us during the Ukrainian Volunteer Hub
          Stockholm operation. And there is always work for everyone.
        </p>
        <p className="team-text">
          We believe that together people can do extraordinary work and defeat
          any enemy!
        </p>
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
          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Man} />
              <Card.Body>
                <Card.Title>Roman Nagulyak</Card.Title>
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
