import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../commonStyles.css";

function VoltagePropulsion(props) {
  return (
    <Container>
      <Container className="sub-section white-text" style={{ width: "80%" }}>
        <h4>Busbar Voltage</h4>
        <span style={{ color: "limegreen" }}>{props.busbarVoltage}</span> V
      </Container>
    </Container>
  );
}

export { VoltagePropulsion };
