import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    LET ME <span className="purple"> INTRODUCE </span> MYSELF
  </h1>
  <p className="home-about-body">
    Passionate about coding, I thrive on solving complex problems and building 
    scalable web applications. My journey in software development has equipped 
    me with expertise in modern technologies and frameworks.
    <br />
    <br />
    I specialize in 
    <i>
      <b className="purple"> JavaScript, Node.js, Express.js, SQL, and MongoDB.</b>
    </i>
    <br />
    <br />
    My key areas of interest include developing innovative &nbsp;
    <i>
      <b className="purple">web applications and scalable digital solutions.</b>
    </i>
    <br />
    <br />
    I am passionate about leveraging 
    <b className="purple"> Node.js </b> 
    and modern JavaScript frameworks like 
    <i>
      <b className="purple"> React.js and Redux</b>
    </i> 
    to create high-performance, user-centric applications.
    <br />
    <br />
    I constantly explore new technologies to enhance user experience, optimize 
    backend performance, and contribute to open-source projects.
  </p>
</Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img style={{height:"300px",width:"auto",borderRadius:"100px"}} src='https://res.cloudinary.com/dves9p9u6/image/upload/v1742380888/1A3A3445_cedbki.jpg' className="img-fluid" alt="Fazil - Freelance MERN Stack Developer" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">  <a className="purple" href="https://wa.me/+919526788138" style={{ textDecoration: "none" }}>
  Connect
</a> </span>with me
            </p>
          <p>
          <a href="https://wa.me/+919526788138" style={{ fontFamily: "monospace", textDecoration: "none",color:"white" }}>
  +91 9526788138
</a>
          </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/muhammedfazilpm"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
              <a
                href="https://leetcode.com/fazilfezz/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <p>leet</p>
              </a>
            </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammedfazilpm/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/f_a_zil_pm?igshid=OGQ5ZDc2ODk2ZA=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
