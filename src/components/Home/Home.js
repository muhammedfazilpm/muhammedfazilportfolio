import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Helmet } from "react-helmet";

<Helmet>
  <title>Muhammed Fazil PM | MERN Stack Developer</title>
  <meta name="description" content="Muhammed Fazil PM - A Freelance MERN Stack Developer specializing in React.js, Node.js, MongoDB, and full-stack web development." />
</Helmet>


function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammed Fazil PM",
    "jobTitle": "Freelance MERN Stack Developer",
    "url": "https://fazildev.site",
    "image": "https://res.cloudinary.com/dves9p9u6/image/upload/v1742380888/1A3A3445_cedbki.jpg", 
    "sameAs": [
      "https://www.linkedin.com/in/muhammedfazilpm",
      "https://github.com/muhammedfazilpm",
      "https://twitter.com/yourtwitter"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calicut",
      "addressCountry": "India"
    }
  };
  return (
    <section>
        <Helmet>
      {/* Meta Tags for SEO */}
      <title>Muhammed Fazil PM | Freelance MERN Stack Developer</title>
      <meta name="description" content="I am a MERN Stack Developer specializing in React.js, Node.js, MongoDB, and full-stack web development. Available for freelance projects." />
      <meta name="robots" content="index, follow" />

      {/* Schema Markup for Google Rich Results */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
  I'm <strong className="main-name">Muhammed Fazil PM</strong> –  
  {/* <span className="title">Freelance MERN Stack Developer & Web Developer</span> */}
</h1>


              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="Fazil - Freelance MERN Stack Developer"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
