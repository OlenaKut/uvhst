import React from "react";
import Volunteers from "../../pictures/foto/volunteers.jpg";
import Button from "react-bootstrap/Button";
import Telegram from "../../pictures/Telegram-logo.png";
import Mail_icon from "../../pictures/Mail_icon.png";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Volunteer.css";

const Volunteer = () => {
  return (
    <div>
      <Header />
      <div className="volunteer">
        <h2 className="text-center my-4 volunteer-header">
          Become a Volunteer in Ukrainian Volunteer Hub Stockholm
        </h2>
        <p className="volunteer-text mb-5">
          Becoming a volunteer at the{" "}
          <span className="UVHS text-warning">
            Ukrainian Volunteer Hub Stockholm
          </span>{" "}
          is one of the ways to support Ukraine in this illegal war that Russia
          is waging against us. We are a non-party and non-religious
          organization, the main tasks of which are to conduct social,
          informational and charitable activities, to provide financial,
          humanitarian and informational support to both individuals and legal
          entities that legally conduct activities and respect democratic
          values, to conduct informational work regarding Ukraine with the aim
          of dissemination of knowledge about Ukraine and its culture, as well
          as coverage of topical issues of the political, economic and social
          situation in Ukraine, to help and support both Swedish and Ukrainian
          citizens.
        </p>
        <h4 className="text-center mb-3 vol-subheader">
          As a volunteer, you can help us with the following issues:
        </h4>
        <ul>
          <li>
            Information work and dissemination of information in social
            networks, at rallies and various events, at workplaces, as well as
            among friends, relatives and acquaintances
          </li>
          <li>
            {" "}
            Work in the logistics hub, which consists in receiving, sorting and
            sending donations to Ukraine
          </li>
          <li>
            Administrative work related to help in logistics, collecting and
            processing requests, maintaining pages in social networks, etc
          </li>
        </ul>
        <p className="fw-semibold as-text">
          As a volunteer, you choose what you can help with, as well as how much
          time you can devote to it. We are grateful to everyone, the who works
          with us and wants to work. We will be happy to answer all questions
          and help choose the direction of volunteering if necessary.
        </p>
        <p className="text-warning fw-semibold p-0 m-0">
          To become a volunteer in , please fill out the form in our Telegram
          channel
          <Button
            className="volunteer-link"
            variant="link"
            href="https://t.me/UkrainianVolunteerHubStockholm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Telegram} alt="Telegram" className="telegram" />
            UkrainianVolunteerHubStockholm
          </Button>
        </p>
        <p>
          If you have additional questions, please contact us at our postal
          address
          <Button
            className="volunteer-link"
            variant="link"
            href="mailto:https://twitter.com/uvhub_sthlm"
            rel="noopener noreferrer"
          >
            <img src={Mail_icon} alt="Mail" className="contact-logo mx-2" />
            uv.hub.stockholm@gmail.com
          </Button>
        </p>
        <h3 className="text-center text-warning my-xs-5 mb-3 together-text">
          Only together we will win!
        </h3>
        <img
          src={Volunteers}
          alt="Our Volunteers"
          className="rounded-2 m-0 img-fluid"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Volunteer;
