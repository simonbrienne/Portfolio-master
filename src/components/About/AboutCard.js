import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SIMON BRIENNE </span>
            from <span className="purple"> Lille, France.</span>
            <br />
            <br />
            I am a DevOps Engineer and I obtained my professional degree in industrial electronics and computer science and started my career as a DevOps, 
            which was a new discipline for me at the time. 
            Over the years, I have gained strong expertise in this field. 
            My various experiences have allowed me to grow as a DevOps.
            <br />
            <br />
            I am determined to ensure quality and meet deadlines through my meticulousness and methodology. 
            I am also able to work effectively in a team, collaborating with my colleagues.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "DevOps is not a goal, but a never-ending process of continual improvement."{" "}
          </p>
          <footer className="blockquote-footer">Jez Humble</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
