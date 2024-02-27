import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./ResumeContent";
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
              style={{ paddingBottom: "5em", paddingTop: "3em" }}
            />
          </Col>
        </Row>
        <Row className="resume">
          <Col
            md={6}
            className="resume-left"
            style={{ borderRight: "3px solid rgba(205, 95, 248, 0.5)" }}
          >
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
                    "Spearheaded the development of an comprehensive internal utility tool, which was initially concieved as a tool for stress testing, but evolved into an automation tool which is used by the entire team for development and testing.",
                    "The tool can create network resources inside the kubernetes cluster, delete the created resources, restart the pods, fetch logs and option is available to simulate the production environment further helping in troubleshooting and debugging for developers",
                    "This improved the developer experience significantly and ensured the code that was being shipped is bulletproof and decreased the testing duration by 90% since most of the setup is automated.",
                    "Demonstrated proficiency in scripting, network resource management, and automation, resulting in heightened operational efficiency within the organization.",
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
                "Naren is a Electronics manufacturing company. They specialise in textile electronics and proximity sensors.",
                "Assembled various components related to LDR and other Sensors. Learnt to operate adn utilize a sensor for it's various purposes",
                "Worked in SMT Soldering, heavy duty relay manufacturing, Inductive proximty sensor manufacturing.",
                "Designing and testing circuits for Low pressure sensors.",
                "Manufacturing and servicing spare parts of Auto Coner 338 machine.",
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
            <h3 className="resume-title">Courses</h3>
            <Resumecontent title="IBM Cloud Advocate V2" content={[]} />
            <Resumecontent title="Python Specialization" content={[]} />
            <Resumecontent title="Flutter Bootcamp 2020" content={[]} />
            <Resumecontent title="Blockchain Basics" content={[]} />
            <Resumecontent title="Javascript Bootcamp" content={[]} />
            <Resumecontent title="Full-Stack Web Developer" content={[]} />
            <h7>And many more....</h7>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={
              "https://drive.google.com/file/d/1emagYjcTNNaGeL23jY2i1icrTJSoKxGr/view?usp=sharing"
            }
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
