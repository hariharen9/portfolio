import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Hariharen-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import hello from "../../Assets/hello.png";

function Resume() {
  // const [cgpa, upadteCgpa] = useState(0);
  const cgpa = 8.2;

  return (
    <Container fluid className="resume-section">
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://drive.google.com/file/d/1emagYjcTNNaGeL23jY2i1icrTJSoKxGr/view?usp=sharing"
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download Resume&nbsp;
          </Button>
        </Row>
        &nbsp;
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={hello}
              height="300px"
              width="300px"
              alt="home pic"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Tata Consultancy Services"
              date="July 2022 - CURRENT"
              content={[
                {
                  title: "Software Development Engineer",
                  date: "July 2023 - CURRENT",
                  content: [
                    "IBM Network Overlay - GENCTL",
                    "Creating a Stress testing module to tacle overloading problem in a region on IBM Cloud",
                  ],
                },
                {
                  title: "DevOps Engineer",
                  date: "Jan 2023 - June 2023",
                  content: [
                    "IBM COS-VPC Infrastructure",

                    "Engineered an industry-standard solution that integrates twistlock scan results with Slack and GIT issue creation using Python which is automated and will ensure the system is secure all the time.",

                    "Reduced the upgrade time of clusters by 40% after calculating the average time a cluster takes and making changes to the already existing patch upgrade code.",

                    "Filtered the system diagnostics notifications and split them according to their severity which was not in place previously",
                  ],
                },
                {
                  title: "Systems Engineer",
                  date: "July 2022 - Dec 2022",
                  content: [
                    "Worked on Python, Docker, Kubernetes",
                    "Collaborated with a team to optimize the learning process",
                  ],
                },
              ]}
            />
            <Resumecontent
              title="Intern [Naren Pvt.Ltd]"
              date="April 2019 - June 2019"
              content={[
                "Assembled various components related to LDR and other Sensors. Learnt to operate adn utilize a sensor for it's various purposes",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science Engineering - CIT , Coimbatore "
              date="2019 - 2022"
              content={[`CGPA: ${cgpa} `]}
            />
            <Resumecontent
              title="Diploma ECE - PSG Polytechnic College, Coimbatore"
              date="2016 - 2019"
              content={["Precentage: 95%"]}
            />
            <Resumecontent
              title="10TH BOARD - RJ Matriculation Hr.Sec School, Coimbatore "
              date="2015"
              content={["Precentage: 97%"]}
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
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Current rank in HackerRank  65480",
                "Top Performer in Code-Break 1.0",
                "Participant in SIH2020",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
