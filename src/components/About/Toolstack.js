import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiNetlify,
  SiUnity,
  SiBlender,
  SiAdobeaftereffects,
  SiFigma,
  SiAndroidstudio,
  SiNotion,
  SiJirasoftware,
  SiGit,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import {
  DiTrello,
  DiStackoverflow,
  DiWindows,
  DiPhotoshop,
  DiIllustrator,
  DiTerminal,
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-text="GitHub">
        <AiFillGithub />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-text="Linux">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-text="Windows">
        <DiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-text="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-text="Jira">
        <SiJirasoftware />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-text="Blender">
        <SiBlender />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-text="Unity">
        <SiUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-text="Photoshop">
        <DiPhotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-text="Illustrator">
        <DiIllustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-text="After Effects">
        <SiAdobeaftereffects />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-text="Terminal">
        <DiTerminal />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-text="Android Studio">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-text="Figma">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-text="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-text="Heroku">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-text="Netlify">
        <SiNetlify />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-text="Trello">
        <DiTrello />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-text="Notion">
        <SiNotion />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-text="Stack Overflow">
        <DiStackoverflow />
      </Col>
    </Row>
  );
}

export default Toolstack;
