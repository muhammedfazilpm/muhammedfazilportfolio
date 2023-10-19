import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="GanG"
              description="Gang: Your Go-To Travel Companion is an app that connects travelers with local guides and hosts for personalized experiences, tours, and accommodations. It fosters cultural exchange and simplifies travel planning."
              ghLink="https://github.com/muhammedfazilpm/GanG-front"
              demoLink="https://gangguide.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Globalcycle"
              description="Your All-in-One E-commerce Solution: Our website offers a seamless shopping experience with payment processing, a convenient cart, and coupon integration. On the admin side, manage your store with ease."
              ghLink="https://github.com/muhammedfazilpm/ecart"
              demoLink="https://globalone.shop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Netflix-clone-app"
              description="React to Entertainment: Experience the magic of our Netflix clone app, built with React. Enjoy a wide selection of content, smooth navigation, and user-friendly features for a streaming experience that rivals the original."
              ghLink="https://github.com/muhammedfazilpm/netflix"
              demoLink="https://netfixcopy.netlify.app"              
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
