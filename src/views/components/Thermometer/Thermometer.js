import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Thermometer from "react-thermometer-component";
import "../commonStyles.css";
import "./Thermometer.css";

function ThermometerComp(props) {
  const tempSections = [
    { name: "EMS", temp: props.temp1 },
    { name: "LIM", temp: props.temp2 },
  ];
  return (
    <Container>
      <Container
        className="sub-section white-text"
        style={{ width: "95%", padding: "2.5rem" }}
      >
        <h4>Temperature</h4>
        <Row style={{ columnGap: "1.2rem" }}>
          {tempSections.map((section) => (
            <Col className="sub-sub-section">
              <h6 style={{ color: "rgba(230,230,230,0.8)" }}>{section.name}</h6>
              <Row>
                <Col>
                  <Thermometer
                    theme="dark"
                    max={100}
                    height={150}
                    format="°C"
                    reverseGradient={true}
                    value={section.temp ? section.temp : 25}
                  />
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export { ThermometerComp };
