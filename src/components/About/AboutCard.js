import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div className="about-text">
          {/* <h2 className="blue">About Me</h2> */}
          <ul>
            <li>
              Hi! I'm <b className="blue">Hariharen</b>, a passionate{" "}
              <b className="blue">Computer Science Engineer</b> graduate from
              CIT, Coimbatore.
            </li>
            <li>
              Currently working at <b className="blue">TCS</b> as a Systems
              Engineer, diving into the cloud space with{" "}
              <b className="blue">IBM Cloud</b>.
            </li>
            <li>
              My professional journey began at <b className="blue">IBM</b> as a
              contract employee in the VPC division, where I gained foundational
              expertise in cloud infrastructure through{" "}
              <b className="blue">Docker and Kubernetes.</b>
            </li>
            <li>
              I now specialize in <b className="blue">Network Overlay</b>,
              focusing on optimizing cloud systems for performance, security,
              and scalability.
            </li>
            <li>
              With a strong interest in technology, I excel in{" "}
              <b className="blue">JavaScript, Python, and Go</b>, and have
              experience with frameworks like <b>React</b> and <b>Flutter</b>.
            </li>
            <li>
              I’m passionate about building solutions, from crafting engaging
              websites to launching <b className="blue">two apps</b> on the Play
              Store. I also co-founded a startup centered around web
              development.
            </li>
            <li>
              Beyond work, I enjoy exploring automation and scripting to solve
              everyday challenges.
            </li>
            <li>
              Let's connect and share ideas in this ever-evolving tech world!
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
