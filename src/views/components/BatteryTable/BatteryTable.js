import React from "react";
import { Table } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import "../commonStyles.css";

function BatteryTable(props) {
  return (
    <Container>
      <Container className="sub-section white-text">
        <h4>Battery Pack</h4>
        <Table
          style={{ width: "90%", borderRadius: "1rem", margin: "auto" }}
          bordered
          variant="dark"
        >
          <tbody className="normal-wt">
            <tr>
              <th>Total Pack voltage</th>
              <th>{props.packvoltage}V</th>
            </tr>
            <tr>
              <th>Total Pack current</th>
              <th>{props.packcurrent}A</th>
            </tr>
            <tr>
              <th>Min. cell temp.</th>
              <th>{props.minpacktemp}°C</th>
            </tr>
            <tr>
              <th>Max. cell temp.</th>
              <th>{props.maxpacktemp}°C</th>
            </tr>
            <tr>
              <th>Min. Cell Voltage</th>
              <th>{props.mincellvoltage}mV</th>
            </tr>
            <tr>
              <th>Max. Cell Voltage</th>
              <th>{props.maxcellvoltage}mV</th>
            </tr>
            <tr>
              <th>SOC</th>
              <th>{props.soc}%</th>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}

export { BatteryTable };
