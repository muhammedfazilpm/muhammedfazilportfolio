import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const BlogPage = () => {
  return (
    <Container>
      <Row style={{ justifyContent: "center", padding: "30px" }}>
        <Col md={8}>
          <Card className="quote-card-view">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <h1 style={{ fontSize: "2.4em", textAlign: "center",marginTop:"20px" }}>
                  <strong className="purple">
                    How to Hire a Freelance Web Developer in 2025
                  </strong>
                </h1>
                <p style={{ textAlign: "justify", marginTop: "20px" }}>
                  In 2025, finding the right <b>freelance web developer</b> can be a 
                  game-changer for your business. With remote work booming, hiring 
                  top talent is easier than ever—if you know what to look for.
                </p>

                <h2 className="purple">1. Define Your Project Requirements</h2>
                <p style={{ textAlign: "justify" }}>
                  Before hiring, outline your project’s needs. Do you need a 
                  <b>full-stack developer</b>, or just a front-end or back-end expert? 
                  List key features, technologies, and deadlines.
                </p>

                <h2 className="purple">2. Look for Experience & Portfolio</h2>
                <p style={{ textAlign: "justify" }}>
                  A strong portfolio showcases expertise. Look for past projects 
                  in <b>React, Node.js, Next.js, MongoDB, SQL</b>, or relevant frameworks 
                  based on your needs.
                </p>

                <h2 className="purple">3. Assess Technical & Communication Skills</h2>
                <p style={{ textAlign: "justify" }}>
                  Technical skills matter, but communication is just as important. 
                  A developer should understand your vision and provide clear updates.
                </p>

                <h2 className="purple">4. Discuss Budget & Payment Terms</h2>
                <p style={{ textAlign: "justify" }}>
                  Freelance developers charge hourly or per project. Discuss rates, 
                  milestones, and payment platforms (PayPal, Upwork, or direct bank transfers).
                </p>

                <h2 className="purple">5. Use Trusted Hiring Platforms</h2>
                <p style={{ textAlign: "justify" }}>
                  Platforms like <b>Upwork, Fiverr, Toptal, and LinkedIn</b> help you 
                  find skilled developers with verified reviews.
                </p>

                <p style={{ textAlign: "center", marginTop: "20px", color: "rgb(155 126 172)" }}>
                  "The right freelancer can transform your business—choose wisely!"
                </p>
                <footer className="blockquote-footer">Muhammed Fazil PM</footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPage;
