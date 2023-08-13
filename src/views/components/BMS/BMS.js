import React from "react";
import { useState } from "react";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import "./BMS.css";
import "../commonStyles.css";
import { Container, Row, Col } from "react-bootstrap";

// function Cell(props) {
//   const [tooltip, setTooltip] = useState({ temp: 0, volt: 0 });
//   const renderTooltip = (props) => (
//     <Tooltip id="button-tooltip" {...props}>
//       Temperature: {tooltip.temp}C
//     </Tooltip>
//   );
//   const tempColor =
//     props.temp > 20 ? (props.temp > 50 ? "bg-red" : "bg-orange") : "bg-green";
//   return (
//     <OverlayTrigger
//       placement="right"
//       delay={{ show: 250, hide: 400 }}
//       overlay={renderTooltip}
//     >
//       <div
//         onMouseEnter={() => {
//           setTooltip({ temp: props.temp, volt: props.voltage });
//         }}
//         className={`bms-cell ${tempColor}`}
//       >
//         {props.voltage}V
//       </div>
//     </OverlayTrigger>
//   );
// }
// function BMS(props) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div className="white-text sub-section container-grid">
//         {props.array[0].map((cell) => {
//           return <Cell temp={cell.temp} voltage={cell.voltage} />;
//         })}
//         {props.array[1].map((cell) => {
//           return <Cell temp={cell.temp} voltage={cell.voltage} />;
//         })}
//         {props.array[2].map((cell) => {
//           return <Cell temp={cell.temp} voltage={cell.voltage} />;
//         })}
//       </div>
//     </div>
//   );
// }

// export { BMS };

function Cell(props) {
  return <div className={`bms-cell`}>◉</div>;
}

function EvenRow(props) {
  return (
    <Row className="container-grid">
      <Col lg={2}>
        <Cell voltage={1} />
      </Col>
      <Col lg={2}></Col>
      <Col lg={2}>
        <Cell voltage={1} />
      </Col>
      <Col lg={2}></Col>
      <Col lg={2}>
        <Cell voltage={1} />
      </Col>
      <Col lg={2}></Col>
    </Row>
  );
}

function OddRow(props) {
  return (
    <Row className="container-grid odd-row">
      <Col lg={2}></Col>
      <Col lg={2}>
        <Cell voltage={1} />
      </Col>
      <Col lg={2}></Col>
      <Col lg={2}>
        <Cell voltage={1} />
      </Col>
      <Col lg={2}></Col>
      <Col lg={2}>
        <Cell voltage={1} />
      </Col>
    </Row>
  );
}

function BMS(props) {
  return (
    <Container>
      <Container className="sub-section white-text">
        <h4 style={{ marginBottom: "2rem" }}>Primary Battery Pack</h4>
        {/* <div className="container-grid">
          {props.array[0].map((cell) => {
            return <Cell temp={cell.temp} voltage={cell.voltage} />;
          })}
          {props.array[1].map((cell) => {
            return <Cell temp={cell.temp} voltage={cell.voltage} />;
          })}
          {props.array[2].map((cell) => {
            return <Cell temp={cell.temp} voltage={cell.voltage} />;
          })}
        </div> */}
        <div className="bms-box">
          <EvenRow />
          <OddRow />
          <EvenRow />
          <OddRow />
          <EvenRow />
        </div>
      </Container>
    </Container>
  );
}

export { BMS };
