import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const Emailjs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9193qoi",
        "template_sjkc16g",
        form.current,
        "TzYovzw7_cod5ImXm"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for subscribing!");
          form.current.value = " ";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="m-auto">
      <h6>SUBSCRIBE</h6>
      <p className="text-start subscribe-text">
        Join our weekly email newsletter to receive news, events and other
        announcements about what is going on at our Hub
      </p>
      <Form ref={form} onSubmit={sendEmail}>
        <Row className="mb-3">
          <Form.Group as={Col} md="" controlId="validationCustomUsername">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">🙍🏻‍♂️</InputGroup.Text>
              <Form.Control
                type="text"
                name="user_name"
                placeholder="Enter your name"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Enter a name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="" controlId="validationCustomUsername">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                aria-describedby="inputGroupPrepend"
                required
                name="user_email"
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

export default Emailjs;
