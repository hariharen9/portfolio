import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";
import Toolstack from "./Toolstack";
import AboutContent from "./AboutContent";
function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={20}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know more about <strong className="purple">ME</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "30px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
      <Container className="new-certifications">
        <h1 className="project-heading">
          My <strong className="purple">CERTIFICATIONS</strong>
        </h1>
        <br />
        <br />
        <Row className="resume">
          <Col md={6} className="resume-left">
            <AboutContent
              title="IBM - Cloud Advocate V2"
              date="November 2023"
              content={["IBM Cloud"]}
            />
            <AboutContent
              title="Kubernetes for Beginners"
              date="July 2023"
              content={["IBM Cloud"]}
            />
            <AboutContent
              title="Cloud Computing for Beginners - IaaS"
              date="June 2023"
              content={["IBM Cloud"]}
            />
            <AboutContent
              title="AWS Fundamentals"
              date="March 2021"
              content={["Amazon"]}
            />
            <AboutContent
              title="Self Taught Programmer"
              date="September 2020"
              content={["Udemy"]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <AboutContent
              title="Python for Everybody (SPECIALIZATION)"
              date="August 2020"
              content={["University of Michigan"]}
            />
            <AboutContent
              title="AI for Everyone"
              date="August 2020"
              content={["Deeplearning.ai"]}
            />

            <AboutContent
              title="Blockchain Basics"
              date="August 2020"
              content={["University of Buffallo"]}
            />
            <AboutContent
              title="Flutter Bootcamp"
              date="August 2020"
              content={["Udemy"]}
            />
            <AboutContent
              title="Javascript Bootcamp"
              date="June 2020"
              content={["Codecademy"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
