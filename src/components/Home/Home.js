import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/guy_coding.svg";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> HariHaren</strong>
              </h1>
              <h1 className="heading-name">
                Currently working as
                <strong className="main-name"> SDE @ IBM</strong>
              </h1>
              {/* <h5>Good To See You here!</h5> */}

              <div
                style={{
                  paddingInline: 48,
                  textAlign: "left",
                  paddingBlock: 25,
                }}
              >
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;
