import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Speed } from "../components/Speed/Speed";
import "./styles.css";
import { ThreePhase } from "../components/ThreePhase/ThreePhase";
import { VoltagePropulsion } from "../components/VoltagePropulsion/VoltagePropulsion";

function Propulsion(props) {
  return (
    <Container className="mx-0 px-0">
      <Row style={{ marginTop: "1rem" }} className="mx-0 px-0">
        <Col lg={9} className="col">
          <ThreePhase data={props.ipmdata} />
        </Col>
        <Col lg={3} className="col">
          <VoltagePropulsion busbarVoltage={props.busbarVoltage} />
        </Col>
      </Row>
      <Row style={{ marginLeft: "1rem", marginTop: "1rem" }}>
        <Col lg={3} className="col">
          <Speed speed={props.speed} />
        </Col>
      </Row>
    </Container>
  );
}

export { Propulsion };
