import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPostman } from "react-icons/si";
import { Icon } from '@iconify/react';
import { FaTerminal } from 'react-icons/fa';

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="simple-icons:atlassian" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTerminal />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="bxs:file-json" />
      </Col>
    </Row>
  );
}

export default Toolstack;
