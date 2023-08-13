import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import threePhase from "../../../assets/three-phase.svg";
import red_coil from "../../../assets/red_coil.svg";
import blue_coil from "../../../assets/blue_coil.svg";
import yellow_coil from "../../../assets/yellow_coil.svg";
import Thermometer from "react-thermometer-component";
import "./ThreePhase.css";
import "../commonStyles.css";

function ThreePhase(props) {
  return (
    <Container>
      <Container className="sub-section white-text">
        <Row>
          <Col
            style={{ borderRight: "rgba(200,200,200,0.5) dotted 1px" }}
            lg={8}
          >
            <h4 style={{ textAlign: "center" }}>Three Phase Current</h4>
            <Row
              style={{
                fontWeight: "bold",
                color: "rgb(200,200,200)",
                textDecoration: "underline",
              }}
              className="mt-4"
            >
              <Col lg={6}></Col>
              <Col lg={3} style={{ textAlign: "left" }}>
                Current
              </Col>
              <Col lg={3}>Error</Col>
            </Row>
            {[
              { imgSrc: red_coil, current: props.data.Ia, error: props.data.Ia_error },
              { imgSrc: yellow_coil, current: props.data.Ib, error: props.data.Ib_error },
              { imgSrc: blue_coil, current: props.data.Ic, error: props.data.Ic_error },
            ].map((phase) => {
              return (
                <Row className="mt-4">
                  <Col lg={6}>
                    <Image width="60%" src={phase.imgSrc} />
                  </Col>
                  <Col lg={4}>
                    <div className="three-phase">{phase.current}A</div>
                  </Col>
                  <Col lg={2}>
                    <div className={phase.error && "active"}></div>
                  </Col>
                </Row>
              );
            })}
          </Col>

          <Col>
            <Row>
              <Thermometer
                theme="dark"
                max={100}
                height={150}
                format="°C"
                reverseGradient={true}
                value={props.data.ipmtemp}
              />
            </Row>
            <Row>
              <div className="mt-3 temp-alert">HIGH</div>
              <div style={{ marginLeft: 110, width: 1}} className={props.data.overtemp && "active"}></div>
            </Row>
          </Col>
        </Row>
        {/* <Row className="align-items-center">
          <Col lg={2} className="mp-0">
            <div className="three-phase">10A </div>
            <div className="three-phase">ON</div>
          </Col>
          <Col lg={8} className="mp-0"></Col>
          <Col lg={2} className="mp-0">
            <div className="three-phase">10A </div>
            <div className="three-phase">ON</div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={2} className="mp-0"></Col>
          <Col lg={8} className="mp-0">
            <Image width="100%" src={threePhase} />
          </Col>
          <Col lg={2} className="mp-0"></Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={5} className="mp-0"></Col>
          <Col lg={2} className="mp-0">
            <div className="three-phase">10A </div>
            <div className="three-phase">ON</div>
          </Col>
          <Col lg={5} className="mp-0"></Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export { ThreePhase };
