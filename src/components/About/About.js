import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Techstack from './Techstack'
import Aboutcard from './AboutCard'
import laptopImg from '../../Assets/about.png'
import Toolstack from './Toolstack'
import Resumecontent from './ResumeContent'

function About() {
  return (
    <Container fluid className='about-section'>
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={20}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              Know more about <strong className='purple'>ME</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: '120px', paddingBottom: '50px' }}
            className='about-img'
          >
            <img src={laptopImg} alt='about' className='img-fluid' />
          </Col>
        </Row>
        <h1 className='project-heading'>
          Professional <strong className='purple'>Skillset </strong>
        </h1>

        <Techstack />

        <h1 className='project-heading'>
          <strong className='purple'>Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
      <Container className='new-certifications'>
        <h1 className='project-heading'>
          My <strong className='purple'>CERTIFICATIONS</strong>
        </h1>
        <br />
        <br />
        <br />
        <Row className='resume'>
          <Col md={6} className='resume-left'>
            <Resumecontent
              title='Intern [Naren Pvt.Ltd]'
              date='April 2019 - June 2019'
              content={[
                "Assembled various components related to LDR and other Sensors. Learnt to operate adn utilize a sensor for it's various purposes",
              ]}
            />
            <Resumecontent
              title='Intern on ML & IoT [NITK-STEP]'
              date='March 2021 - April 2021'
              content={[
                'Introduction to Machine Learning and How to apply ML concepts with the help of IoT Devices to improve our day to day life',
              ]}
            />
            <Resumecontent
              title='Hackthon 2020'
              content={[
                'Participated in the National level Hackthon SIH2020 with a project called BookYourDoc built with flutter',
              ]}
            />
            <Resumecontent
              title='Cryptera 2k21 GAMING EVENT'
              content={[
                'Organzed a International Gaming event on behalf of annual college cultural event Cryptera',
              ]}
            />
          </Col>
          <Col md={6} className='resume-right'>
            <Resumecontent
              title='Computer Science Engineering [CIT , Coimbatore] '
              content={['Percent']}
            />
            <Resumecontent
              title='Diploma ECE [PSG Polytechnic College, Coimbatore]'
              date='2016 - 2019'
              content={['Precentage: 95%']}
            />
            <Resumecontent
              title='10TH BOARD [RJ Matriculation Hr.Sec School, Coimbatore] '
              date='2015'
              content={['Precentage: 97%']}
            />
            <Resumecontent
              title='GG'
              content={[
                `Current rank in HackerRank  65480`,
                'Top Performer in Code-Break 1.0',
                'Participant in SIH2020',
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default About;
