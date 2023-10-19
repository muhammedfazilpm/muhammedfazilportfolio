import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1>Figma</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <h1>Bootstrap</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <h1>Data structure</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <h1>AWS</h1>
      </Col>
    </Row>
  );
}

export default Toolstack;
