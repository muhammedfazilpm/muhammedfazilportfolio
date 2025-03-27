import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Muhammed Fazil PM</span> from 
          <span className="purple"> Kerala, India.</span>
          <br />  
          I am an <b>Electronics Post Graduate</b> who found a deep passion for 
          <b> Software Development</b> and Web Technologies.
          <br />  
          Currently, I work as a <b>Freelance MERN Stack Developer</b>, helping 
          businesses build scalable and efficient web applications.
          <br />
          <br />
          Beyond coding, I enjoy engaging in various activities that inspire me:
        </p>
        <ul>
          <li className="about-activity">
            <ImPointRight /> Research
          </li>
          <li className="about-activity">
            <ImPointRight /> Learning
          </li>
          <li className="about-activity">
            <ImPointRight /> Traveling
          </li>
          <li className="about-activity">
            <ImPointRight /> Business
          </li>
        </ul>
  
        <p style={{ color: "rgb(155 126 172)" }}>
          "Strive to build things that make a difference!"{" "}
        </p>
        <footer className="blockquote-footer">Muhammed Fazil PM</footer>
      </blockquote>
    </Card.Body>
  </Card>
  
  );
}

export default AboutCard;
