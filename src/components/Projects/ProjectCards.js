import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view no-img-card">
      <Card.Body className="d-flex flex-column">
        <h3 className="project-title">{props.title}</h3>
        <p className="project-description" style={{ textAlign: "justify" }}>
          {props.description}
        </p>
        <div className="project-card-actions mt-auto">
          <Button variant="primary" href={props.ghLink} target="_blank" className="btn-modern">
            <BsGithub />
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="btn-modern"
            >
              <CgWebsite />
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
