import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useTranslation } from "react-i18next";

const Emailjs = () => {
  const { t } = useTranslation();
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
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="m-auto">
      <h6>{t("footer.subscribe-title")}</h6>
      <p className="text-start subscribe-text">{t("footer.subscribe-text")}</p>
      <Form ref={form} onSubmit={sendEmail}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">🙍🏻‍♂️</InputGroup.Text>
              <Form.Control
                type="text"
                name="user_name"
                placeholder={t("footer.form-name")}
                aria-describedby="inputGroupPrepend"
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col}>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="email"
                name="user_email"
                placeholder={t("footer.form-email")}
                aria-describedby="inputGroupPrepend"
                required
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Form.Group className="mb-0 container d-flex justify-content-between">
          <Form.Check
            className="d-flex justify-content-start"
            required
            label={t("footer.agree")}
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
          <Button
            className="subscribe-button border px-2 border-info"
            variant="light"
            type="submit"
          >
            {t("footer.subscribe-title")}
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Emailjs;
