import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./ResumeContent";
import { AiOutlineDownload } from "react-icons/ai";
import hello from "../../Assets/hello.svg";

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
            target="_blank">
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
            style={{ borderRight: "3px solid rgb(0, 174, 239)" }}>
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
                    "Spearheaded development of an internal tool for stress testing, evolving it into a team-wide automation tool",
                    "Enhanced developer experience by automating Kubernetes resource management, pod restarts, log  fetching, and simulating production environments.",
                    "Achieved a 90% reduction in stress testing duration, ensuring bulletproof code on production and increased operational efficiency",
                    "Demonstrated proficiency in scripting, resource management, and automation for heightened organizational efficiency",
                  ],
                },
                {
                  title: "DevOps Engineer",
                  date: "Jan 2023 - June 2023",
                  content: [
                    "IBM COS-VPC Infrastructure",

                    "Engineered an industry-standard Python-based solution integrating Twistlock scan results with Slack and GITHUB for automated security monitoring, ensuring continuous system safety",

                    "Slashed cluster upgrade time by 40% through optimization of existing patch upgrade code, based on calculated average cluster processing time",

                    "Implemented a refined system diagnostics notification system, categorizing alerts by severity for improved monitoring and response capabilities.",
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
              title="Halcyon"
              date="March 2020 - Current"
              content={[
                {
                  title: "FOUNDER",
                  content: [
                    "Founded a startup which focuses on designing and developing Websites and Mobile applications.",
                    "Created and published two mobile applications to the playstore",
                    "Designed and developed multiple websites for customers and institutions",
                  ],
                },
              ]}
              link="https://halcyon.netlify.app/"
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
            target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
