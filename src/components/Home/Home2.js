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
              I fell in love with devops practices and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I enjoy practicing CI/CD using tools like
              <i>
                <b className="purple">Jenkins, GitHub Action </b>
                and others tools on the different cloud providers.
              </i>
              <br />
              <br />
              <i>
                <b className="purple">Docker, Kubernetes, Ansible and Terraform </b>
                dosn't have secret for me! &nbsp;
              </i>
              <br />
              <br />
              As a DevOps engineer, I leverage cloud providers
              like <b className="purple">AWS, Azure</b> and
              <i>
                <b className="purple">
                  {" "}
                  GCP
                </b>
              </i>
              &nbsp; to build scalable and resilient infrastructure and to enable efficient
              <i>
                <b className="purple"> deployment and automation </b>
                of software applications.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/simonbrienne"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/simon-brienne-%F0%9F%A5%B7-081901154/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
