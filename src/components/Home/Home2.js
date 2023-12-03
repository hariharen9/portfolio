import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME TELL YOU<span className='purple'> A BIT </span> ABOUT
              MYSELF
            </h1>

            <p className='home-about-body'>
              I've always loved Computers, Wanting to know how this blackbox
              works underneth. That curiosity brought me into the world of
              Programming.
              <br />
              <br />I am fluent in languages like
              <i>
                <b className='purple'> Javascript, Python & Go. </b>
              </i>
              <br />
              And I have experience working with Technologies like
              <i>
                <b className='purple'>
                  {' '}
                  Docker, Kubernetes, React and Flutter{' '}
                </b>
              </i>{' '}
              to say a few.
              <br />
              <br />
              My fields of Interest includes building new&nbsp;
              <i>
                <b className='purple'>Web Applications, Cloud Technologies </b>{' '}
                and also in areas related to{' '}
                <b className='purple'>Mobile Apps and Game Development.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also play a lot of{' '}
              <b className='purple'>Video Games</b> and I also love to spend my
              leisure time with some &nbsp;
              <i>
                <b className='purple'>Movies and Series</b>
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        {/* <Row>
          <Col md={12} className='home-about-social'>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <h1>FIND ME ON</h1>

            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/hariharen9'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://twitter.com/thisishariharen'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/hariharen9/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.instagram.com/thisishariharen/'
                  className='icon-colour home-social-icons'
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  )
}
export default Home2;
