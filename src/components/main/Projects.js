import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="text-white my-5">
      <Row>
        <Col sm="12" md="6" lg="6" xl="3" className="p-0 my-1">
          {" "}
          <div className="blue-box">
            <h3 className="project-title">
              {" "}
              {t("projects.children.children-title")}
            </h3>
            <p className="project-text">
              {t("projects.children.children-text")}
            </p>
            <Button
              variant="link"
              className="view-button text-dark rounded-0 px-4"
            >
              {t("projects.children.projects-btn")}
            </Button>
          </div>
        </Col>
        <Col sm="12" md="6" lg="6" xl="3" className="p-0 my-1">
          <div className="grey-box">
            {" "}
            <h3 className="project-title">
              {t("projects.displsced.displsced-title")}
            </h3>
            <p className="project-text">
              {t("projects.displsced.displsced-text")}
            </p>
            <Button
              variant="link"
              className="view-button text-dark rounded-0 px-4"
            >
              {t("projects.children.projects-btn")}
            </Button>
          </div>
        </Col>
        <Col sm="12" md="6" lg="6" xl="3" className="p-0 my-1">
          <div className="blue-box">
            {" "}
            <h3 className="project-title">
              {t("projects.refugees.refugees-title")}
            </h3>
            <p className="project-text">
              {t("projects.refugees.refugees-text")}
            </p>
            <Button
              variant="link"
              className="view-button text-dark rounded-0 px-4"
            >
              {t("projects.children.projects-btn")}
            </Button>
          </div>
        </Col>
        <Col sm="12" md="6" lg="6" xl="3" className="p-0 my-1">
          <div className="grey-box">
            {" "}
            <h3 className="project-title">
              {t("projects.military.military-title")}
            </h3>
            <p className="project-text">
              {t("projects.military.military-text")}
            </p>
            <Button variant="link" className="view-button text-dark rounded-0">
              {t("projects.children.projects-btn")}
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
