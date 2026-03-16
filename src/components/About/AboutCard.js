import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">DARPAN SHARMA</span>{" "}
            from <span className="purple">Noida, India</span>.
            <br />
            I’m currently working as an{" "}
            <span className="purple">AI Researcher</span> at{" "}
            <span className="purple">Xonier Technologies</span>.
            <br />I hold a BTech degree in{" "}
            <span className="purple">Computer Science & Engineering (AI & ML)</span> from{" "}
            <span className="purple">ABES Engineering College, Ghaziabad</span>.
            <br />
            <br />
            Outside of research and coding, I am passionate about:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring the latest in LLMs and AI Architectures
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Smart Systems and Automations
            </li>
            <li className="about-activity">
              <ImPointRight /> Technology and Content Creation
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Designing intelligent systems that bridge ideas to reality!"{" "}
          </p>
          <footer className="blockquote-footer">Darpan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
