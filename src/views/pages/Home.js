import React, { useEffect } from "react";
import { BMS } from "../components/BMS/BMS";
import { Speed } from "../components/Speed/Speed";
import { Levitation } from "../components/Levitation/Levitation";
import { Position } from "../components/Position/Position";
import { ThermometerComp } from "../components/Thermometer/Thermometer";
import { BatteryTable } from "../components/BatteryTable/BatteryTable";
import { TabulatedData } from "../components/TabulatedData/TabulatedData";
import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import "./styles.css";

function Home(props) {
  return (
    <Container className="mx-0 px-0">
      <Row style={{ marginTop: "1rem" }} className="mx-0 px-0">
        <Col lg={5} className="col">
          <Position position={props.position} />
        </Col>
        <Col lg={3} className="col">
          <Speed speed={props.speed} />
        </Col>
        <Col lg={4} className="col">
          <Levitation height={props.height} />
        </Col>
      </Row>
      <Row style={{ marginTop: "0.5rem" }} className="mx-0 px-0">
        <Col lg={5} className="col">
          <ThermometerComp temp1={props.emsTemp} temp2={props.limTemp} />
        </Col>
        <Col lg={4} className="col">
          <BatteryTable
            packvoltage={props.packvoltage}
            packcurrent={props.packcurrent}
            maxpacktemp={props.maxpacktemp}
                minpacktemp = {props.minpacktemp}
                maxcellvoltage = {props.maxcellvoltage}
                mincellvoltage = {props.mincellvoltage}
                soc = {props.soc}
            title="Battery Pack"
          />
        </Col>
        <Col className="sub-section no-padding" lg={3}>
          <Row>
            <TabulatedData
              title="Pressure Sensors"
              data={[props.pressure1, props.pressure2]}
            />
          </Row>
          <Row>
            <TabulatedData
              title="Reed Sensors"
              data={[props.reed1, props.reed2, props.reed3, props.reed4]}
            />
          </Row>
          <Row>
            <TabulatedData
              title="Inverter"
              data={[(props.busbarVoltage ? props.busbarVoltage:0)  + " V", (props.sinefreq ? props.sinefreq:0)  + " Hz", props.modindex ? props.modindex:0]}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export { Home };
