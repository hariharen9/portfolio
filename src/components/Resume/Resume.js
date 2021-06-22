import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Hariharen-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  // const [cgpa, upadteCgpa] = useState(0);
  const cgpa = 7.6;
  const sem = 5;

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://drive.google.com/file/d/1emagYjcTNNaGeL23jY2i1icrTJSoKxGr/view?usp=sharing"
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Intern [Naren Pvt.Ltd]"
              date="April 2019 - June 2019"
              content={[
                "Assembled various components related to LDR and other Sensors. Learnt to operate adn utilize a sensor for it's various purposes",
              ]}
            />
            <Resumecontent
              title="Intern on ML & IoT [NITK-STEP]"
              date="March 2021 - April 2021"
              content={[
                "Introduction to Machine Learning and How to apply ML concepts with the help of IoT Devices to improve our day to day life",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Hackthon 2020"
              content={[
                "Participated in the National level Hackthon SIH2020 with a project called BookYourDoc built with flutter",
              ]}
            />
            <Resumecontent
              title="Cryptera 2k21 GAMING EVENT"
              content={[
                "Organzed a International Gaming event on behalf of annual college cultural event Cryptera",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science Engineering [CIT , Coimbatore] "
              date="2019 - Present"
              content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
            />
            <Resumecontent
              title="Diploma ECE [PSG Polytechnic College, Coimbatore]"
              date="2016 - 2019"
              content={["Precentage: 95%"]}
            />
            <Resumecontent
              title="10TH BOARD [RJ Matriculation Hr.Sec School, Coimbatore] "
              date="2015"
              content={["Precentage: 97%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in HackerRank  65480`,
                "Top Performer in Code-Break 1.0",
                "Participant in SIH2020",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
