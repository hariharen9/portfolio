import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    light: {
      grade1: '#c084f5',
      grade0: '#ecd9fc',
    },
    dark: {
      grade1: '#c084f5',
      grade0: '#ecd9fc',
    },
  }
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">GITHUB</strong> Stats
      </h1>

      <GitHubCalendar
        username="hariharen9"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
