import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import terraformgkesampleapp from "../../Assets/Projects/terraformgkesampleapp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={terraformgkesampleapp}
              isBlog={false}
              title="Terraform GKE sample app"
              description="Deploy your GKE cluster thanks to the power of infrastucture as code with Terraform and GitHub Actions."
              ghLink="https://github.com/simonbrienne/terraform-gke-sample-app"
              //demoLink="https://yourdemolink.com"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={terraformgkesampleapp}
              isBlog={false}
              title="Terraform GKE sample app"
              description="Deploy your GKE cluster thanks to the power of infrastucture as code with Terraform and GitHub Actions."
              ghLink="https://github.com/simonbrienne/terraform-gke-sample-app"
              demoLink="https://yourdemolink.com"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
