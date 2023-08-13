import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import "./Battery.css";
import { BMS } from "../components/BMS/BMS";

import btpckPod from "../../assets/batterypack-pod.png";

function BatteryPackData(props) {
  return (
    <Row
      className={
        props.top ? "top col box white-text" : "bottom col box white-text"
      }
    >
      <h6 style={{ color: "#779933" }}>Battery Pack {props.num}</h6>
      <div>Voltage: {props.data.voltage}</div>
      <div>Current: {props.data.current}</div>
      <div>State of Charge: {props.data.state_of_charge}</div>
    </Row>
  );
}

function LMUData(props) {
  return (
    <Row
      className={
        props.top ? "top col box white-text" : "bottom col box white-text"
      }
    >
      <h6 style={{ color: "#779933" }}>LMU {props.num} </h6>
      <div>Temp Sensor-1: {props.data.temp1}°C</div>
      <div>Temp Sensor-2: {props.data.temp2}°C</div>
    </Row>
  );
}

function Battery(props) {
  return (
    <Container className="mx-0 px-0">
      <div
        style={{ backgroundImage: `url(${btpckPod})`, marginTop: "3rem" }}
        className="bg-img small-text"
      >
        <Row style={{ height: "73vh" }}>
          <Row>
            <Col lg={1} />
            <Col lg={2}>
              <LMUData num={1} data={props.lmu1} />
            </Col>
            <Col lg={1} />
            <Col lg={2}>
              <LMUData top={true} num={3} data={props.lmu3} />
            </Col>
            <Col lg={2}>
              <LMUData top={true} num={4} data={props.lmu4} />
            </Col>
            <Col lg={1} />
            <Col lg={2} style={{ marginLeft: "30px" }}>
              <LMUData num={6} data={props.lmu6} />
            </Col>
          </Row>

          <Row style={{ height: "3vh" }}></Row>

          <Row style={{ height: "3vh" }}>
            <Row>
              <Col lg={3} />
              <Col lg={3}>
                <LMUData num={2} data={props.lmu2} />
              </Col>
              <Col lg={1} />
              <Col lg={3}>
                <LMUData num={5} data={props.lmu5} />
              </Col>
            </Row>
          </Row>

          <Row></Row>
          <Row style={{ height: "20vh" }}></Row>
          <Row>
            <Col lg={1} />
            <Col lg={2}>
              <LMUData top={true} num={7} data={props.lmu7} />
            </Col>
            <Col lg={1} />
            <Col lg={2}>
              <LMUData num={9} data={props.lmu9} />
            </Col>
            <Col lg={2}>
              <LMUData num={10} data={props.lmu10} />
            </Col>
            <Col lg={1} />
            <Col lg={2} style={{ marginLeft: "30px" }}>
              <LMUData top={true} num={12} data={props.lmu12} />
            </Col>
          </Row>
          <Row style={{ height: "3vh" }}>
            <Row>
              <Col lg={3} />
              <Col lg={3}>
                <LMUData num={8} data={props.lmu8} />
              </Col>
              <Col lg={1} />
              <Col lg={3}>
                <LMUData num={11} data={props.lmu11} />
              </Col>
            </Row>
          </Row>
        </Row>
      </div>
    </Container>
  );
}

export { Battery };
