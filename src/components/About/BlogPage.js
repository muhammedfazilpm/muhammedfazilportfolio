import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const FreelanceDeveloperBlog = () => {
  return (
    <Container>
      <Row style={{ justifyContent: "center", padding: "30px" }}>
        <Col md={8}>
          <Card className="quote-card-view">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <h1 style={{ fontSize: "2.4em", textAlign: "center", marginTop: "20px" }}>
                  <strong className="purple">
                    Hire the Best Freelance Web Developer in 2025 – Boost Your Online Presence
                  </strong>
                </h1>
                <p style={{ textAlign: "justify", marginTop: "20px" }}>
                  Looking to <b>hire a freelance web developer</b> in 2025? Whether you’re a startup,
                  small business, or entrepreneur, the right developer can turn your vision into a fully
                  functional, responsive, and engaging website.
                </p>

                <h2 className="purple">Why Choose a Freelance Developer?</h2>
                <p style={{ textAlign: "justify" }}>
                  Freelancers bring flexibility, expertise, and cost-efficiency. You get to work with a 
                  <b>dedicated developer</b> who understands your goals without the overhead of a full agency.
                </p>

                <h2 className="purple">What Services Can You Expect?</h2>
                <p style={{ textAlign: "justify" }}>
                  From <b>custom web development</b> and <b>React.js/Node.js apps</b> to <b>eCommerce websites</b> 
                  and <b>SEO-optimized designs</b>, a skilled freelance developer handles it all.
                </p>

                <h2 className="purple">Technologies I Work With</h2>
                <p style={{ textAlign: "justify" }}>
                  I specialize in <b>MERN stack (MongoDB, Express, React, Node.js)</b>, along with 
                  <b>Next.js, Tailwind CSS, REST APIs, and SQL databases</b>. Every project is built for performance, security, and mobile responsiveness.
                </p>

                <h2 className="purple">How to Get Started</h2>
                <p style={{ textAlign: "justify" }}>
                  Ready to start your web project? Let’s connect! I offer free consultations to understand 
                  your goals, budget, and timeline. Together, we’ll bring your website to life.
                </p>

                <h2 className="purple">Let’s Build Something Great</h2>
                <p style={{ textAlign: "justify" }}>
                  Whether you're launching a product, building a portfolio, or upgrading your current site,
                  I’m here to help. With proven experience and a client-first approach, I deliver results 
                  that speak for themselves.
                </p>

                <p style={{ textAlign: "center", marginTop: "20px", color: "rgb(155 126 172)" }}>
                  "Great websites are built with purpose—let's build yours together."
                </p>
                <footer className="blockquote-footer">Muhammed Fazil PM – Freelance Web Developer</footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FreelanceDeveloperBlog;
