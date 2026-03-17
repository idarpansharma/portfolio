import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Darpan Sharma</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Corsa Automations</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.instagram.com/darpan.decoded"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour footer-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/darpan-sharma-60867222b/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour footer-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
