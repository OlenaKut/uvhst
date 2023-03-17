import React from "react";
import { useTranslation } from "react-i18next";
import swish from "../../pictures/swish.jpg";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Donate.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Donate = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="donate-page">
        <Container fluid>
          <Row className="justify-content-between">
            <Col className="text-center mb-lg-5 mb-1" md>
              <h2 className="donate-title text-danger">
                {t("subheader.iwant-to-help-text")}
              </h2>
              <img src={swish} alt="Swish" className="donate-swish" />
            </Col>

            <Col className="" md>
              <h4 className="donate-subtitle mb-lg-5 mb-3 shadow">
                Many people in Ukraine need help and each of us can help. There
                are no small donations. Every donation can save someone's life
              </h4>

              <p className="fw-semibold account">
                <span className="text-danger">Recipient:</span> Ukrainian
                Institute of Sweden
                <br />
                <span className="text-danger">Bankgiro:</span> 109-9316
                <br />
                <span className="text-danger">Swish number:</span> 1230988212
                <br />
                <span className=" text-danger">Message:</span> UAaid
                <br />
                <span className="text-danger">IBAN:</span>{" "}
                SE5480000832799249918781
                <br />
                <span className="text-danger">BIC:</span> SWEDSESS
                <br />
                <span className="text-danger">Monobank:</span>{" "}
                <a
                  href="https://send.monobank.ua/jar/AL6jVZ3bBK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://send.monobank.ua
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
