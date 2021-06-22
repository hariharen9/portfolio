import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> TELL YOU A BIT </span> ABOUT
              MYSELF
            </h1>
            <p className="home-about-body">
              I always loved Computers. Wanted to know how they work deep down.
              Then I came across programming and oh boy! I fell in love with it
              and I have at least learnt something, I guess… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript and Python. </b>
              </i>
              <br />
              <br />
              My fields of Interest's includes building new&nbsp;
              <i>
                <b className="purple">Web Apps & Technologies </b> and also in
                areas related to{" "}
                <b className="purple">
                  Mobile Application Development and Game Development.
                </b>{" "}
                I love Developing ❤
              </i>
              <br />
              <br />
              Whenever possible, I also play a lot of{" "}
              <b className="purple">Video Games</b> and
              <i>
                <b className="purple"> I also love to spend my leisure with</b>
              </i>
              &nbsp;
              <i>
                <b className="purple">Movies and Series</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <h1>FIND ME ON</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hariharen9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/thisishariharen"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hariharen9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/thisishariharen/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
