import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bas from '../../Assets/Projects/Bas.png'
import indus from '../../Assets/Projects/induswayfare.png'
import signmedia from '../../Assets/Projects/signmedia.png'


function Projects() {



  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently as a freelancer.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={indus}
              isBlog={false}
              title="Induswayfair"
              description="Indus Wayfair is a visionary real estate company. and  responsive static website for IndusWayfare using React, enhancing their online presence and user engagement.did as a freelance website "
              // ghLink="https://github.com/muhammedfazilpm/GanG-front"
              demoLink="https://www.induswayfair.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bas}
              isBlog={false}
              title="Bas study centre"
              description="BAS Study Centre is committed to enriching the lives of our students by empowering them. this is a Dynamic  website made with React,Node and mongodb and also an admin pannel"
              // ghLink="https://github.com/muhammedfazilpm/ecart"
              demoLink="https://www.basstudycentre.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signmedia}
              isBlog={false}
              title="Signmedia"
              description="its a ecomerce website to sell and show case the product like mechines with the help of react node and mongo db and contain a admin pannel to add and edit products and show case the orders"
              // ghLink="https://github.com/muhammedfazilpm/netflix"
              demoLink="https://signmedia.vercel.app/"              
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
