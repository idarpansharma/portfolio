import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
// removed netflix as unused
import time from "../../Assets/Projects/time.png"
import photographer from "../../Assets/Projects/photographer.png"
import dev from "../../Assets/Projects/dev.png"


function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={dev}
              isBlog={false}
              title="Local LLM Fine-Tuning & RAG System"
              description="Fine-tuned and deployed local Large Language Models using Ollama, optimizing model responses for domain-specific queries. Built a Retrieval-Augmented Generation (RAG) pipeline using LangChain and vector databases to enable semantic search and context-aware responses."
              ghLink="https://github.com/idarpansharma/RAG-model-idarpan.git"
              demoLink="https://github.com/idarpan-sharma"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photographer}
              isBlog={false}
              title="AI Brand Content Generator"
              description="Developed an AI-powered system that converts text prompts into brand-personalized social media visuals using the Gemini API. Integrates prompt engineering and specialized AI Image Generation techniques."
              ghLink="https://github.com/idarpansharma/Imagina-AI.git"
              demoLink="https://github.com/idarpan-sharma"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="AI Virtual Avatar & Text-to-Speech"
              description="Built an interactive AI virtual avatar system capable of converting text into realistic speech with custom face integration. Implemented 3D character rendering combined with AI-driven speech synthesis for immersive, interactive conversational experiences."
              ghLink="https://github.com/idarpansharma/TTS-3D-model-idarpan.git"
              demoLink="https://github.com/idarpan-sharma"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={time}
              isBlog={false}
              title="Real-Time Smart Parking Management"
              description="Built a machine-learning-based system to predict and manage parking space availability using IoT sensors and cameras. Employed OpenCV and custom Flask pipelines integrated into IoT edge computing devices."
              ghLink="https://github.com/idarpansharma/Smart-Parking-Management-System-using-ML.git"
              demoLink="https://github.com/idarpan-sharma"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
