import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
  <Row style={{ justifyContent: "center", padding: "10px" }}>
    <Col
      md={7}
      style={{
        justifyContent: "center",
        paddingTop: "30px",
        paddingBottom: "50px",
      }}
    >
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
        Know Who <strong className="purple">I AM</strong>
      </h1>
      <Aboutcard />
    </Col>
    <Col
      md={5}
      style={{ paddingTop: "120px", paddingBottom: "50px" }}
      className="about-img"
    >
      <img
        src={laptopImg}
        alt="Freelance MERN Stack Developer"
        className="img-fluid"
      />
    </Col>
  </Row>

  <h1 className="project-heading">
    My <strong className="purple">Technical Expertise</strong>
  </h1>
  <Techstack />

  <h1 className="project-heading">
    Essential <strong className="purple">Development Tools</strong> I Use
  </h1>
  <Toolstack />

  <h1 className="project-heading">
    <strong className="purple">GitHub</strong> Contributions & Projects
  </h1>
  <Github />
</Container>

    </Container>
  );
}

export default About;
