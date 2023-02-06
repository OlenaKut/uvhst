import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const Subscribe = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="m-auto">
      <h6>SUBSCRIBE</h6>
      <p className="text-start subscribe-text">
        Join our weekly email newsletter to receive news, events and other
        announcements about what is going on at our Hub
      </p>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="" controlId="validationCustomUsername">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Enter a email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Form.Group className="mb-0 container d-flex justify-content-between">
          <Form.Check
            className="d-flex justify-content-start"
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
          <Button
            className="subscribe-button border px-2 border-info"
            variant="light"
            type="submit"
          >
            SUBSCRIBE
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Subscribe;
