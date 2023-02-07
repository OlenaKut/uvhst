import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Projects = () => {
  return (
    <Container fluid className="text-white my-5">
      <Row>
        <Col sm="12" md="6" lg="6" xl="3" className="p-0 my-1">
          {" "}
          <div className="blue-box">
            <h3 className="project-title">Assistance to children in Ukraine</h3>
            <p className="project-text">
              Thousands of children in Ukraine need help. You can join one of
              our projects
            </p>
            <Button
              variant="link"
              className="view-button text-dark rounded-0 px-4"
            >
              VIEW DETAILS
            </Button>
          </div>
        </Col>
        <Col sm="12" md="6" lg="6" xl="3" className="p-0 my-1">
          <div className="grey-box">
            {" "}
            <h3 className="project-title">
              Assistance to internally displaced persons
            </h3>
            <p className="project-text">
              Millions of people in Ukraine were left without homes and means of
              livelihood. Even the smallest help is important
            </p>
            <Button
              variant="link"
              className="view-button text-dark rounded-0 px-4"
            >
              VIEW DETAILS
            </Button>
          </div>
        </Col>
        <Col sm="12" md="6" lg="6" xl="3" className="p-0 my-1">
          <div className="blue-box">
            {" "}
            <h3 className="project-title">Assistance to refugees in Sweden</h3>
            <p className="project-text">
              Hundreds of thousands of Ukrainians were forced to flee their
              homes with one alarming suitcase. They need our support and help
            </p>
            <Button
              variant="link"
              className="view-button text-dark rounded-0 px-4"
            >
              VIEW DETAILS
            </Button>
          </div>
        </Col>
        <Col sm="12" md="6" lg="6" xl="3" className="p-0 my-1">
          <div className="grey-box">
            {" "}
            <h3 className="project-title">Military assistance</h3>
            <p className="project-text">
              Thousands of soldiers from Ukraine and other countries fight for
              victory over the aggressor every day. We can help with ammunition
              and other essentials at the front
            </p>
            <Button variant="link" className="view-button text-dark rounded-0">
              VIEW DETAILS
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
    /*<div className="d-md-flex d-block projects text-white">
      <div className="blue-box flex-fill">
        <div>
          <h2>Assistance to children in Ukraine</h2>
          <p>
            Thousands of children in Ukraine need help. You can join one of our
            projects
          </p>
        </div>
        <div>
          <Button
            variant="link"
            className="view-button text-dark rounded-0 px-4"
          >
            VIEW DETAILS
          </Button>
        </div>
      </div>
      <div className="grey-box flex-fill">
        {" "}
        <h2>Assistance to internally displaced persons</h2>
        <p>
          Thousands of children in Ukraine need help. You can join one of our
          projects
        </p>
        <Button variant="link" className="view-button text-dark rounded-0 px-4">
          VIEW DETAILS
        </Button>
      </div>
      <div className="blue-box flex-fill">
        {" "}
        <h2>Assistance to refugees in Sweden</h2>
        <p>
          Thousands of children in Ukraine need help. You can join one of our
          projects
        </p>
        <Button variant="link" className="view-button text-dark rounded-0 px-4">
          VIEW DETAILS
        </Button>
      </div>
      <div className="grey-box flex-fill">
        {" "}
        <h2>Military assistance</h2>
        <p>
          Thousands of children in Ukraine need help. You can join one of our
          projects
        </p>
        <Button variant="link" className="view-button text-dark rounded-0 px-4">
          VIEW DETAILS
        </Button>
      </div>
    </div>*/
  );
};

export default Projects;
