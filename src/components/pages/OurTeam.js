import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Man from "../../pictures/team_man.png";
import Woman from "../../pictures/team_woman.png";
import "../pages/OurTeam.css";

const OurTeam = () => {
  return (
    <div>
      <h1 className="m-auto text-center p-5">Our best Team</h1>
      <div className="d-flex justify-content-between m-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Man} />
          <Card.Body>
            <Card.Title>Taras Sych</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Woman} />
          <Card.Body>
            <Card.Title>Olena Kutasevych</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Man} />
          <Card.Body>
            <Card.Title>Vasil Dizhak</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Woman} className="woman" />
          <Card.Body>
            <Card.Title>Nataliia Lukashevych</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Man} />
          <Card.Body>
            <Card.Title>Roman Nagulyak</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default OurTeam;
