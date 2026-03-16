import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

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
              I’m an AI Researcher and Web Developer who loves transforming ideas into
              intelligent, scalable products. My focus lies at the intersection of Artificial Intelligence and modern web technologies.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, JavaScript, and specialized AI frameworks. {" "}
                </b>
              </i>
              <br />
              <br />
              My key areas of expertise include
              <i>
                <b className="purple">
                  {" "}
                  LLMs, Retrieval-Augmented Generation (RAG), and Agentic Workflows.{" "}
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I love building applications that utilize
              <b className="purple"> LangChain, Vector Databases </b> and modern APIs like{" "}
              <i>
                <b className="purple">OpenAI, Gemini API,</b> and locally hosted {" "}
                <b className="purple">Ollama</b> models.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar"  style={{paddingRight: "20px" }} />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
