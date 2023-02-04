import React from "react";
import Button from "react-bootstrap/Button";

const Projects = () => {
  return (
    <div className="d-md-flex d-block projects text-white">
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
    </div>
  );
};

export default Projects;
