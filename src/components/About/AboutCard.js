import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hariharen </span>
            from <span className="purple"> Coimbatore (TN), India.</span>
            <br />I am a Junior pursuing Computer Science Engineering at
            Coimbatore Institute of Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>

            <li className="about-activity">
              <ImPointRight /> Movies & Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Making
            </li>
            <li className="about-activity">
              <ImPointRight /> Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Youtube Streaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> And many more...
            </li>
          </ul>
          <br />

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "It has become appallingly obvious that our technology has exceeded
            our humanity."{" "}
          </p>
          <br />
          <footer className="blockquote-footer">
            Albert Einstein, Scientist
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
